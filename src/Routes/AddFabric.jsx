import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';


const AddFabric = () => {

    const [solidOrPrint, setSolidOrPrint] = useState('');
    const [colourSelection, setColourSelection] = useState('');
    const [fibreType, setFibreType] = useState([]);
    

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

      const fibreTypesList = [
        'Cotton',
        'Linen',
        'Silk',
        'Wool',
        'Elastane',
        'Nylon',
        'Polyester',
        'Chitosante',
        'Rayon',
        'Viscose',
        'Bamboo',
        'Hemp',
        'Ramie', 
        'Other'
      ];
          
      const handleFibreChange = (event) => {
        const {
          target: { value },
        } = event;
        setFibreType(
          typeof value === 'string' ? value.split(',') : value,
        )};
          

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
                <div>
                    <TextField
                        required 
                        label="Name" 
                        name="fabricName"
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
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel>Fibre Type</InputLabel>
                    <Select
                        multiple
                        value={fibreType}
                        onChange={handleFibreChange}
                        input={<OutlinedInput label="Fibre Type" />}
                        renderValue={(selected) => selected.join(', ')
                        }
                    >
                        {fibreTypesList.map((fibreTypesList) => (
                            <MenuItem key={fibreTypesList} value={fibreTypesList}>
                            <Checkbox checked={fibreType.includes(fibreTypesList)} />
                            <ListItemText primary={fibreTypesList} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>                     
                </div>
                <br />
                {fibreType.includes('Other') && (
                <div>
                    <div>
                    <TextField 
                        type="text" 
                        label="Other Fibre" 
                        name="otherFibreType"
                    />
                    </div>
                    <br />
                </div>)}
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
                <div>{/*maybe switch to dropdown*/}
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
                        <RadioGroup value={solidOrPrint}
                            onChange={(event) => setSolidOrPrint(event.target.value)}>
                            
                            <FormControlLabel value="solid" name="solidOrPrint" control={<Radio />} label="Solid" />
                            <FormControlLabel value="print" name="solidOrPrint" control={<Radio />} label="Print" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                {solidOrPrint === 'print' && (
                <div>
                    <div>
                    {/*maybe switch to checkboxes*/}
                    <TextField 
                        type="text" 
                        label="Print Type" 
                        name="printType"
                    />
                    </div>
                    <br />
                </div>)}
                <div>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel>Dominant Colour</InputLabel>
                            <Select                    
                                value={colourSelection}
                                onChange={(event) => setColourSelection(event.target.value)}                       
                            >
                                <MenuItem value='red'>Red</MenuItem>
                                <MenuItem value='orange'>Orange</MenuItem>
                                <MenuItem value='yellow'>Yellow</MenuItem>
                                <MenuItem value='green'>Green</MenuItem>
                                <MenuItem value='turquoise'>Turquoise</MenuItem>
                                <MenuItem value='blue'>Blue</MenuItem>
                                <MenuItem value='navy'>Navy</MenuItem>
                                <MenuItem value='purple'>Purple</MenuItem>
                                <MenuItem value='pink'>Pink</MenuItem>
                                <MenuItem value='white'>White</MenuItem>
                                <MenuItem value='grey'>Grey</MenuItem>
                                <MenuItem value='black'>Black</MenuItem>
                                <MenuItem value='beige'>Beige</MenuItem>
                                <MenuItem value='brown'>Brown</MenuItem>
                                <MenuItem value='multicolour'>Multicolour</MenuItem>
                                <MenuItem value='rainbow'>Rainbow</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <br />
                {colourSelection === 'other' && (
                <div>
                    <div>
                    <TextField 
                        type="text" 
                        label="Other Colour" 
                        name="otherColour"
                    />
                    </div>
                    <br />
                </div>)}
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
                        type="number" 
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