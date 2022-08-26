const ParametersList = ({ requestBody, parameters }: any) => {
  const bodyParameters = !requestBody ? {} : requestBody.content['application/json'].schema.properties;

  let params = !parameters ? [] : parameters;

  if (params) {
    parameters = params.reduce((carry: any, item: any) => {
      return {
        ...carry,
        [item.in]: [
          ...carry[item.in] || [],
          item
        ]
      }
    }, {})
  }

  const headers = parameters['header'] || []
  const queries = parameters['query'] || []
  const paths = parameters['path'] || []

  return (
    <>
      { headers.length === 0 ? '' : <h5>Headers</h5> }

      { headers.map((parameter: any) => (
        <div key={ parameter.name } className="list__item">
          <div className="parameter-details">
            <span className="pill pill__grey text-bold">{ parameter.name }</span>
            <span className="parameter-details__type">{ parameter.schema.type }</span>
            <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
          </div>
          <p>{ parameter.description }</p>
        </div>
      )) }

      { paths.length === 0 ? '' : <h5>Path parameters</h5> }

      { paths.map((parameter: any) => (
        <div key={ parameter.name } className="list__item">
          <div className="parameter-details">
            <span className="pill pill__grey text-bold">{ parameter.name }</span>
            <span className="parameter-details__type">{ parameter.schema.type }</span>
            <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
          </div>
          <p>{ parameter.description }</p>
        </div>
      )) }

      { queries.length === 0 ? '' : <h5>Query parameters</h5> }

      { queries.map((parameter: any) => (
        <div key={ parameter.name } className="list__item">
          <div className="parameter-details">
            <span className="pill pill__grey text-bold">{ parameter.name }</span>
            <span className="parameter-details__type">{ parameter.schema.type }</span>
            <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
          </div>
          <p>{ parameter.description }</p>
        </div>
      )) }

      { Object.keys(bodyParameters).length === 0 ? '' : <h5>Body parameters</h5> }

      { Object.keys(bodyParameters).map((bodyParameter: string) => (
        <div key={ bodyParameter } className="list__item">
          <div className="parameter-details">
            <span className="pill pill__grey text-bold">{ bodyParameter }</span>
            <span className="parameter-details__type">{ bodyParameters[bodyParameter].type }</span>
            <span className="parameter-details__required">{ !bodyParameters[bodyParameter].nullable ? 'Required.' : ''  }</span>
          </div>
          <p>{ bodyParameters[bodyParameter].description }</p>
        </div>
      )) }
    </>
  )
}

export default ParametersList
