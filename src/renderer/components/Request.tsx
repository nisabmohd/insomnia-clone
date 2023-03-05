import { useState } from 'react';
import bugIcon from '../assets/bug.png';

type RequestProps = {
  request(options: any): void;
};

export const COLOR_MAP = new Map<string, string>([
  ['get', 'green'],
  ['post', '#ECDBBA'],
  ['put', '#FFAC41'],
  ['patch', '#8E05C2'],
  ['delete', '#C84B31'],
]);

const REQUEST_OPTIONS = [
  {
    id: 1,
    method: 'get',
    value: 'GET',
    color: 'green',
  },
  {
    id: 2,
    method: 'post',
    value: 'POST',
    color: '#ECDBBA',
  },
  {
    id: 3,
    method: 'put',
    value: 'PUT',
    color: '#FFAC41',
  },
  {
    id: 4,
    method: 'patch',
    value: 'PATCH',
    color: '#8E05C2',
  },
  {
    id: 5,
    method: 'delete',
    value: 'DELETE',
    color: '#C84B31',
  },
];
// color: '#ECDBBA',

export default function Request({ request }: RequestProps) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('get');

  return (
    <div
      style={{
        flex: 1,
        borderRight: '1px solid rgb(64 64 70)',
        height: '100%',
      }}
    >
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
        <select
          style={{
            width: '13%',
            height: '100%',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: COLOR_MAP.get(method),
          }}
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          {REQUEST_OPTIONS.map((item) => {
            return (
              <option
                style={{ backgroundColor: '#1e1e1e', color: item.color }}
                key={item.id}
                value={item.method}
              >
                {item.value}
              </option>
            );
          })}
        </select>
        <input
          onChange={(e) => setUrl(e.target.value)}
          style={{
            width: '73%',
            backgroundColor: 'transparent',
            outline: 'none',
            border: 'none',
            marginLeft: '4px',
          }}
          type="url"
          placeholder="http://api.v1.com/get/users"
        />
        <button
          onClick={() => request({ url, method })}
          disabled={!url}
          style={{
            width: '12%',
            backgroundColor: '#6D67E4',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            height: '100%',
          }}
        >
          Send
        </button>
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
            Body
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
            Auth
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
            Query
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
        </div>
      </div>
      <div
        className="rest"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: `calc(100% - (100px + 30px))`,
        }}
      >
        <img style={{ width: '100px' }} src={bugIcon} alt="" />
        <p style={{ color: 'gray', fontSize: '14px' }}>
          Enter a url to get a response
        </p>
      </div>
    </div>
  );
}
