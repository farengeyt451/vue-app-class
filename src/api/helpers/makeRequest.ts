import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default ({
  url = '/',
  method = 'get',
  params = {},
  headers = {},
  data = {},
  cancelToken = undefined,
}: AxiosRequestConfig): Promise<AxiosResponse> =>
  axios({
    url: `/api/v4/${url}`,
    method,
    params,
    headers,
    data,
    cancelToken,
  });
