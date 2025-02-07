import type { RawAxiosResponseHeaders, AxiosResponseHeaders } from "axios";

type TypeHeader = RawAxiosResponseHeaders | AxiosResponseHeaders;

export class ResponseLike {
  body: string;
  status: number;
  statusText: string;
  headers: Headers;
  constructor(
    responseData: string,
    init: { status?: number; statusText?: string; headers?: TypeHeader } = {}
  ) {
    this.body = responseData;
    this.status = init.status || 200;
    this.statusText = init.statusText || "OK";
    const temp = new Headers();
    if (init.headers)
      Object.entries(init.headers).forEach(([key, value]) =>
        temp.append(key, value)
      );
    this.headers = temp || new Headers();
  }

  async json() {
    return JSON.parse(this.body);
  }
}