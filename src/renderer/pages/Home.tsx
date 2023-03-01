import { useRequestResponse } from 'contexts/RequestResponse';
import { useState } from 'react';
import Bar from 'renderer/components/Bar';
import Leftbar from 'renderer/components/Leftbar';
import Request from 'renderer/components/Request';
import Response from 'renderer/components/Response';

export default function Home() {
  const { makeRequest } = useRequestResponse();
  const [data, setData] = useState<any>(undefined);
  async function requestAxios(options: any) {
    try {
      const resp = await makeRequest(options);
      setData(resp.data);
    } catch (error: any) {
      setData(error);
    }
  }
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1e1e1e',
        fontSize: '14px',
      }}
    >
      <Bar />
      <Leftbar />
      <Request request={requestAxios} />
      <Response response={data} />
    </div>
  );
}
