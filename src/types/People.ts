export type People = {
  birth_year?: string
  created?: string
  edited?: string
  eye_color?: string
  films?: string[]
  gender?: string
  hair_color?: string
  height?: string
  homeworld?: string
  mass?: string
  name?: string
  skin_color?: string
  species?: string[]
  starships?: string[]
  url?: string
  vehicles?: string[]
}

export type GetDataProps = {
  page: number
  maxPages?: number
}

export type PeopleResult = {
  results: People[]
}

export type PeopleSlice = {
  loading: boolean
  people: People[]
  setPeople: (data: People[]) => void
  setClearPeople: () => void
  getData: (value: number) => void
}
