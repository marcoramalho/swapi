import { useEffect, useState } from 'react'
import BoxData from '../components/BoxData'
import Select from '../components/Select'
import People from './People'
import { People as TypePeople } from '../types/People'
import { useStore } from '../store'
import { List } from '../types/Common'
import Planets from './Planets'
import Starships from './Starships'
import { Box, Divider } from '@mui/material'

const DataView = () => {
  const { people, planets, starships } = useStore()
  const { loadingPeople, people: peopleData, getDataPeople } = people
  const { loadingPlanet, planet, setClearPlanet, setPlanet } = planets
  const { loadingStarship, starship, setClearStarship, getDataStarship } =
    starships

  const [peopleList, setPeopleList] = useState<List[]>()
  const [personData, setPersonData] = useState<TypePeople>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (index: any) => {
    const person = peopleData ? peopleData[Number(index) - 1] : null
    !!person && setPersonData(person)
    person?.homeworld && setPlanet(person.homeworld)
    person?.starships?.length
      ? getDataStarship(person?.starships)
      : setClearStarship()
  }

  const handleList = (data: TypePeople[]) =>
    data.map(({ name }, i) => ({ label: name, value: i + 1 }))

  useEffect(() => {
    setClearPlanet()
    setClearStarship()
    getDataPeople(1)
  }, [])
  useEffect(() => {
    setPeopleList(handleList(peopleData))
  }, [loadingPeople])
  return (
    <>
      <Box width="100%">
        <Select
          onChange={handleChange}
          loading={loadingPeople}
          items={peopleList ?? []}
        />
      </Box>
      {personData && (
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="start"
          marginTop={5}
        >
          <BoxData>
            <People loading={loadingPeople} data={personData} />
            {!!planet.name && (
              <>
                <Divider
                  sx={{
                    marginTop: '15px',
                    marginBottom: '15px',
                  }}
                />
                <Planets loading={loadingPlanet} data={planet} />
              </>
            )}
          </BoxData>
          <BoxData>
            {!!starship.length && (
              <Starships loading={loadingStarship} data={starship} />
            )}
          </BoxData>
        </Box>
      )}
    </>
  )
}

export default DataView
