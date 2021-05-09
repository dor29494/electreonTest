import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";


const SearchBox = ({setResults}) => {
  const [text, setText] = useState("");
  const [err, setErr] = useState(false);
  const handleInput = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    if (text.length === 0) {
      //set error state to true
      setErr(true);
      return;
    }
    if(text.length > 0){
        const apiCall = async () => {
            fetch(`https://api.giphy.com/v1/gifs/search?&q=${text}&limit=15&api_key=${process.env.REACT_APP_API_KEY}`)    
            .then(response => {
                return response.json();
            })
            .then(json => {
                setResults(json.data)
            })
    
            .catch(err => console.log(err));
        }
        ;
    
        apiCall();
    
        //change error state back to false
        setText("");
        setErr(false);
    }
}

  return (
    <Box style={{display: "flex", flexDirection: "column"}}>
      <TextField className="input-field" variant="outlined" defaultValue={text} onChange={handleInput} />{" "}
      <Button variant="outlined" className="submit-btn" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default SearchBox;
