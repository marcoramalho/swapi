import { FC, useState } from 'react'
import {
  Box,
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
  label?: string
  items: List[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void
}

const Select: FC<MuiSelectProps & SelectProps> = ({
  loading,
  label,
  items,
  onChange,
}) => {
  const [age, setAge] = useState('Select')

  const handleChange = (event: SelectChangeEvent) => {
    const ev: string = event.target.value
    setAge(ev)
    onChange(ev)
  }
  return (
    <Stack>
      <Box my="7px">{label}</Box>
      <FormControl>
        <MuiSelect
          id="demo-simple-select-standard"
          value={age}
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
