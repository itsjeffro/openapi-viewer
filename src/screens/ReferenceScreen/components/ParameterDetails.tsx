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
        <Text as="h5">{ heading }</Text>
      </ListHeader>

      { parameters.map((parameter: any) => (
        <ListItem key={ parameter.name }>
          <Flex alignItems="center">
            <Text as="code" fontWeight="medium">{ parameter.name }</Text>
            <span className="parameter-details__type">{ parameter.schema.type }</span>
            <span className="parameter-details__required">{ parameter.required ? 'Required.' : '' }</span>
          </Flex>

          { parameter.description ? <Text as="p">{parameter.description}</Text> : '' }

          { parameter.schema.enum ? <EnumList enums={ parameter.schema.enum } /> : '' }
        </ListItem>
      )) }
    </List>
  )
}

export default ParameterDetails;
