import { makeStyles } from "@material-ui/core"
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ReviewPage from "./Pages/ReviewPage";
import SearchResultPage from "./Pages/SearchResultPage";

const useStyles = makeStyles((theme) => ({
  app: {
    width: '100%',
    height: 'fit-content',
    padding: 0,
    margin: 0,
    position: 'relative',
    backgroundColor: '#fff',
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Routes>
        <Route path="*" element={<Navigate to='/' replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </div>
  )
}

export default App