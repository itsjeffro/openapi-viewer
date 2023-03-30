import EnumList from './EnumList';
import { List, ListItem } from '../../../components/List';
import { Text } from '../../../components/Text';
import { Flex } from '../../../components/Flex';
import { Box } from '../../../components/Box';
import { Divider } from '../../../components/Divider';
import RequiredText from './RequiredText';

interface Props {
  requestBody: any;
}

const buildSchema = (schema: any) => {
  let allOf: any = null;

  if (schema?.type === 'object' && schema.properties) {
    return schema;
  }

  ((schema && schema.allOf) || []).map((item: any) => {
    if (item.type === 'object' && !allOf) {
      allOf = {};
    }

    if (item.type === 'object') {
      allOf = {
        ...allOf,
        ...item,
      };
    }
  });

  return allOf;
};

const BodyDetails = ({ requestBody }: Props) => {
  const bodyContent = !requestBody ? {} : requestBody.content['application/json'];
  const bodySchema = bodyContent ? buildSchema(bodyContent.schema) : null;
  const bodyParameters = bodySchema ? bodySchema.properties || {} : {};
  const requiredProperties = bodySchema?.required || [];

  return (
    <List style={{ display: Object.keys(bodyParameters).length === 0 ? 'none' : 'block' }}>
      <Text as="h5">Body parameters</Text>

      {Object.keys(bodyParameters).map((bodyParameter: string) => (
        <Box key={bodyParameter}>
          <Divider />
          <ListItem key={bodyParameter}>
            <Flex alignItems="center" columnGap="10px">
              <Text as="code" fontWeight="medium">
                {bodyParameter}
              </Text>
              <Box marginRight="auto">{bodyParameters[bodyParameter].type}</Box>
              <RequiredText isRequired={requiredProperties.includes(bodyParameter)} />
            </Flex>

            {bodyParameters[bodyParameter].description ? (
              <Text as="p">{bodyParameters[bodyParameter].description}</Text>
            ) : (
              ''
            )}

            {bodyParameters[bodyParameter].enum ? <EnumList enums={bodyParameters[bodyParameter].enum} /> : ''}
          </ListItem>
        </Box>
      ))}
    </List>
  );
};

export default BodyDetails;
