import { Box, styled } from '@mui/material'

interface InfoDataProps {
  label?: string
  value?: string | number
}

const StyledBox = styled(Box)(() => ({
  marginBottom: '7px',
}))

const InfoData = ({ label, value }: InfoDataProps) => {
  return (
    <StyledBox>
      <span style={{ fontWeight: '600' }}>{label}: </span>
      <span>{value}</span>
    </StyledBox>
  )
}

export default InfoData
