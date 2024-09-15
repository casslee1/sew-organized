import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link } from "react-router-dom";

const AddFabric = () => {
    return (
        <div>
            <h1>Add Fabric Here</h1>
            <FormControl>
                <div>
                    <FormLabel>Add image</FormLabel>
                </div>
                <br />
                <div>
                    <FormLabel>Length</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Width</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Woven or knit?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="woven" control={<Radio />} label="Woven" />
                            <FormControlLabel value="knit" control={<Radio />} label="Knit" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormLabel>Fibre Content</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Fabric Type</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Solid or Print?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="solid" control={<Radio />} label="Solid" />
                            <FormControlLabel value="print" control={<Radio />} label="Print" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormLabel>Print type</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Dominant colour</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Purchase Date</FormLabel>
                    <TextField type="date"></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Purchased From</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Price</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Prewashed?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="prewashed" control={<Radio />} label="Yes" />
                            <FormControlLabel value="not prewashed" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormLabel>Notes</FormLabel>
                    <TextField multiline></TextField>
                </div>
                <br />
                <div>
                <Button variant="contained">Submit</Button>
                <Link to="../fabric">
                    <Button variant="contained">Cancel</Button>
                </Link>
                </div>
            </FormControl>
        </div>
    );
  };
  
  export default AddFabric;