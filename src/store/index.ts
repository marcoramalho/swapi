import { peopleStore } from './people.store'
import { planetStore } from './planets.store'
import { starshipStore } from './starships.store'

export const useStore = () => {
  const people = {
    loadingPeople: peopleStore((state) => state.loading),
    people: peopleStore((state) => state.people),
    setClearPeople: peopleStore((state) => state.setClearPeople),
    getDataPeople: peopleStore((state) => state.getData),
  }

  const planets = {
    loadingPlanet: planetStore((state) => state.loading),
    planet: planetStore((state) => state.planet),
    setClearPlanet: planetStore((state) => state.setClearPlanet),
    setPlanet: planetStore((state) => state.setPlanet),
  }

  const starships = {
    loadingStarship: starshipStore((state) => state.loading),
    starship: starshipStore((state) => state.starship),
    setClearStarship: starshipStore((state) => state.setClearStarship),
    getDataStarship: starshipStore((state) => state.getStarshipData),
  }

  return {
    people,
    planets,
    starships,
  }
}
