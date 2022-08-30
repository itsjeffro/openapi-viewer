interface Server {
  url: string
}

class Servers {
  public servers

  constructor(servers: Server[]) {
    this.servers = servers
  }

  public first(): Server {
    return this.servers[0]
  }

  public get(): Server[] {
    return this.servers
  }
}

export default Servers
