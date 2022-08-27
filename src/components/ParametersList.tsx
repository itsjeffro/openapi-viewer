import {groupParams} from "../lib/parameters";

const ParametersList = ({ requestBody, parameters }: any) => {
  const bodyContent = !requestBody
    ? {}
    : requestBody.content['application/json'];

  const bodySchema = bodyContent ? bodyContent.schema : null

  const bodyParameters = bodySchema ? bodySchema.properties : {}

  const { headers, paths, queries } = groupParams(parameters);

  return (
    <>
      <div
        className="list"
        style={{ display: headers.length === 0 ? 'none' : 'block' }}
      >
        <div className="list__header">
          <h5>Headers</h5>
        </div>

        { headers.map((parameter: any) => (
          <div key={ parameter.name } className="list__item">
            <div className="parameter-details">
              <span className="pill pill__grey text-bold">{ parameter.name }</span>
              <span className="parameter-details__type">{ parameter.schema.type }</span>
              <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
            </div>
            { parameter.description ? <p>{parameter.description}</p> : '' }
          </div>
        )) }
      </div>

      <div
        className="list"
        style={{ display: paths.length === 0 ? 'none' : 'block' }}
      >
        <div className="list__header">
          <h5>Path parameters</h5>
        </div>

        { paths.map((parameter: any) => (
          <div key={ parameter.name } className="list__item">
            <div className="parameter-details">
              <span className="pill pill__grey text-bold">{ parameter.name }</span>
              <span className="parameter-details__type">{ parameter.schema.type }</span>
              <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
            </div>
            { parameter.description ? <p>{parameter.description}</p> : '' }
          </div>
        )) }
      </div>

      <div
        className="list"
        style={{ display: queries.length === 0 ? 'none' : 'block' }}
      >
        <div className="list__header">
          <h5>Query parameters</h5>
        </div>

        { queries.map((parameter: any) => (
          <div key={ parameter.name } className="list__item">
            <div className="parameter-details">
              <span className="pill pill__grey text-bold">{ parameter.name }</span>
              <span className="parameter-details__type">{ parameter.schema.type }</span>
              <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
            </div>
            { parameter.description ? <p>{parameter.description}</p> : '' }
          </div>
        )) }
      </div>

      <div
        className="list"
        style={{ display: Object.keys(bodyParameters || {}).length === 0 ? 'none' : 'block' }}
      >
        <div className="list__header">
          <h5>Body parameters</h5>
        </div>

        { Object.keys(bodyParameters || {}).map((bodyParameter: string) => (
          <div key={ bodyParameter } className="list__item">
            <div className="parameter-details">
              <span className="pill pill__grey text-bold">{ bodyParameter }</span>
              <span className="parameter-details__type">{ bodyParameters[bodyParameter].type }</span>
              <span className="parameter-details__required">{ !bodyParameters[bodyParameter].nullable ? 'Required.' : ''  }</span>
            </div>
            { bodyParameters[bodyParameter].description ? <p>{bodyParameters[bodyParameter].description}</p> : '' }
            { bodyParameters[bodyParameter].enum
              ? <p>Options: {bodyParameters[bodyParameter].enum.join(', ')}</p>
              : '' }
          </div>
        )) }
      </div>
    </>
  )
}

export default ParametersList
