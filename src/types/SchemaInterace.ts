export interface Server {
  url: string;
}

export interface Spec {
  servers: Server[];
  paths: any;
  info: {
    title: string;
    description: string;
  };
}
