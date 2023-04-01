import schemaParser from './schemaParser';

const exampleBuilder = (method: string, host: string, endpoint: string, body: any, path: any = {}) => {
  let request = [`curl`];

  if (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT') {
    request = request.concat(`  -X ${method.toUpperCase()}`);
  }

  if (path?.requestBody?.content) {
      const contentTypes = Object.keys(path.requestBody.content);
      const contentType = contentTypes[0];

      if (contentType) {
        request.push(`  -H Content-Type: ${contentType}`);
      }
  }

  if (path?.responses) {
    const responses = Object.keys(path.responses);
    const response = responses[0];
    const accepts = Object.keys(path?.responses[response]['content'] || {});
    const accept = accepts[0] || null;

    if (accept) {
      request.push(`  -H Accept: ${accept}`);
    }
  }

  if (path?.parameters) {
    const parameters = path.parameters.filter((parameter: any) => parameter.in === 'header');

    parameters.forEach((parameter: any) => {
      request.push(`  -H ${parameter.name}: ${parameter?.schema?.type}`);
    });
  }

  request = request.concat(`  ${host}${endpoint}`);

  if (body !== null) {
    request = request.concat(`  -d '${JSON.stringify(schemaParser(body), null, 2)}'`);
  }

  return request.join(' \\ \n');
};

export default exampleBuilder;
