import { groupParams } from './parameters';

describe('parameters', () => {
  it('should return parameters grouped in object by key', () => {
    const parameters = [
      { in: 'header', name: 'accept' },
      { in: 'path', name: 'userId' },
      { in: 'query', name: 'page' },
    ];

    const groups = groupParams(parameters);

    const expected = {
      headers: [{ in: 'header', name: 'accept' }],
      paths: [{ in: 'path', name: 'userId' }],
      queries: [{ in: 'query', name: 'page' }],
    };

    expect(groups).toEqual(expected);
  });
});
