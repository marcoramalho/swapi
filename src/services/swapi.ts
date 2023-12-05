import { api } from '../config'

export const getPeople = async (page: number) => {
  try {
    const response = await api.get(`people?page=${page}`)
    return Promise.resolve(response)
  } catch (err) {
    console.log(err)
  }
}

export const getPlanet = async (url: string) => {
  const id = url.split('planets/')[1].replace('/', '')
  try {
    const response = await api.get(`planets/${id}`)
    return Promise.resolve(response)
  } catch (err) {
    console.log(err)
  }
}

export const getStarship = async (url: string) => {
  const id = url.split('starships/')[1].replace('/', '')
  try {
    const response = await api.get(`starships/${id}`)
    return Promise.resolve(response)
  } catch (err) {
    console.log(err)
  }
}
