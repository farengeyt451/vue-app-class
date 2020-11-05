import axios, { AxiosRequestConfig } from 'axios';

export default ({
  url = '/',
  method = 'get',
  params = {},
  headers = {},
  data = {},
  cancelToken = undefined,
}: AxiosRequestConfig): Promise<any> =>
  axios({
    url: `/api/v4/${url}`,
    method,
    params,
    headers,
    data,
    cancelToken,
  });
