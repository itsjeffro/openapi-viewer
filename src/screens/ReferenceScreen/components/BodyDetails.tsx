import EnumList from "./EnumList";
import {List, ListHeader, ListItem} from "../../../components/List";

interface Props {
  requestBody: any
}

const BodyDetails = ({ requestBody }: Props) => {
  const bodyContent = !requestBody ? {} : requestBody.content['application/json'];
  const bodySchema = bodyContent ? bodyContent.schema : null
  const bodyParameters = bodySchema ? bodySchema.properties : {}

  return (
    <List style={{ display: Object.keys(bodyParameters).length === 0 ? 'none' : 'block' }}>
      <ListHeader>
        <h5>Body parameters</h5>
      </ListHeader>

      { Object.keys(bodyParameters).map((bodyParameter: string) => (
        <ListItem key={ bodyParameter }>
          <div className="parameter-details">
            <span className="pill pill__grey text-bold">{ bodyParameter }</span>
            <span className="parameter-details__type">{ bodyParameters[bodyParameter].type }</span>
            <span className="parameter-details__required">{ !bodyParameters[bodyParameter].nullable ? 'Required.' : ''  }</span>
          </div>

          { bodyParameters[bodyParameter].description ? <p>{bodyParameters[bodyParameter].description}</p> : '' }

          { bodyParameters[bodyParameter].enum ? <EnumList enums={ bodyParameters[bodyParameter].enum } /> : '' }
        </ListItem>
      )) }
    </List>
  )
}

export default BodyDetails;
