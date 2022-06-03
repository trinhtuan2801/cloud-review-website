import { Avatar, Box, Rating, Typography } from "@mui/material"

const Review = () => {
  return (
    <Box>
      <Box
        display='flex'
      >
        <Avatar sx={{ width: 85, height: 85 }} />
        <Box marginLeft={2} />
        <Box>
          <Typography variant='caption'>DECEMBER 26, 2021</Typography>
          <Typography variant='h5' style={{ fontWeight: 600 }}>Feature Rich All-in-One Cloud Platform for Enterprises</Typography>
          <Typography variant='caption' component='div'>Verified User</Typography>
          <Typography variant='caption' component='div'>Manager</Typography>
          <Typography variant='caption' component='div'>Computer Networking Company, 10.000+ employees</Typography>

        </Box>
      </Box>

      <Box marginTop={1}/>

      <Box 
        display='flex'
        alignItems='center'
      >
        <Typography variant="button">4.0</Typography>
        <Box marginLeft={1}/>
        <Rating value={4} precision={0.1} size='small' readOnly/>
      </Box>
      <Box marginTop={1.5}/>
      <Typography variant="body1">Google Cloud is the ultimate solution for Cloud hosting and services. It offers to set up a resource hierarchy that can help manage the use and control of Google Cloud across the organization easily. It also has special APIs specifically for Enterprise use which is also a very good benefit.</Typography>
    </Box>
  )
}

export default Review