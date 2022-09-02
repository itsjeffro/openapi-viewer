import EnumList from "./EnumList";
import {List, ListHeader, ListItem} from "../../../components/List";
import Text from "../../../components/Text";
import Flex from "../../../components/Flex";

interface ParameterDetailsProps {
  heading: string
  parameters: any[]
}

const ParameterDetails = ({ heading, parameters }: ParameterDetailsProps) => {
  return (
    <List style={{ display: parameters.length === 0 ? 'none' : 'block' }}>
      <ListHeader>
        <h5>{ heading }</h5>
      </ListHeader>

      { parameters.map((parameter: any) => (
        <ListItem key={ parameter.name }>
          <Flex alignItems="center">
            <Text fontWeight="medium" className="pill pill__grey">{ parameter.name }</Text>
            <span className="parameter-details__type">{ parameter.schema.type }</span>
            <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
          </Flex>

          { parameter.description ? <p>{parameter.description}</p> : '' }

          { parameter.schema.enum ? <EnumList enums={ parameter.schema.enum } /> : '' }
        </ListItem>
      )) }
    </List>
  )
}

export default ParameterDetails;
