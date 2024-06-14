import connect from "../../config/connect";
import querystring from "query-string";
import { getValueFromCookie } from "../../helpers/cookies";

let abortController = new AbortController();

const returnFetch = async (url, options) => {
  const newOptions = options;

  newOptions.headers = {
    ...newOptions.headers,
    Authorization: getValueFromCookie("token="),
  };

  let response = {};
  response = await fetch(url, newOptions);
  return response;
};
const returnPromise = async (url, options, isFormData = false) => {
  const newOptions = { ...options };

  const dataIsThere = isFormData
    ? {}
    : {
        "Content-Type": "application/json",
      };

  newOptions.headers = {
    ...newOptions.headers,
    ...dataIsThere,
  };

  let response = await fetch(url, newOptions);

  return response;
};

const get = ({
  url,
  params = false,
  signal = abortController.signal,
  data = {},
}) => {
  const isParmas = params
    ? `${connect()}${url}`
    : `${connect()}${url}?${querystring.stringify(data)}`;
  return returnFetch(isParmas, {
    method: "GET",
    signal,
    data,
  });
};
const post = ({ url, data = {}, signal, isFormData = false }) => {
  let signal1;
  if (signal) signal1 = signal;
  else signal1 = abortController.signal;
  return returnPromise(
    `${connect()}${url}`,
    {
      method: "POST",
      body: data,
      signal: signal1,
    },
    isFormData
  );
};
const put = ({ url, params = false, query = {}, data = {}, signal }) => {
  let signal1;
  if (signal) signal1 = signal;
  else signal1 = abortController.signal;
  console.log(query);
  const fullUrl = params
    ? `${connect()}${url}`
    : `${connect()}${url}?${querystring.stringify(query)}`;

  return returnPromise(fullUrl, {
    method: "PUT",
    body: JSON.stringify(data),
    signal: signal1,
  });
};
const network = { get, post, put };

export default network;
