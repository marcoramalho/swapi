import { Stack } from '@mui/material'
import { Planets } from '../types/Planets'
import InfoData from '../components/PersonData'
import { firstUpCase, handleNumberFormat } from '../utils/handleData'
import Skeleton from './Skeleton'

interface PlanetsProps {
  loading: boolean
  data: Planets
}

const Planets = ({ loading, data }: PlanetsProps) => {
  return (
    <>
      <h3>PLANET</h3>
      {loading ? (
        <Skeleton />
      ) : (
        <Stack>
          <InfoData label="Name" value={data?.name ?? '...'} />
          <InfoData label="Terrain" value={firstUpCase(data?.terrain)} />
          <InfoData label="Climate" value={firstUpCase(data?.climate)} />
          <InfoData label="Gravity" value={data?.gravity ?? '...'} />
          <InfoData
            label="Population"
            value={handleNumberFormat(data?.population) ?? '...'}
          />
          <InfoData
            label="Diameter"
            value={handleNumberFormat(data?.diameter) ?? '...'}
          />
          <InfoData
            label="Orbital Period"
            value={data?.orbital_period ?? '...'}
          />
          <InfoData
            label="Rotation Period"
            value={data?.rotation_period ?? '...'}
          />
        </Stack>
      )}
    </>
  )
}

export default Planets
