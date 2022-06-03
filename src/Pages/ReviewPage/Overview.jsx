import { Box, LinearProgress, linearProgressClasses, Paper, Rating, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';

const vote_percent = [53, 43, 4, 0, 0]

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 10,
  width: 300,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: '#1a90ff'
  },
}));

const Overview = () => {
  return (
    <Paper
      sx={
        (theme) => ({
          height: 'fit-content',
          width: '100%',
          maxWidth: '1150px',
          boxSizing: 'border-box',
          padding: theme.spacing(4),
          borderTop: '3px solid rgb(33, 177, 255)',
        })
      }
    >
      <Box
        display='flex'
      >
        <img style={{
          padding: '10px',
          width: '120px',
          aspectRatio: '1/1',
          boxShadow: 'rgb(221 221 226) 0px 0px 0px 1px inset',
          border: '0.5px solid rgba(0, 0, 0, 0.05)',
          borderRadius: '4px',
          objectFit: 'contain'
        }}
          src='https://www.gartner.com/imagesrv/apps/peerinsights/images/vendors/logos/google_enterprise-mobility-management-suites.png'
          alt="nice image" />
        <Box marginLeft={2} />
        <Box>
          <Box>
            <Typography variant="h4" style={{ fontWeight: 500 }}>Google Cloud Platform</Typography>
          </Box>
          <Box
            display='flex'
            alignItems='center'
          >
            <Typography variant='h6'>4.5</Typography>
            <Box marginLeft={1.5} />
            <Rating value={4.5} precision={0.1} size='small' readOnly/>
            <Box marginLeft={1.5} />
            <Typography variant='body1' color='rgb(33, 177, 255)'>500 Ratings</Typography>

          </Box>
        </Box>

      </Box>
      <Box marginTop={4} />
      <Box >
        {vote_percent.map((percent, index) => (
          <Box display='flex' key={index} alignItems='center' marginTop={1}>
            <Typography color="black" component='div' variant='body2'>{5 - index} Star</Typography>
            <Box marginLeft={1}/>
            <BorderLinearProgress value={percent} variant="determinate" />
            <Box marginLeft={1}/>
            <Typography color="black" component='div' variant='body2'>{percent}%</Typography>

          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default Overview