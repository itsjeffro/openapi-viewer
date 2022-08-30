import {filterByTag} from "../paths";

export interface Path {
  summary: string
  method: string
  name: string
  description: string
  responses: any[]
  parameters: any
  requestBody: any
}

class Paths {
  public paths;

  constructor(paths: any) {
    this.paths = paths;
  }

  filterByTagName(tagName: string): this {
    this.paths = filterByTag(this.paths, tagName)

    return this;
  }

  get(): Path[] {
    return this.paths;
  }
}

export default Paths
