interface Property {
  example?: string
  type?: string
  items?: any
  enum: any[]
}

interface Schema {
  type: string
  items?: any
  properties: any | {
    [key: string]: Property
  },
  example?: any
  enum?: any[]
}

const schemaParser = (schema: Schema): any => {
  if (schema.type === 'object') {
    let result: any = {};

    Object.keys(schema.properties || {}).map((propertyName: string) => {
      result[propertyName] = schemaParser(schema.properties[propertyName])
    })

    return result
  }

  if (schema.type === 'array') {
    return [
      schemaParser(schema.items)
    ]
  }

  if (schema.type === 'string') {
    return getStringValueFromSchema(schema);
  }

  if (schema.type === 'boolean') {
    return Boolean(schema.example);
  }

  if (schema.type === 'number') {
    return Number(schema.example);
  }

  if (schema.type === 'integer') {
    return schema.example || 0;
  }

  return schema.example || null;
}

const getStringValueFromSchema = (schema: Schema) => {
  if (schema.example) {
    return schema.example;
  }

  if (schema.enum && schema.enum.length > 0) {
    return schema.enum[0]
  }

  return schema.type;
}

export default schemaParser;
