import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PeopleSlice } from '../types/People'
import { getPeople } from '../services/swapi'

export const peopleStore = create(
  persist<PeopleSlice>(
    (set, get) => ({
      loading: false,
      people: [],
      setPeople: (data) => {
        const { people } = get()
        set(() => ({ people: [people, ...data].flat() }))
      },
      setClearPeople: () =>
        set(() => ({
          people: [],
        })),
      getData: async (value = 1) => {
        const { setClearPeople, setPeople, getData } = get()
        if (value === 1) {
          setClearPeople()
          set(() => ({ loading: true }))
        }
        let next: string | null
        try {
          await getPeople(value)
            .then((res) => {
              next = res?.data?.next
              setPeople(res?.data?.results)
            })
            .then(() => {
              const nextPg = next ? next.split('=')[1] : null
              nextPg ? getData(Number(nextPg)) : set(() => ({ loading: false }))
            })
        } catch (err) {
          console.error(err)
          set(() => ({ loading: false }))
        }
      },
    }),
    { name: 'People' },
  ),
)
