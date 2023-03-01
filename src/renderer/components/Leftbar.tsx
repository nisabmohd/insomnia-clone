import {} from 'react';
import { COLOR_MAP } from './Request';

type savedRequests = {
  id: string;
  method: string;
  name: string;
  options: any;
};

const DUMMY_DATA: Array<savedRequests> = [
  {
    id: '1',
    method: 'get',
    name: 'Get Posts',
    options: {},
  },
  {
    id: '2',
    method: 'post',
    name: 'New Post',
    options: {},
  },
];

export default function Leftbar() {
  return (
    <div
      style={{
        flex: 0.4,
        borderRight: '1px solid rgb(64 64 70)',
        height: '100%',
      }}
    >
      <div
        className="btn"
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '2px',
          marginBottom: '15px',
        }}
      >
        <button
          style={{
            height: '30px',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            width: '100%',
            margin: 'auto',
            borderBottom: '1px solid rgb(64 64 70)',
            cursor: 'pointer',
          }}
        >
          New request +
        </button>
      </div>
      {DUMMY_DATA.map((item) => {
        return (
          <RequestName
            key={item.id}
            id={item.id}
            method={item.method}
            name={item.name}
            options={item.options}
          />
        );
      })}
    </div>
  );
}

function RequestName({ id, method, name }: savedRequests) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        margin: 'auto',
        marginTop: '12px',
      }}
    >
      <p
        style={{
          color: COLOR_MAP.get(method),
          width: '55px',
          fontSize: '11.28px',
        }}
      >
        {method.toUpperCase()}
      </p>
      <p
        style={{
          color: 'gray',
          fontSize: '11.8px',
        }}
      >
        {name}
      </p>
    </div>
  );
}
