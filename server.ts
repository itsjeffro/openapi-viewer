import express from 'express'
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import SwaggerParser from "@apidevtools/swagger-parser";

async function createServer(isProd = process.env.NODE_ENV === "production") {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: !isProd ? "error" : "info",
  });

  app.use(vite.middlewares);

  app.get('/api/openapi', async (req, res) => {
    const yaml = path.join(__dirname, 'storage/openapi/test.yml');

    let api = await SwaggerParser.validate(yaml);

    res.json(api);
  })

  app.get("*", async (req, res) => {
    try {
      if (isProd) {
        res.sendFile(path.join(__dirname, 'index.html'));
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
    console.log(`Listening on port http://localhost:5173`)
  })
}

createServer()
