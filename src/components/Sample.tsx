import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Card, CardHeader } from './../components/Card';
import exampleBuilder from "../lib/exampleBuilder";
import * as styles from "../styles";

interface SampleProps {
  host: string
  method: string
  defaultPathKey: string
  requestBody: any
}

const Sample = ({ host, method, defaultPathKey, requestBody }: SampleProps) => {
  const body = !requestBody
    ? null
    : requestBody.content['application/json'].schema;

  let example = exampleBuilder(method, host, defaultPathKey, body)

  return (
    <div className="endpoint-details__method">
      <Card>
        <CardHeader>
          <span className="pill pill__blue text-bold">{ method }</span> { defaultPathKey }
        </CardHeader>
        <SyntaxHighlighter language="bash" customStyle={ styles.highlighter }>
          { example }
        </SyntaxHighlighter>
      </Card>
    </div>
  )
}

export default Sample;
