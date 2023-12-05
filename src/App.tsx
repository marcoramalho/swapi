import { Box, Stack } from '@mui/material'
import Image from './components/Image'
import swLogo from './assets/starwars-black.svg'
import DataView from './containers/DataView'

function App() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        width="100%"
      >
        <Image src={swLogo} width={280} height={280} alt="Star Wars" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingX="50px"
      >
        <DataView />
      </Box>
    </Stack>
  )
}

export default App
