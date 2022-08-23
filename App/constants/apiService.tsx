import { CreateUserProps } from "./types";

const urlPaths = {
  root: {
    development: 'http://127.0.0.1:3000/',
    production: ''
  }
}

const url = urlPaths.root.development // change this depending on production OR development mode

export const createUser = (createInfo: CreateUserProps) => {
  fetch(`${url}create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        ...createInfo
      }
    })
  })
  .then(res => res.json())
  .then(json => {
    console.log(json);
  })
  .catch(err => {
    console.log(err);
  })
};