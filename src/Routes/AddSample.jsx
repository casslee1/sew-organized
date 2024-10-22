import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import { Link } from "react-router-dom";
import '../Styles/entryForm.css';
import Box from '@mui/material/Box';

const AddSample = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      };

    return (
        <div className="entryFormWrapper">
            <h1>Add a Project</h1>
            <Box sx={{ p: 2, border: '1px solid grey', bgcolor: '#faf7f0' }}>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <TextField 
                        type="text" 
                        label="Sample Column" 
                        name="sampleColumn"
                        sx={{width: 380 }}
                    />
                </div>
                
                <br />
                <div className="buttonWrapper">
                    <Button variant="contained" type="submit" sx={{background:'#9fdbcd'}}>Submit</Button>
                    <Link to="../sample">
                        <Button variant="contained" sx={{background:'#9fdbcd'}}>Cancel</Button>
                    </Link>
                </div>   
            </form>  
            </Box> 
        </div>
    );

  };
  
  export default AddSample;