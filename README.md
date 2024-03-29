# OpenAPI Viewer

<p align="center">
    <a href="https://github.com/itsjeffro/openapi-viewer/actions"><img src="https://github.com/itsjeffro/openapi-viewer/actions/workflows/test.yml/badge.svg" alt="Build Status"></a>
    <a href="https://packagist.org/packages/itsjeffro/deploy"><img src="https://poser.pugx.org/itsjeffro/deploy/license.svg"></a>
</p>

# Introduction
Parses and displays an open api spec in a nice little UI.

* Supports OpenApi 3.0.*

<p align="center">
    <img src="https://res.cloudinary.com/dz4tjswiv/image/upload/v1680226742/openapi-viewer.png">
</p>

## Built using

- Vite
- React and React router
- Express

## Getting started

### Configuration

Create a `.env` file using the provided example `.env.example` file.

Place your Open API yml file in the directory `/storage/openapi/`. Then update the `.env` to reflect the name of your file.

## Development

Run `npm i` and then `npm run dev`

## Deployment

Run `npm i` and then `npm run build`. Prune dev dependencies by running `npm prune --production`

The `dist` directory contains the final build. This contains:

- `/dist/index.html` from `/index.html`
- `/dist/assets` from `/src`
- `/dist/favicon.ico` from `/public`