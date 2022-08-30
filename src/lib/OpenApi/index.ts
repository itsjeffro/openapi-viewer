import Paths from "./Paths";
import Tags from "./Tags";
import Servers from "./Servers";

class OpenApi {
  public data;

  constructor(data: any) {
    this.data = data;
  }

  public info() {
    return this.data.info
  }

  public tags(): Tags {
    return new Tags(this.data.tags || [])
  }

  public servers(): Servers {
    return new Servers(this.data.servers || [])
  }

  public paths(): Paths {
    return new Paths(this.data.paths)
  }
}

export default OpenApi
