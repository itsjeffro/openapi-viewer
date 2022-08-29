import EnumList from "./EnumList";

interface ParameterDetailsProps {
  heading: string
  parameters: any[]
}

const ParameterDetails = ({ heading, parameters }: ParameterDetailsProps) => {
  return (
    <div
      className="list"
      style={{ display: parameters.length === 0 ? 'none' : 'block' }}
    >
      <div className="list__header">
        <h5>{ heading }</h5>
      </div>

      { parameters.map((parameter: any) => (
        <div key={ parameter.name } className="list__item">
          <div className="parameter-details">
            <span className="pill pill__grey text-bold">{ parameter.name }</span>
            <span className="parameter-details__type">{ parameter.schema.type }</span>
            <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
          </div>

          { parameter.description ? <p>{parameter.description}</p> : '' }

          { parameter.schema.enum
            ? <EnumList enums={ parameter.schema.enum } />
            : '' }
        </div>
      )) }
    </div>
  )
}

export default ParameterDetails;
