import { CreateUserProps } from "./types";

const urlPaths = {
  root: {
    development: 'http://127.0.0.1:3000/',
    production: ''
  }
}

const url = urlPaths.root.development // change this depending on production OR development mode

export const createUser = (createInfo: CreateUserProps) => {
  console.log('createUser, createInfo = ', createInfo)
  fetch(`${url}users`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createInfo)
  })
  .then(res => res.json())
  .then(json => {
    console.log('SUCCESS', json);
  })
  .catch(err => {
    console.log(err);
  })
};