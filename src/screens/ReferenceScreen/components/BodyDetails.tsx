import EnumList from "./EnumList";

interface Props {
  requestBody: any
}

const BodyDetails = ({ requestBody }: Props) => {
  const bodyContent = !requestBody ? {} : requestBody.content['application/json'];
  const bodySchema = bodyContent ? bodyContent.schema : null
  const bodyParameters = bodySchema ? bodySchema.properties : {}

  return (
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
            ? <EnumList enums={ bodyParameters[bodyParameter].enum } />
            : '' }
        </div>
      )) }
    </div>
  )
}

export default BodyDetails;
