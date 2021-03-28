import { apiUrl } from "./config";

export const getData = () => {
  return fetch(`${apiUrl}/project`).then(res => res.json());
};

export const postData = data => {
  return fetch(`${apiUrl}/project`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};
