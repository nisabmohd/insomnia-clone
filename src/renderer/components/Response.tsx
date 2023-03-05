import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type ResponseProps = {
  response: any;
};

export default function Response({ response }: ResponseProps) {
  return (
    <div style={{ flex: 1, height: '100%', overflowY: 'auto' }}>
      <div
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
        <p style={{ marginLeft: '24px', fontSize: '12px', color: 'gray' }}>
          {JSON.stringify(response?.code) || '200 status'}
        </p>
      </div>
      <div
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
        <div
          className="tabs"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '18px',
            marginLeft: '15px',
            fontSize: '12px',
            height: '100%',
          }}
        >
          <div
            style={{
              color: '#b1b0b0',
              padding: '0 8px',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            Preview
          </div>
          <div
            style={{
              color: '#b1b0b0',
              padding: '0 8px',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            Headers
          </div>
          <div
            style={{
              color: '#b1b0b0',
              padding: '0 8px',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            Cookies
          </div>
        </div>
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
    </div>
  );
}
