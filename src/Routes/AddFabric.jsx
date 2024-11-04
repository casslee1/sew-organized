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
import '../Styles/entryForm.css';
import axios from "axios";


const AddFabric = () => {

    const [solidOrPrint, setSolidOrPrint] = useState('');
    const [dominantColour, setDominantColour] = useState('');
    const [fibreType, setFibreType] = useState([]);
    const [formKey, setFormKey] = useState(0);
    

        const handleSubmit = async (event) => {
            event.preventDefault();

            const formData = new FormData(event.target);

            formData.append("userID", 1);
            formData.append("fibreType", JSON.stringify(fibreType));
            formData.append("dominantColour", dominantColour);

            try {
            const response = await axios.put("http://localhost:8080/fabric/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            console.log(response);
        } catch (error) {
            console.error("Error uploading fabric:", error);
        }

        setFormKey((prevKey) => prevKey + 1);
        setFibreType([]);
        setDominantColour('');
        setSolidOrPrint('');
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
        <div className="entryFormWrapper">
            <h1>Add Fabric</h1>
            <Box sx={{ p: 2, border: '1px solid grey', bgcolor: '#faf7f0' }}>
            <form  key={formKey} onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <FormLabel>Add image</FormLabel>
                    <TextField 
                        name="fabricImage" 
                        type="file" 
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField
                        required 
                        label="Name" 
                        name="fabricName"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="double"
                        label="Length" 
                        name="length"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="double" 
                        label="Width" 
                        name="width"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                <FormControl sx={{width: 380 }}>
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
                        sx={{width: 380 }}
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
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Solid or Print?</FormLabel>
                        <RadioGroup value={solidOrPrint}
                            onChange={(event) => setSolidOrPrint(event.target.value)}
                            >
                            
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
                        sx={{width: 380 }}
                    />
                    </div>
                    <br />
                </div>)}
                <div>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel>Dominant Colour</InputLabel>
                            <Select
                                sx={{width: 380 }}                    
                                value={dominantColour}
                                onChange={(event) => setDominantColour(event.target.value)}                       
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
                                <MenuItem value='blackAndWhite'>Black and White</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <br />
                {dominantColour === 'other' && (
                <div>
                    <div>
                    <TextField 
                        type="text" 
                        label="Other Colour" 
                        name="otherColour"
                        sx={{width: 380 }}
                    />
                    </div>
                    <br />
                </div>)}
                <div>
                    <FormLabel>Date of Purchase</FormLabel>
                    <TextField 
                        type="date"
                        name="purchaseDate"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Purchased From" 
                        name="purchasedFrom"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="double" 
                        label="Price" 
                        name="price"
                        sx={{width: 380 }}
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
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div className="buttonWrapper">
                <Button variant="contained" type="submit" sx={{background:'#9fdbcd'}}>Submit</Button>
                <Link to="../fabric">
                    <Button variant="contained" sx={{background:'#9fdbcd'}} >Cancel</Button>
                </Link>
                </div>
            </form>
            </Box>
        </div>
    );
  };
  
  export default AddFabric;

  // <Button variant="contained" sx={{background:'#9fdbcd'}} onClick={testServer} >Cancel</Button>