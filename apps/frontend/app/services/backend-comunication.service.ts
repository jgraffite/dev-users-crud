import { User } from "../shared/models/user";

const API_URL_BASE = 'http://localhost:3001';


export async function updateUser(id: number, user: User): Promise<any> {
  const url = new URL(API_URL_BASE + `/users/${id}`)
  return (await fetch(
    url,
    {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json'
      }
    }
  )).json()
}


export async function createUser(user: User): Promise<any> {
  const url = new URL(API_URL_BASE + `/users`)
  return (await fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json'
      }
    }
  )).json()
}

export async function removeUser(id: number): Promise<any> {
  const url = new URL(API_URL_BASE + `/users/${id}`)
  return (await fetch(
    url,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    }
  )).json()
}