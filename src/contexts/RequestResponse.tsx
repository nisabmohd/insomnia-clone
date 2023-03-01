import { ReactNode, useContext } from 'react';
import { createContext } from 'react';
import axios, { AxiosResponse } from 'axios';

type ContextType = {
  makeRequest(options: any): any;
};

const Context = createContext<ContextType | undefined>(undefined);

type RequestResponseProp = {
  children: ReactNode;
};

const contextValue = {
  makeRequest: (options: any) => {
    return axios(options);
  },
};

export default function RequestResponse({ children }: RequestResponseProp) {
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export function useRequestResponse() {
  return useContext(Context) as ContextType;
}
