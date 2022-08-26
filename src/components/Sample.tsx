import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import schemaParser from "../lib/schemaParser";

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

  const example = !requestBody ? null : requestBody.content['application/json'].schema;

  let request = `curl \\`

  if (method === 'post' || method === 'put') {
    request += `
  -X ${ method.toUpperCase() } \\
  -H "X-CSRF-TOKEN: TOKEN_HERE" \\`
  }

  request += `
  -H "Accept: application/json" \\
  ${ host }${ defaultPathKey } ${ example ? '\\' : '' }`

  if (example !== null) {
    request += `
  -d '${ JSON.stringify(schemaParser(example), null, 4) }'`
  }

  return (
    <div className="endpoint-details__method">
      <div className="card">
        <div className="card__header">
          <span className="pill pill__blue text-bold">{ method }</span> { defaultPathKey }
        </div>
        <SyntaxHighlighter language="bash" customStyle={ style }>
          { request }
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Sample;
