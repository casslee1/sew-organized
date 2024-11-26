import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import '../Styles/entryForm.css';
import axios from "axios";

const EditFabric = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [fabric, setFabric] = useState({
        fabricName: '',
        length: '',
        width: '',
        fibreType: [], 
        otherFibreType: '',
        wovenOrKnit: '', 
        fabricType: '',
        solidOrPrint: '', 
        printType: '',
        dominantColour: '',
        purchaseDate: '', 
        purchasedFrom: '',
        price: '',
        prewashed: '', 
        notes: '',
    });
    

   
    useEffect(() => {
        const fetchFabric = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/fabric/${id}`);
                const fabricData = response.data;
                console.log(fabricData.fibreType);
                const formattedPurchaseDate = fabricData.purchaseDate
                ? new Date(fabricData.purchaseDate).toISOString().split('T')[0]
                : '';
    
                setFabric({
                    fabricName: fabricData.fabricName || '',
                    length: fabricData.length || '',
                    width: fabricData.width || '',
                    fibreType: JSON.parse(fabricData.fibreType) || [],
                    otherFibreType: fabricData.otherFibreType || '',
                    wovenOrKnit: fabricData.wovenOrKnit || '',
                    fabricType: fabricData.fabricType || '',
                    solidOrPrint: fabricData.solidOrPrint || '',
                    printType: fabricData.printType || '',
                    dominantColour: fabricData.dominantColour || '',
                    purchaseDate: formattedPurchaseDate,
                    purchasedFrom: fabricData.purchasedFrom || '',
                    price: fabricData.price !== null && fabricData.price !== undefined ? fabricData.price.toString() : '', 
                    prewashed: fabricData.prewashed || '',
                    notes: fabricData.notes || '',
                });
            } catch (error) {
                console.error('Error fetching fabric details:', error);
            }
        };
    
        fetchFabric();
    }, [id]);

    console.log(fabric.fibreType)

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


        const handleSubmit = async (event) => {
            event.preventDefault();
    
            const formData = new FormData(event.target);
            console.log(formData);
            //formData.append("fibreType", (fabric.fibreType)); 

            formData.append("userID", 1);
                          
            try {
                const response = await axios.put(`http://localhost:8080/fabric/edit/${id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                })
                navigate(`/fabricentry/${id}`);
                console.log(response);
            } catch (error) {
                console.error("Error uploading fabric:", error);
            }
    
         
        };

    return (
        <div className="entryFormWrapper">
            <h1>Edit Fabric</h1>
            <Box sx={{ p: 2, border: '1px solid grey', bgcolor: '#faf7f0' }}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                        value={fabric.fabricName}
                        onChange={(event) => setFabric({...fabric, fabricName:event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="double"
                        label="Length" 
                        name="length"
                        value={fabric.length}
                        onChange={(event) => setFabric({...fabric, length:event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="double" 
                        label="Width" 
                        name="width"
                        value={fabric.width}
                        onChange={(event) => setFabric({...fabric, width:event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                <FormControl sx={{width: 380 }}>
                    <InputLabel>Fibre Type</InputLabel>
                    <Select
                        multiple
                        name="fibreType"
                        value={fabric.fibreType}
                            onChange={(event) => {
                                if (fabric.fibreType.includes(event.target.value)){
                                    let newFibreType = fabric.fibreType;
                                    let index = newFibreType.indexOf(event.target.value);
                                    newFibreType.splice(index, 1)
                                    setFabric({...fabric, fibreType: newFibreType})
                                }
                                else{
                                    console.log(event.target.value)

                                    setFabric({...fabric, fibreType: event.target.value})
                                }
                            }
                        }

                        input={<OutlinedInput label="Fibre Type" />}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {fibreTypesList.map((fibreType) => (
                            <MenuItem key={fibreType} value={fibreType}>
                            <Checkbox checked={fabric.fibreType.includes(fibreType)} />
                            <ListItemText primary={fibreType} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>                     
                </div>
                <br />
                {fabric.fibreType.includes('Other') && (
                <div>
                    <div>
                    <TextField 
                        type="text" 
                        label="Other Fibre" 
                        name="otherFibreType"
                        value={fabric.otherFibreType}
                        onChange={(event) => setFabric({...fabric, otherFibreType:event.target.value})}
                        sx={{width: 380 }}
                    />
                    </div>
                    <br />
                </div>)}
                <div>
                    <FormControl>
                        <FormLabel>Woven or knit?</FormLabel>
                        <RadioGroup
                            value={fabric.wovenOrKnit} 
                            onChange={(event) => setFabric({...fabric, wovenOrKnit:event.target.value})}
                        >
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
                        value={fabric.fabricType}
                        onChange={(event) => setFabric({...fabric, fabricType:event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Solid or Print?</FormLabel>
                        <RadioGroup 
                            value={fabric.solidOrPrint}
                            onChange={(event) => setFabric({...fabric, solidOrPrint:event.target.value})}
                            >
                            
                            <FormControlLabel value="solid" name="solidOrPrint" control={<Radio />} label="Solid" />
                            <FormControlLabel value="print" name="solidOrPrint" control={<Radio />} label="Print" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                {fabric.solidOrPrint === 'print' && (
                <div>
                    <div>
                    {/*maybe switch to checkboxes*/}
                    <TextField 
                        type="text" 
                        label="Print Type" 
                        name="printType"
                        value={fabric.printType}
                        onChange={(event) => setFabric({...fabric, printType:event.target.value})}
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
                                name="dominantColour"                 
                                value={fabric.dominantColour}
                                onChange={(event) => setFabric({...fabric, dominantColour:event.target.value})}                       
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
                                <MenuItem value='black and white'>Black and White</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <br />
                {fabric.dominantColour === 'other' && (
                <div>
                    <div>
                    <TextField 
                        type="text" 
                        label="Other Colour" 
                        name="otherColour"
                        value={fabric.otherColour}
                        onChange={(event) => setFabric({...fabric, otherColour:event.target.value})}
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
                        value={fabric.purchaseDate}
                        onChange={(event) => setFabric({...fabric, purchaseDate:event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Purchased From" 
                        name="purchasedFrom"
                        value={fabric.purchasedFrom}
                        onChange={(event) => setFabric({...fabric, purchasedFrom:event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="number" 
                        label="Price" 
                        name="price"
                        value={fabric.price}
                        onChange={(event) => setFabric({...fabric, price:event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Prewashed?</FormLabel>
                        <RadioGroup
                            value={fabric.prewashed}
                            onChange={(event) => setFabric({...fabric, prewashed:event.target.value})}
                        >
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
                        value={fabric.notes}
                        onChange={(event) => setFabric({...fabric, notes:event.target.value})}
                        rows={4}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div className="buttonWrapper">
                <Button variant="contained" type="submit" sx={{background:'#9fdbcd'}}>Save Changes</Button>
                <Link to={`/fabricentry/${id}`}>
                    <Button variant="contained" sx={{background:'#9fdbcd'}} >Cancel</Button>
                </Link>
                </div>
            </form>
            </Box>
        </div>
    );
}
export default EditFabric;




            // let updatedFibreType = [...fabric.fibreType];
            // if (fabric.otherFibreType) {
            //     updatedFibreType = updatedFibreType.filter((type) => type !== 'Other'); // Remove placeholder "Other"
            //     updatedFibreType.push(fabric.otherFibreType); // Add custom fibre
            // }
