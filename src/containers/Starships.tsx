import { Grid } from '@mui/material'
import { Starship } from '../types/Starship'
import InfoData from '../components/PersonData'
import { handleNumberFormat } from '../utils/handleData'
import Skeleton from './Skeleton'

interface PlanetsProps {
  loading: boolean
  data: Starship[]
}

const Starships = ({ loading, data }: PlanetsProps) => {
  return (
    <>
      <h3>STARSHIP</h3>
      {loading ? (
        <Skeleton />
      ) : (
        <Grid container>
          {data.map((row, i) => (
            <Grid item xs={6} mb="40px" key={i}>
              <InfoData label="Name" value={row?.name} />
              <InfoData label="Model" value={row?.model} />
              <InfoData
                label="Passengers"
                value={handleNumberFormat(row?.passengers)}
              />
              <InfoData
                label="Cargo Capacity"
                value={handleNumberFormat(row?.cargo_capacity)}
              />
              <InfoData
                label="Cost in Credits"
                value={handleNumberFormat(row?.cost_in_credits)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Starships
