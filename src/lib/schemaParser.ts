interface Property {
  example?: string
  type?: string
  items?: any
}

interface Schema {
  type: string
  properties: any | {
    [key: string]: Property
  }
}

const schemaParser = (schema: Schema) => {
  let result: any = {};

  if (schema.type === 'object') {
    result = {};
  }

  Object.keys(schema.properties).map((property) => {
    if (schema.properties[property].type === 'array') {
      result[property] = schemaParser(schema.properties[property].items);
    } else if (schema.properties[property].type === 'object') {
      result[property] = schemaParser(schema.properties[property]);
    } else {
      result[property] = castExample(schema.properties[property])
    }
  })

  return result
}

const castExample = (property: Property) => {
  if (property.type === 'string') {
    return property.example;
  }

  if (property.type === 'boolean') {
    return Boolean(property.example);
  }

  if (property.type === 'number') {
    return Number(property.example);
  }

  return property.example || null
}

export default schemaParser;
