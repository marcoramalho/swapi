import { styled, Skeleton as MuiSkeleton } from '@mui/material'

const StyledSkeleton = styled(MuiSkeleton)(() => ({
  width: '250px',
}))

const Skeleton = () => {
  return (
    <>
      <StyledSkeleton />
      <StyledSkeleton />
      <StyledSkeleton />
      <StyledSkeleton />
      <StyledSkeleton />
    </>
  )
}

export default Skeleton
