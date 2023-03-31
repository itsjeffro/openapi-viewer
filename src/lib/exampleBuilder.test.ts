import exampleBuilder from './exampleBuilder';

describe('exampleBuilder', () => {

  it('should return POST examle with header content-type', () => {
    const path = {
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        properties: {}
                    }
                }
            }
        },
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            properties: {}
                        }
                    }
                }
            }
        }
    };

    const example = exampleBuilder('POST', 'example.com', '/endpoint-name', '{}', path);

    const expected = [
        "curl",
        "  -X POST",
        "  -H Content-Type: application/json",
        "  -H Accept: application/json",
        '  example.com/endpoint-name',
        "  -d 'null'"
    ];

    expect(example).toEqual(expected.join(' \\ \n'));
  })

});
