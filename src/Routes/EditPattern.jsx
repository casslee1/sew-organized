import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link, useParams, useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { useState } from "react";
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import '../Styles/entryForm.css';
import Grid from '@mui/material/Grid2';
import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext"; 

const EditPattern = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { userID } = useContext(UserContext);

    const [pattern, setPattern] = useState([]);

    const formatDate = (dateString) => {
        if (!dateString) return ""; 
        return dateString.split("T")[0] || dateString.split(" ")[0]; 
};

useEffect(() => {
    axios.get(`http://localhost:8080/patterns/${id}`)
    .then(response => {
        const data = response.data;

        const formattedPattern = {
            ...data,
            
            purchaseDate: formatDate(data.dateCompleted), 
        };

        setPattern(formattedPattern);
})
    .catch(error => console.error("Error fetching project", error));
}, [id]);

const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("userID", userID);
    
    try {
        const response = await axios.put(`http://localhost:8080/patterns/edit/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        navigate(`/patternentry/${id}`);
        console.log(response);
        } catch (error) {
            console.error("Error updating pattern:", error);
    }
};

    return (
        <div className="entryFormWrapper">
            <h1>Edit a Pattern</h1>
            <Box sx={{ p: 2, border: '1px solid grey', bgcolor: '#faf7f0' }}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <FormLabel>Add image</FormLabel>
                    <TextField 
                        name="patternImage" 
                        type="file" 
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <Box sx={{ minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel>Pattern Company</InputLabel>
                            <Select
                                sx={{width: 380 }}
                                required={true}                    
                                value={pattern.patternCompany || ""}
                                onChange={(event) => setPattern({ ...pattern, patternCompany: event.target.value })}                       
                            >
                                <ListSubheader>A</ListSubheader>
                                <MenuItem value='Advance'>Advance</MenuItem>
                                <MenuItem value='Alice & Co Patterns'>Alice & Co Patterns</MenuItem>
                                <MenuItem value='Allie Olson'>Allie Olson</MenuItem>
                                <MenuItem value='Anna Allen'>Anna Allen</MenuItem>
                                <MenuItem value='Anne Adams'>Anne Adams</MenuItem>
                                <ListSubheader>B</ListSubheader>
                                <MenuItem value='Bella Loves Patterns'>Bella Loves Patterns</MenuItem>
                                <MenuItem value='Burda Style'>Burda Style</MenuItem>
                                <MenuItem value='Butterick'>Butterick</MenuItem>
                                <MenuItem value='By Hand London'>By Hand London</MenuItem>
                                <ListSubheader>C</ListSubheader>
                                <MenuItem value='Cashmerette'>Cashmerette</MenuItem>
                                <MenuItem value='Chalk and Notch'>Chalk and Notch</MenuItem>
                                <MenuItem value='Charm Patterns'>Charm Patterns</MenuItem>
                                <MenuItem value='Closet Core Patterns'>Closet Core Patterns</MenuItem>
                                <MenuItem value='Cloth Habit'>Cloth Habit</MenuItem>
                                <ListSubheader>D</ListSubheader>
                                <MenuItem value='Deer and Doe'>Deer and Doe</MenuItem>
                                <ListSubheader>E</ListSubheader>
                                <MenuItem value='Edgewater Avenue'>Edgewater Avenue</MenuItem>
                                <MenuItem value='Emerald Erin'>Emerald Erin</MenuItem>
                                <MenuItem value='Emmaline Bags'>Emmaline Bags</MenuItem>
                                <MenuItem value='Evie La Luve'>Evie La Luve</MenuItem>
                                <ListSubheader>F</ListSubheader>
                                <MenuItem value='Fibre Mood'>Fibre Mood</MenuItem>
                                <MenuItem value='Folkware'>Folkware</MenuItem>
                                <MenuItem value='French Navy'>French Navy</MenuItem>
                                <MenuItem value='Friday Pattern Company'>Friday Pattern Company</MenuItem>
                                <ListSubheader>G</ListSubheader>
                                <MenuItem value='Grainline Studio'>Grainline Studio</MenuItem>
                                <ListSubheader>H</ListSubheader>
                                <MenuItem value='Helen&#39;s Closet'>Helen&#39;s Closet</MenuItem>
                                <MenuItem value='Hey June Handmade'>Hey June Handmade</MenuItem>
                                <MenuItem value='Hollywood'>Hollywood</MenuItem>
                                <MenuItem value='How to Do Fashion'>How to Do Fashion</MenuItem>
                                <ListSubheader>I</ListSubheader>
                                <MenuItem value='I Am Patterns'>I Am Patterns</MenuItem>
                                <MenuItem value='Itch to Stitch'>Itch to Stitch</MenuItem>
                                <ListSubheader>J</ListSubheader>
                                <MenuItem value='Jennifer Lauren Handmade'>Jennifer Lauren Handmade</MenuItem>
                                <MenuItem value='Just Patterns'>Just Patterns</MenuItem>
                                <ListSubheader>K</ListSubheader>
                                <MenuItem value='Know Me'>Know Me</MenuItem>
                                <ListSubheader>L</ListSubheader>
                                <MenuItem value='Liesl + Co.'>Liesl + Co.</MenuItem>
                                <ListSubheader>M</ListSubheader>
                                <MenuItem value='Madalynne'>Madalynne</MenuItem>
                                <MenuItem value='McCall&#39;s'>McCall&#39;s</MenuItem>
                                <MenuItem value='Megan Nielsen'>Megan Nielsen</MenuItem>
                                <MenuItem value='Merchant & Mills'>Merchant & Mills</MenuItem>
                                <ListSubheader>N</ListSubheader>
                                <MenuItem value='Named Clothing'>Named Clothing</MenuItem>
                                <MenuItem value='New Look'>New Look</MenuItem>
                                <MenuItem value='Nina Lee'>Nina Lee</MenuItem>
                                <MenuItem value='Noodlehead'>Noodlehead</MenuItem>
                                <ListSubheader>O</ListSubheader>
                                <MenuItem value='Ohhh Lulu'>Ohhh Lulu</MenuItem>
                                <MenuItem value='Orageuse'>Orageuse</MenuItem>
                                <ListSubheader>P</ListSubheader>
                                <MenuItem value='Paper Theory'>Paper Theory</MenuItem>
                                <MenuItem value='Papercut Patterns'>Papercut Patterns</MenuItem>
                                <MenuItem value='Pattern Fantastique'>Pattern Fantastique</MenuItem>
                                <MenuItem value='Pauline Alice'>Pauline Alice</MenuItem>
                                <ListSubheader>R</ListSubheader>
                                <MenuItem value='Republique du Chiffon'>Republique du Chiffon</MenuItem>
                                <MenuItem value='Roberts Wood'>Roberts Wood</MenuItem>
                                <ListSubheader>S</ListSubheader>
                                <MenuItem value='Schnittchen Patterns'>Schnittchen Patterns</MenuItem>
                                <MenuItem value='Seamwork'>Seamwork</MenuItem>
                                <MenuItem value='Sew DIY'>Sew DIY</MenuItem>
                                <MenuItem value='Sew House Seven'>Sew House Seven</MenuItem>
                                <MenuItem value='Sew Over It'>Sew Over It</MenuItem>
                                <MenuItem value='Sewing Machina'>Sewing Machina</MenuItem>
                                <MenuItem value='Sewing Patterns by Masin'>Sewing Patterns by Masin</MenuItem>
                                <MenuItem value='Silversaga Patterns'>Silversaga Patterns</MenuItem>
                                <MenuItem value='Simplicity'>Simplicity</MenuItem>
                                <MenuItem value='Sophie Hines'>Sophie Hines</MenuItem>
                                <MenuItem value='Spadea'>Spadea</MenuItem>
                                <MenuItem value='Style'>Style</MenuItem>
                                <MenuItem value='Style Arc'>Style Arc</MenuItem>
                                <ListSubheader>T</ListSubheader>
                                <MenuItem value='The Assembly Line'>The Assembly Line</MenuItem>
                                <MenuItem value='Thread Theory'>Thread Theory</MenuItem>
                                <MenuItem value='Tilly and the Buttons'>Tilly and the Buttons</MenuItem>
                                <MenuItem value='Trend Patterns'>Trend Patterns</MenuItem>
                                <MenuItem value='True Bias'>True Bias</MenuItem>
                                <ListSubheader>V</ListSubheader>
                                <MenuItem value='Victory Patterns'>Victory Patterns</MenuItem>
                                <MenuItem value='Vikisews'>Vikisews</MenuItem>
                                <MenuItem value='Vogue'>Vogue</MenuItem>
                                <ListSubheader>...</ListSubheader>
                                <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <br />
                {pattern.patternCompany === 'other' && (
                <div>
                    <div>
                    <TextField 
                        type="text" 
                        label="Other Pattern Company" 
                        name="otherPatternCompany"
                        value={pattern.otherPatternCompany || ""}
                        onChange={(event) => setPattern({...pattern, otherPatternCompany: event.target.value})}
                        sx={{width: 380 }}
                    />
                    </div>
                    <br />
                </div>)}
                <div>
                    <TextField 
                        type="text" 
                        label="Pattern Number" 
                        name="patternNumber"
                        value={pattern.patternNumber || ""}
                        onChange={(event) => setPattern({...pattern, patternNumber: event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                    type="text" 
                    label="Pattern Name" 
                    name="patternName"
                    value={pattern.patternName || ""}
                    onChange={(event) => setPattern({...pattern, patternName: event.target.value})}
                    sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Size Range" 
                        name="sizeRange"
                        value={pattern.sizeRange || ""}
                        onChange={(event) => setPattern({...pattern, sizeRange: event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Pattern Type</FormLabel>
                    <FormGroup 
                        value={pattern.patternType || ""}
                        onChange={(event) => setPattern({ ...pattern, patternType: event.target.value })}  
                    > 
                    <Grid container spacing={2} >
                    <Grid container  xs={6} direction="column" >
                        <FormControlLabel control={<Checkbox />} label="Top" value="top" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Skirt" value="skirt" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Dress" value="dress" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Trousers" value="trousers" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Shorts" value="shorts" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Jumpsuit" value="jumpsuit" name="patternType"/>
                        </Grid>
                        <Grid container  xs={6} direction="column" >
                        <FormControlLabel control={<Checkbox />} label="Outerwear" value="outerwear" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Swimwear" value="swimwear" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Under Garments" value="underGarments" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Bag" value="bag" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Quilt" value="quilt" name="patternType"/>
                        <FormControlLabel control={<Checkbox />} label="Other" value="other" name="patternType"/>
                        </Grid>
                        </Grid>
                    </FormGroup>
                </div>
                <br />
                {pattern.patternType === 'other' && (
                <div>
                    <div>
                    <TextField 
                        type="text" 
                        label="Other Pattern Type" 
                        name="otherPatternType"
                        value={pattern.otherPatternType || ""}
                        onChange={(event) => setPattern({...pattern, otherPatternType: event.target.value})}
                        sx={{width: 380 }}
                    />
                    </div>
                    <br />
                </div>)}
                <div>
                    <FormControl>
                        <FormLabel>Print or PDF?</FormLabel>
                        <RadioGroup 
                            value={pattern.printOrPDF || ""}
                            onChange={(event) => setPattern({ ...pattern, printOrPDF: event.target.value })}
                        >
                            <FormControlLabel value="print" name="printOrPDF" control={<Radio />} label="Print" />
                            <FormControlLabel value="PDF" name="printOrPDF" control={<Radio />} label="PDF" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                {pattern.printOrPDF === 'PDF' && (
                <div>
                    <div>
                        <FormControl>
                            <FormLabel>Is PDF printed?</FormLabel>
                            <RadioGroup
                                 value={pattern.isPDFPrinted || ""}
                                 onChange={(event) => setPattern({ ...pattern, isPDFPrinted: event.target.value })}
                            >
                                <FormControlLabel value="printed" name="isPDFPrinted" control={<Radio />} label="Yes" />
                                <FormControlLabel value="not printed" name="isPDFPrinted" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <br />
                </div>)}
                <div>
                    <FormControl>
                        <FormLabel>Cut out?</FormLabel>
                        <RadioGroup
                            value={pattern.cutOut || ""}
                            onChange={(event) => setPattern({ ...pattern, cutOut: event.target.value })}
                        >
                            <FormControlLabel value="cut out" name="cutOut" control={<Radio />} label="Yes" />
                            <FormControlLabel value="not cut out" name="cutOut" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                {pattern.cutOut === 'cut out' && (
                    <div>
                        <div>
                        <TextField 
                            type="text" 
                            label="Size cut out?"
                            name="sizeCutOut"
                            value={pattern.sizeCutOut || ""}
                            onChange={(event) => setPattern({...pattern, sizeCutOut: event.target.value})}
                            sx={{width: 380 }}
                        />
                    </div>
                    <br />
                </div>)}
                <div>
                    <TextField 
                        type="text" 
                        label="Fabric Requirements" 
                        name="fabricRequirements"
                        value={pattern.fabricRequirements || ""}
                        onChange={(event) => setPattern({...pattern, fabricRequirements: event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Notions Required" 
                        name="notionsRequired"
                        value={pattern.notionsRequired || ""}
                        onChange={(event) => setPattern({...pattern, notionsRequired: event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Purchase Date</FormLabel>                   
                    <TextField 
                        type="date" 
                        name="purchaseDate"
                        value={pattern.purchaseDate || ""}
                        onChange={(event) => setPattern({...pattern, purchaseDate: event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Year Released</FormLabel>                   
                    <TextField 
                        type="number" 
                        name="yearReleased"
                        value={pattern.yearReleased || ""}
                        onChange={(event) => setPattern({...pattern, yearReleased: event.target.value})}
                        sx={{width: 380 }}
                    />
                
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>For woven or knit?</FormLabel>
                        <RadioGroup
                            value={pattern.forWovenOrKnit || ""}
                            onChange={(event) => setPattern({ ...pattern, forWovenOrKnit: event.target.value })}
                        >
                            <FormControlLabel value="woven" name="forWovenOrKnit" control={<Radio />} label="Woven" />
                            <FormControlLabel value="knit" name="forWovenOrKnit" control={<Radio />} label="Knit" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Recommended fabric types" 
                        name="recommendedFabricTypes"
                        value={pattern.recommendedFabricTypes || ""}
                        onChange={(event) => setPattern({...pattern, recommendedFabricTypes: event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Purchased From" 
                        name="purchasedFrom"
                        value={pattern.purchasedFrom || ""}
                        onChange={(event) => setPattern({...pattern, purchasedFrom: event.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField  
                        multiline
                        sx={{width: 380 }}
                        label="Notes" 
                        name="notes" 
                        value={pattern.notes || ""}
                        onChange={(event) => setPattern({...pattern, notes: event.target.value})}
                        rows={4}>
                    </TextField>
                </div>
                <br />
                <div className="buttonWrapper">
                    <Button 
                        variant="contained" 
                        type="submit"
                        sx={{background:'#9fdbcd'}}
                    >
                        Save Changes
                    </Button>
                    <Link to={`/patternentry/${id}`}>
                        <Button 
                            variant="contained"
                            sx={{background:'#9fdbcd'}}
                        >
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
            </Box>
        </div>
    );
  };


export default EditPattern;