import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type ResponseProps = {
  response: any;
};

export default function Response({ response }: ResponseProps) {
  return (
    <div style={{ flex: 1, height: '100%', overflowY: 'auto' }}>
      <div
        className="input_url"
        style={{
          width: '100%',
          height: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgb(64 64 70)',
          borderTop: '1px solid rgb(64 64 70)',
        }}
      >
        {JSON.stringify(response.code)}
        {/*  */}
      </div>
      <div
        className="input_url"
        style={{
          width: '100%',
          height: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgb(64 64 70)',
        }}
      >
        {/* Body */}
      </div>
      <div
        className="response"
        style={{
          width: '100%',
          margin: 'auto',
          fontSize: '12px !important',
          fontFamily: 'Poppins',
        }}
      >
        <SyntaxHighlighter
          lineProps={{
            style: {
              fontSize: '12.5px',
              whiteSpace: 'break-spaces',
            },
          }}
          useInlineStyles={true}
          // showLineNumbers={true}
          wrapLines={true}
          language="json"
          style={vscDarkPlus}
        >
          {JSON.stringify(response, null, 2)}
        </SyntaxHighlighter>
      </div>
      <div
        className="input_url"
        style={{
          width: '100%',
          height: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgb(64 64 70)',
          borderTop: '1px solid rgb(64 64 70)',
        }}
      >
        {/* Body */}
      </div>
    </div>
  );
}
