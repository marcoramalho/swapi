import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PlanetsSlice } from './../types/Planets'
import { getPlanet } from '../services/swapi'

export const planetStore = create(
  persist<PlanetsSlice>(
    (set) => ({
      loading: false,
      planet: {
        name: '',
        rotation_period: '',
        orbital_period: '',
        diameter: '',
        climate: '',
        gravity: '',
        terrain: '',
        surface_water: '',
        population: '',
        residents: [],
        films: [],
        created: '',
        edited: '',
        url: '',
      },
      setClearPlanet: () =>
        set(() => ({
          planet: {
            name: '',
            rotation_period: '',
            orbital_period: '',
            diameter: '',
            climate: '',
            gravity: '',
            terrain: '',
            surface_water: '',
            population: '',
            residents: [],
            films: [],
            created: '',
            edited: '',
            url: '',
          },
        })),
      setPlanet: async (url) => {
        set(() => ({ loading: true }))
        try {
          await getPlanet(url)
            .then((res) => {
              set(() => ({ planet: res?.data }))
            })
            .finally(() => set(() => ({ loading: false })))
        } catch (err) {
          console.log(err)
        }
      },
    }),
    { name: 'Planet' },
  ),
)
