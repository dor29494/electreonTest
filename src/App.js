import React,{useState} from "react"
import SearchBox from "./components/SearchBox"
import Gallery from "./components/Gallery"
import { Box, Grid } from "@material-ui/core";
function App() {
  const [results, setResults] = useState([]);
  return (
    <Box maxWidth={"md"} className="App">
<Grid container alignItems="center" justify="center">
<Grid item xs={12}>
<SearchBox setResults={setResults} />
</Grid>
<Grid item xs={12}>
  <Gallery results={results}/>
</Grid>
</Grid>
  </Box>
  )
}

export default App;
