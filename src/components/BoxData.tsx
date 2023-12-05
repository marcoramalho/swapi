import { Box, styled } from '@mui/material'

interface BoxDataProps {
  children: React.ReactNode
}

const StyledBox = styled(Box)(() => ({
  // border: '1px solid gray',
  borderRadius: '1.3rem',
  width: '50%',
  margin: '0 15px',
  padding: '20px',
  minHeight: '450px',
}))

const BoxData = ({ children }: BoxDataProps) => {
  return <StyledBox>{children}</StyledBox>
}

export default BoxData
