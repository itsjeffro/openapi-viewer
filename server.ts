import express from 'express'
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import SwaggerParser from "@apidevtools/swagger-parser";
import 'dotenv/config'
import config from "./config";

async function createServer(isProd: boolean) {
  const app = express()

  let vite;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
      logLevel: !isProd ? "error" : "info",
    });

    app.use(vite.middlewares);
  }

  if (isProd) {
    app.use(express.static(path.join(__dirname, "/dist")));
  }

  app.get('/api/openapi', async (req, res) => {
    const yaml = path.join(__dirname, config.storage.openapi);

    let api = await SwaggerParser.validate(yaml);

    res.json(api);
  })

  app.get("*", async (req, res) => {
    try {
      if (isProd) {
        res.sendFile(path.join(__dirname, '/dist/index.html'));
      } else {
        const url = req.originalUrl

        let template = fs.readFileSync(path.resolve('index.html'), 'utf-8')

        template = await vite.transformIndexHtml(url, template)

        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
        const appHtml = await render(url)
        const html = template.replace(`<!--ssr-outlet-->`, appHtml)

        res.status(200).set({'Content-Type': 'text/html'}).end(html)
      }
    } catch (error) {
      !isProd && vite.ssrFixStacktrace(error)

      console.log(error.stack)

      res.status(500).end(error.stack)
    }
  })

  app.listen(5173, () => {
    console.log(`Listening on port http://localhost:5173 ${config.env}`)
  })
}

createServer(
  config.env === "production"
)
