import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import schemaParser from "../lib/schemaParser";
import {useState} from "react";

const ResponseList = ({ responseBody }: any) => {
  const style = {
    background: '#f6f8fa',
    margin: 0,
    padding: '15px',
    fontSize: '.85rem',
    fontFamily: 'monospace',
    lineHeight: '.75rem'
  };

  const responses = Object.keys(responseBody.responses).map((httpCode: string) => {
    return {
      httpCode: httpCode,
      schema: responseBody.responses[httpCode].content['application/json'].schema,
    }
  })

  const responseHttpCodes = responses.map((response) => response.httpCode)

  const [selectedHttpCode, setSelectedHttpCode] = useState(responseHttpCodes[0])
  const [selectedResponseTab, setSelectedResponseTab] = useState('example')

  return (
    <div className="endpoint-details__response">
      <div className="card">
        <div className="card__header card__nav">
          <button
            className={ `card__nav-tab ${selectedResponseTab === 'example' ? 'active' : ''}` }
            onClick={ () => setSelectedResponseTab('example') }
          >Example response</button>
          <button
            className={ `card__nav-tab ${selectedResponseTab !== 'example' ? 'active' : ''}` }
            onClick={ () => setSelectedResponseTab('schema') }
          >Response schema</button>
        </div>

        <div className="card__header">
          <span className="label__http-code">Status:</span>
          <select
            className="form-input"
            onChange={ (e) => setSelectedHttpCode(e.target.value) }
          >
            { responseHttpCodes.map((responseHttpCode) => (
              <option key={ responseHttpCode } value={ responseHttpCode }>{ responseHttpCode }</option>
            )) }
          </select>
        </div>

        <div
          style={{ display: selectedResponseTab !== 'example' ? 'block' : 'none' }}
        >
          { responses.map((response) => {
            const display = selectedHttpCode === response.httpCode ? 'block' : 'none';

            return (
              <div
                key={ `schema-${response.httpCode}` }
                style={ { display: display } }
              >
                <SyntaxHighlighter language="json" customStyle={ style }>
                  { JSON.stringify(response.schema, null, 4) }
                </SyntaxHighlighter>
              </div>
            )
          }) }
        </div>

        <div
          style={{ display: selectedResponseTab === 'example' ? 'block' : 'none' }}
        >
          { responses.map((response) => {
            const display = selectedHttpCode === response.httpCode ? 'block' : 'none';

            return (
              <div
                key={ `section-${response.httpCode}` }
                style={ { display: display } }
              >
                <SyntaxHighlighter language="json" customStyle={ style }>
                  { JSON.stringify(schemaParser(response.schema), null, 4) }
                </SyntaxHighlighter>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}

export default ResponseList
