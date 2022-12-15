class PathResponses {
  public responses;

  constructor(responses: any) {
    this.responses = responses;
  }

  get() {
    return Object.keys(this.responses).map((httpCode: string) => {
      const status = this.responses[httpCode];

      return {
        httpCode: httpCode,
        description: status.description,
        schema: status.content ? status.content['application/json'].schema : null,
      };
    });
  }
}

export default PathResponses;
