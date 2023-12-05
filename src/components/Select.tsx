import { FC, useState } from 'react'
import {
  FormControl,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  SelectChangeEvent,
  Stack,
} from '@mui/material'
import { List } from '../types/Common'

interface SelectProps {
  loading: boolean
  items: List[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void
}

const Select: FC<MuiSelectProps & SelectProps> = ({
  loading,
  items,
  onChange,
}) => {
  const [character, setCharacter] = useState('Select')

  const handleChange = (event: SelectChangeEvent) => {
    const ev: string = event.target.value
    setCharacter(ev)
    onChange(ev)
  }
  return (
    <Stack>
      <FormControl>
        <MuiSelect
          value={character}
          onChange={handleChange}
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          <MenuItem value="Select">
            {loading ? 'Loading...' : 'Select'}
          </MenuItem>
          {items.map(({ label, value }) => (
            <MenuItem value={value} key={value}>
              {label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Stack>
  )
}

export default Select
