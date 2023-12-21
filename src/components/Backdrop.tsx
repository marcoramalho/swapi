import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material'

interface BackdropProp {
  open: boolean
}

const Backdrop = ({ open }: BackdropProp) => {
  return (
    <MuiBackdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </MuiBackdrop>
  )
}

export default Backdrop
