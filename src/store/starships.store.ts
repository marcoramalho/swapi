import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { StarshipSlice } from './../types/Starship'
import { getStarship } from '../services/swapi'

export const starshipStore = create(
  persist<StarshipSlice>(
    (set, get) => ({
      loading: false,
      starship: [],
      setStarship: (data) => {
        const { starship } = get()
        set(() => ({ starship: [...starship, data].flat() }))
      },
      setClearStarship: () =>
        set(() => ({
          starship: [],
        })),
      getStarshipData: (url) => {
        const { starship, setStarship, setClearStarship } = get()
        set(() => ({ loading: true }))
        setClearStarship()
        const verUrl = (value: string) =>
          starship.filter(({ url }) => value === url)
        const getData = async (value: string) => {
          try {
            getStarship(value)
              .then((res) => setStarship(res?.data))
              .finally(() => set(() => ({ loading: false })))
          } catch (err) {
            console.log(err)
          }
        }
        url.forEach((url) => verUrl(url).length === 0 && getData(url))
      },
    }),
    { name: 'Starship' },
  ),
)
