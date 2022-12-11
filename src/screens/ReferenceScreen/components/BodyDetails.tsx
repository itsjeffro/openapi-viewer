import EnumList from "./EnumList";
import {List, ListItem} from "../../../components/List";
import Text from "../../../components/Text";
import Flex from "../../../components/Flex";
import Box from "../../../components/Box";
import RequiredText from "./RequiredText";
import Divider from "../../../components/Divider";

interface Props {
  requestBody: any
}

const BodyDetails = ({ requestBody }: Props) => {
  const bodyContent = !requestBody ? {} : requestBody.content['application/json'];
  const bodySchema = bodyContent ? bodyContent.schema : null;
  const bodyParameters = bodySchema ? (bodySchema.properties || {}) : {};
  const requiredProperties = bodySchema ? bodySchema.required : [];

  return (
    <List style={{ display: Object.keys(bodyParameters).length === 0 ? 'none' : 'block' }}>
      <Text as="h5">Body parameters</Text>

      { Object.keys(bodyParameters).map((bodyParameter: string) => (
        <Box key={ bodyParameter }>
          <Divider />
          <ListItem key={ bodyParameter }>
            <Flex alignItems="center" columnGap="10px">
              <Text as="code" fontWeight="medium">{ bodyParameter }</Text>
              <Box marginRight="auto">{ bodyParameters[bodyParameter].type }</Box>
              <RequiredText isRequired={ requiredProperties.includes(bodyParameter) } />
            </Flex>

            { bodyParameters[bodyParameter].description ? <Text as="p">{bodyParameters[bodyParameter].description}</Text> : '' }

            { bodyParameters[bodyParameter].enum ? <EnumList enums={ bodyParameters[bodyParameter].enum } /> : '' }
          </ListItem>
        </Box>
      )) }
    </List>
  )
}

export default BodyDetails;
