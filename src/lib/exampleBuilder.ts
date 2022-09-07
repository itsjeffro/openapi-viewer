import schemaParser from "./schemaParser";

const exampleBuilder = (method: string, host: string, endpoint: string, body: any) => {
  let request = [`curl`];

  if (method === 'post' || method === 'put') {
    request = request.concat(`  -X ${ method.toUpperCase() }`)
    request = request.concat(`  -H "X-CSRF-TOKEN: TOKEN_HERE"`)
  }

  request = request.concat(`  -H "Accept: application/json"`)
  request = request.concat(`  ${ host }${ endpoint }`)

  if (body !== null) {
    request = request.concat(`  -d '${ JSON.stringify(schemaParser(body), null, 2) }'`)
  }

  return request.join(" \\ \n");
}

export default exampleBuilder
