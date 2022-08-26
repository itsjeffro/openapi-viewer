const config = {
  env: process.env.NODE_ENV || 'development',

  storage: {

    openapi:  process.env.STORAGE_OPEN_API_PATH,

  }
}

export default config;
