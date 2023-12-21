import { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
// import BoxData from '../components/BoxData'
import Select from '../components/Select'
import Backdrop from '../components/Backdrop'
import People from './People'
import Planets from './Planets'
import Starships from './Starships'
import { People as TypePeople } from '../types/People'
import { List } from '../types/Common'
import { useStore } from '../store'

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
    localStorage.clear()
    setClearPlanet()
    setClearStarship()
    getDataPeople(1)
  }, [])
  useEffect(() => {
    setPeopleList(handleList(peopleData))
  }, [loadingPeople])
  return (
    <>
      <Backdrop open={loadingPeople || loadingPlanet || loadingStarship} />
      <Box width="100%" border="1px solid">
        <Select
          onChange={handleChange}
          loading={loadingPeople}
          items={peopleList ?? []}
        />
      </Box>
      {personData && (
        <Grid container mt={3} spacing={2}>
          <Grid
            container
            item
            xs={12}
            md={6}
            border="1px solid grey"
            borderRadius="1.25rem"
          >
            <Grid item xs={12} md={6}>
              <h3>People</h3>
              <People loading={loadingPeople} data={personData} />
            </Grid>
            {/* {!!planet.name && ( */}
            <Grid item xs={12} md={6}>
              <h3>Planets</h3>
              <Planets loading={loadingPlanet} data={planet} />
            </Grid>
            {/* )} */}
          </Grid>
          {/* {!!starship.length && ( */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              border: '1px solid grey',
              borderRadius: '1.25rem',
            }}
          >
            <h3>Starships</h3>
            <Starships loading={loadingStarship} data={starship} />
          </Grid>
          {/* )} */}
        </Grid>

        // <Box
        //   width="100%"
        //   display="flex"
        //   flexDirection="row"
        //   justifyContent="center"
        //   alignItems="start"
        //   marginTop={5}
        // >
        //   <BoxData>
        //     <People loading={loadingPeople} data={personData} />
        //     {!!planet.name && (
        //       <>
        //         <Divider
        //           sx={{
        //             marginTop: '15px',
        //             marginBottom: '15px',
        //           }}
        //         />
        //         <Planets loading={loadingPlanet} data={planet} />
        //       </>
        //     )}
        //   </BoxData>
        //   <BoxData>
        //     {!!starship.length && (
        //       <Starships loading={loadingStarship} data={starship} />
        //     )}
        //   </BoxData>
        // </Box>
      )}
    </>
  )
}

export default DataView
