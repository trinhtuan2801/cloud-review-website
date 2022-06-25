import { Avatar, Box, Rating, Typography } from "@mui/material"

const Review = ({ avatar, date, overview, verified, job, company, star, detail }) => {
  return (
    <Box>
      <Box
        display='flex'
      >
        <Avatar sx={{ width: 85, height: 85 }} src={avatar} />
        <Box marginLeft={2} />
        <Box>
          <Typography variant='caption'>{date}</Typography>
          <Typography variant='h5' style={{ fontWeight: 600 }}>{overview}</Typography>
          {verified && <Typography variant='caption' component='div'>Verified User</Typography>}
          <Typography variant='caption' component='div'>{job}</Typography>
          <Typography variant='caption' component='div'>{company}</Typography>

        </Box>
        {/* <Box>
          <Typography variant='caption'>DECEMBER 26, 2021</Typography>
          <Typography variant='h5' style={{ fontWeight: 600 }}>Feature Rich All-in-One Cloud Platform for Enterprises</Typography>
          <Typography variant='caption' component='div'>Verified User</Typography>
          <Typography variant='caption' component='div'>Manager</Typography>
          <Typography variant='caption' component='div'>Computer Networking Company, 10.000+ employees</Typography>

        </Box> */}
      </Box>

      <Box marginTop={1} />

      <Box
        display='flex'
        alignItems='center'
      >
        <Typography variant="button">{star.toFixed(1)}</Typography>
        <Box marginLeft={1} />
        <Rating value={star} precision={0.1} size='small' readOnly />
      </Box>
      <Box marginTop={1.5} />
      <Typography variant="body1">{detail}</Typography>
      {/* <Typography variant="body1">Google Cloud is the ultimate solution for Cloud hosting and services. It offers to set up a resource hierarchy that can help manage the use and control of Google Cloud across the organization easily. It also has special APIs specifically for Enterprise use which is also a very good benefit.</Typography> */}
    </Box>
  )
}

export default Review