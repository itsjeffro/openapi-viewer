class Tags {
  public tags;

  constructor(tags: any[]) {
    this.tags = tags;
  }

  public filterByName(tagName: string): this {
    this.tags = this.tags.filter((tag: any) => {
      return tag.name === tagName
    })

    return this;
  }

  public first() {
    return this.tags[0] || null
  }
}

export default Tags
