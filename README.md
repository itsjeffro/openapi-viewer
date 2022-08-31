# OpenAPI Viewer

Parses and displays an open api spec in a nice little UI.

* Supports OpenApi 3.0.*

## Built using

- Vite
- React and React router
- Express

## Getting started

### Configuration

Create a `.env` file using the provided example `.env.example` file.

Place your Open API yml file in the directory `/storage/openapi/`. Then update the `config.ts` to reflect the name of your file.

### Development

Run `npm i` and then `npm run dev`

### Production

Run `npm i` and then `npm run build`. Prune dev dependencies by running `npm prune --production`

The `dist` directory contains the final build. This contains:

- `/dist/index.html` from `/index.html`
- `/dist/assets` from `/src`
- `/dist/favicon.ico` from `/public`