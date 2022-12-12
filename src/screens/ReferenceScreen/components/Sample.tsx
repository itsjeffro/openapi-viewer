import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Card, CardHeader } from '../../../components/Card';
import {Text} from "../../../components/Text";
import {Badge} from "../../../components/Badge";
import exampleBuilder from "../../../lib/exampleBuilder";
import * as styles from "../../../styles";

interface SampleProps {
  host: string
  method: string
  defaultPathKey: string
  requestBody: any
}

const Sample = ({ host, method, defaultPathKey, requestBody }: SampleProps) => {
  const body = !requestBody
    ? null
    : requestBody.content['application/json'];

  const bodySchema = body ? body.schema : null

  let example = exampleBuilder(method, host, defaultPathKey, bodySchema)

  return (
      <Card>
        <CardHeader>
          <Badge><Text fontWeight="medium">{ method }</Text></Badge> { defaultPathKey }
        </CardHeader>
        <SyntaxHighlighter language="bash" customStyle={ styles.highlighter }>
          { example }
        </SyntaxHighlighter>
      </Card>
  )
}

export default Sample;
