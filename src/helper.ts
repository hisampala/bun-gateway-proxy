import { ResponseLike } from './types';

import {
  AxiosHeaders,
  type AxiosResponse,
} from "axios";
export function convertToResponseLike(axiosResponse: AxiosResponse) {
  const { data, status, statusText, headers } = axiosResponse;
  return new ResponseLike(JSON.stringify(data), {
    status,
    statusText,
    headers,
  });
}
export const convertHeader = (header:Headers)=>{
  const temp = new AxiosHeaders()
  header.forEach(([key,value])=> temp.set(key,value))
  return temp
}