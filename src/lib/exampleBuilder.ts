import schemaParser from "./schemaParser";

const exampleBuilder = (method: string, host: string, endpoint: string, body: any) => {
  let request = `curl \\`

  if (method === 'post' || method === 'put') {
    request += `
  -X ${ method.toUpperCase() } \\
  -H "X-CSRF-TOKEN: TOKEN_HERE" \\`
  }

  request += `
  -H "Accept: application/json" \\
  ${ host }${ endpoint } ${ body ? '\\' : '' }`

  if (body !== null) {
    request += `
  -d '${ JSON.stringify(schemaParser(body), null, 4) }'`
  }

  return request;
}

export default exampleBuilder
