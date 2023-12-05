import { Stack } from '@mui/material'
import { People as TypePeople } from '../types/People'
import { firstUpCase } from '../utils/handleData'
import PersonData from '../components/PersonData'
import Skeleton from './Skeleton'

interface PeopleProps {
  loading: boolean
  data: TypePeople | undefined
}

const People = ({ loading, data }: PeopleProps) => {
  return (
    <>
      <h3>CHARACTER</h3>
      {loading ? (
        <Skeleton />
      ) : (
        <Stack>
          <PersonData label="Name" value={data?.name ?? '...'} />
          <PersonData label="Birth Year" value={data?.birth_year ?? '...'} />
          <PersonData
            label="Gender"
            value={firstUpCase(data?.gender) ?? '...'}
          />
          <PersonData label="Height" value={`${data?.height ?? '... '}cm`} />
          <PersonData
            label="Eye Color"
            value={firstUpCase(data?.eye_color) ?? '...'}
          />
          <PersonData
            label="Skin Color"
            value={firstUpCase(data?.skin_color) ?? '...'}
          />
        </Stack>
      )}
    </>
  )
}

export default People
