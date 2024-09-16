import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link } from "react-router-dom";


const AddFabric = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      };

      const testServer = () => {
      fetch('http://localhost:8080/test/:Username?User1')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
      };

    return (
        <div>
            <h1>Add Fabric Here</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormLabel>Add image</FormLabel>
                    <TextField 
                        name="fabricImage" 
                        type="file" 
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="text" 
                        label="Length" 
                        name="length"
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="text" 
                        label="Width" 
                        name="width"
                    />
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Woven or knit?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="woven" name="wovenOrKnit" control={<Radio />} label="Woven" />
                            <FormControlLabel value="knit" name="wovenOrKnit" control={<Radio />} label="Knit" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Fibre Content" 
                        name="fibreContent"
                    />                   
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Fabric Type" 
                        name="fabricType"
                    />
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Solid or Print?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="solid" name="solidOrPrint" control={<Radio />} label="Solid" />
                            <FormControlLabel value="print" name="solidOrPrint" control={<Radio />} label="Print" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    {/*maybe switch to checkboxes*/}
                    <TextField 
                        type="text" 
                        label="Print Type" 
                        name="printType"
                    />
                </div>
                <br />
                <div>
                    {/*maybe switch to checkboxes*/}
                    <TextField 
                        type="text" 
                        label="Dominant Colour" 
                        name="dominantColour"
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Date of Purchase</FormLabel>
                    <TextField 
                        type="date"
                        name="purchaseDate"
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Purchased From" 
                        name="purchasedFrom"
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Price" 
                        name="price"
                    />
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Prewashed?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="yes" name="prewashed" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" name="prewashed" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <TextField  
                        multiline
                        label="Notes" 
                        name="notes" 
                        rows={4}
                    />
                </div>
                <br />
                <div>
                <Button variant="contained" type="submit">Submit</Button>
                <br />
                <br />
                <Link to="../fabric">
                    <Button variant="contained" onClick={testServer} >Cancel</Button>
                </Link>
                </div>
            </form>
        </div>
    );
  };
  
  export default AddFabric;