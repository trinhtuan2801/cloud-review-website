import { Box, Divider, IconButton, InputAdornment, MenuItem, OutlinedInput, Pagination, Paper, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { Fragment, useState } from "react";
import Review from "./Review";

const sort_choices = [
  'Date',
  'Highest Overall Rating',
  'Lowest Overall Rating'
]

const item_per_page = 4

const ReviewSection = ({ reviews }) => {

  const [sortBy, setSortBy] = useState('Date')
  const [page, setPage] = useState(1)

  return (
    <Paper
      sx={
        (theme) => ({
          height: 'fit-content',
          width: '100%',
          maxWidth: '1150px',
          boxSizing: 'border-box',
          paddingY: theme.spacing(3),
          paddingX: theme.spacing(2),
          borderTop: '3px solid rgb(33, 177, 255)',
        })
      }
    >
      <Box
        display='flex'
      >
        <Box
          width='75%'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Typography variant="h5" style={{ fontWeight: 600 }} component='div'>Ratings And Reviews</Typography>
          <Typography variant="caption" component='div'>(1-10 of 100)</Typography>
          <Box marginTop={3} />
          <OutlinedInput
            size="small"
            fullWidth
            placeholder={`Search these reviews...`}
            startAdornment={<InputAdornment position="start">
              <IconButton size="small"> <SearchIcon fontSize="inherit" /> </IconButton>
            </InputAdornment>}

          />
        </Box>

        <Box marginLeft={2} />

        <Box
          flexGrow={1}
          heigth='100%'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Typography variant="h6" style={{ fontWeight: 500 }}>Sort by</Typography>
          <TextField
            id="outlined-select-currency"
            select
            value={sortBy}
            fullWidth
            size="small"
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sort_choices.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>

      <Box marginTop={2} />
      
      {!!reviews &&
        <Box>
          {reviews.slice((page-1)*item_per_page, (page-1)*item_per_page+item_per_page).map((review, index) => (
            <Fragment key={index}>
              <Divider />
              <Box marginTop={2} />
              <Review {...review} />
              <Box marginTop={2} />
            </Fragment>
          ))}
        </Box>
      }

      <Box marginTop={4} />

      <Box
        display='flex'
        justifyContent='flex-end'
      >
        <Pagination count={Math.ceil(reviews.length / item_per_page)} page={page} onChange={(e, value) => setPage(value)} color='primary' />
      </Box>
    </Paper>
  )
}

export default ReviewSection