import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import schemaParser from "../lib/schemaParser";
import { Card, CardHeader } from './../components/Card';
import exampleBuilder from "../lib/exampleBuilder";

interface SampleProps {
  host: string
  method: string
  defaultPathKey: string
  requestBody: any
}

const Sample = ({ host, method, defaultPathKey, requestBody }: SampleProps) => {
  const style = {
    background: '#f6f8fa',
    margin: 0,
    padding: '15px',
    fontSize: '.85rem',
    fontFamily: 'monospace',
    lineHeight: '.75rem'
  };

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
        <SyntaxHighlighter language="bash" customStyle={ style }>
          { example }
        </SyntaxHighlighter>
      </Card>
    </div>
  )
}

export default Sample;
