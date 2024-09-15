import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";


const AddPatterns = () => {
    return (
        <div>
            <h1>Add Patterns Here</h1>
            <FormControl>
                <div>
                    <FormLabel>Add image</FormLabel>
                </div>
                <br />
                <div>
                    <FormLabel>Pattern Company</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Pattern Number</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Pattern Name</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Size Range</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    {/*Need to switch to accept multiple selections*/}
                    <FormLabel>Garment Type</FormLabel>
                        <Select>
                            <MenuItem value={"Top"}>Top</MenuItem>
                            <MenuItem value={"Skirt"}>Skirt</MenuItem>
                            <MenuItem value={"Dress"}>Dress</MenuItem>
                            <MenuItem value={"Trousers"}>Trousers</MenuItem>
                            <MenuItem value={"Shorts"}>Shorts</MenuItem>
                            <MenuItem value={"Jumpsuit"}>Jumpsuit</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Print of PDF?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="print" control={<Radio />} label="Print" />
                            <FormControlLabel value="PDF" control={<Radio />} label="PDF" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Is PDF printed?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="printed" control={<Radio />} label="Yes" />
                            <FormControlLabel value="not printed" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Cut out?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="cut out" control={<Radio />} label="Yes" />
                            <FormControlLabel value="not cut out" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormLabel>Size cut out?</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Fabric requirements</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Notions required</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Purchase Date</FormLabel>
                    <TextField type="date"></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Year released</FormLabel> {/*Switch to dropdown menu*/}
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>For woven or knit?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="woven" control={<Radio />} label="Woven" />
                            <FormControlLabel value="knit" control={<Radio />} label="Knit" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormLabel>Recommended fabric types</FormLabel> {/*Switch to dropdown menu*/}
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Purchased From</FormLabel>
                    <TextField></TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Notes</FormLabel>
                    <TextField multiline></TextField>
                </div>
                <br />
                <div>
                <Button variant="contained">Submit</Button>
                <Link to="../patterns">
                    <Button variant="contained">Cancel</Button>
                </Link>
                </div>
            </FormControl>
        </div>
    );
  };
  
  export default AddPatterns;