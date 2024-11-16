import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link } from "react-router-dom";
import '../Styles/entryForm.css';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import axios from "axios";
import {useState, useEffect} from 'react';

const AddProjects = () => {

    const [projectStatus, setProjectStatus] = useState("");
    const [haveAllSupplies, setHaveAllSupplies] = useState(""); 
    const [fabrics, setFabrics] = useState([]);
    const [selectedFabric, setSelectedFabric] = useState("");
    const [patterns, setPatterns] = useState([]);
    const [selectedPattern, setSelectedPattern] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/fabric/getFabricName")
        .then(response => setFabrics(response.data))
        .catch(error => console.error("Error fetching fabrics", error));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/patterns/getPatternName")
        .then(response => setPatterns(response.data))
        .catch(error => console.error("Error fetching fabrics", error));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
               
        formData.append("userID", 1);
               
        const entryDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        formData.append("entryDate", entryDate)

        try {
            const response = await axios.put("http://localhost:8080/projects/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            console.log(response);
        } catch (error) {
            console.error("Error uploading fabric:", error);
        }
        event.target.reset();
        setProjectStatus("");
        setHaveAllSupplies("");
        setSelectedFabric("");
        setSelectedPattern("");
    };

    return (
        <div className="entryFormWrapper">
            <h1>Add a Project</h1>
            <Box sx={{ p: 2, border: '1px solid grey', bgcolor: '#faf7f0' }}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <FormLabel>Add image</FormLabel>
                    <TextField 
                        name="projectImage" 
                        type="file" 
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Project name" 
                        name="projectName"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Pattern</FormLabel>
                    <TextField
                        select
                        name="pattern"
                        value={selectedPattern}
                        sx={{ width: 380 }}
                        onChange={(event) => setSelectedPattern(event.target.value)} 
                    >
                       <MenuItem value="">
                                <em>Select a fabric</em>
                            </MenuItem>
                            {patterns.map((pattern, index) => (
                                <MenuItem key={index} value={pattern.patternName}>
                                    {pattern.patternName}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                <br />
                <div>
                    <FormLabel>Fabric</FormLabel>
                    <TextField
                        select
                        name="fabric"
                        value={selectedFabric}
                        sx={{ width: 380 }}
                        onChange={(event) => setSelectedFabric(event.target.value)} 
                    >
                       <MenuItem value="">
                                <em>Select a fabric</em>
                            </MenuItem>
                            {fabrics.map((fabric, index) => (
                                <MenuItem key={index} value={fabric.fabricName}>
                                    {fabric.fabricName}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Project Status</FormLabel>
                        <RadioGroup 
                        value = {projectStatus}
                        onChange={(e) => setProjectStatus(e.target.value)}
                        >
                        <Grid container rowSpacing={1} columnSpacing={6}>
                        <Grid container xs={6} direction="column" >
                            <FormControlLabel 
                                value="planned" 
                                name="projectStatus" 
                                control={<Radio />} 
                                label="Planned" 
                            />
                            <FormControlLabel 
                                value="in progress" 
                                name="projectStatus" 
                                control={<Radio />} 
                                label="In Progress" 
                            />
                            </Grid>
                            <Grid container xs={6} direction="column" >
                            <FormControlLabel 
                                value="completed" 
                                name="projectStatus" 
                                control={<Radio />} 
                                label="Completed" 
                            />
                            <FormControlLabel 
                                value="on hold" 
                                name="projectStatus" 
                                control={<Radio />} 
                                label="On Hold" 
                            />
                            </Grid>
                        </Grid>
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Have all supplies?</FormLabel> {/*If no include way to make list of supplies needed */}
                        <RadioGroup
                            value = {haveAllSupplies}
                            onChange={(e) => setHaveAllSupplies(e.target.value)}
                        >
                            <FormControlLabel 
                                value="yes" 
                                name="haveAllSupplies" 
                                control={<Radio />} 
                                label="Yes" 
                            />
                            <FormControlLabel 
                                value="no" 
                                name="haveAllSupplies" 
                                control={<Radio />} 
                                label="No" 
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormLabel>Deadline</FormLabel>
                    <TextField 
                        type="date"
                        name="deadline"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Date Started</FormLabel>
                    <TextField 
                        type="date"
                        name="startDate"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Date Completed</FormLabel>
                    <TextField 
                        type="date"
                        name="dateCompleted"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Size made" 
                        name="sizeMade"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="text" 
                        label="Length of fabric used" 
                        name="lengthOfFabricUsed"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div> 
                    <TextField 
                        type="text" 
                        label="Thread used" 
                        name="threadUsed"
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField  
                        multiline
                        label="Fitting Notes" 
                        name="fittingNotes" 
                        rows={4}
                        sx={{width: 380 }}
                    />
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
                    <Link to="../projects">
                        <Button variant="contained" sx={{background:'#9fdbcd'}}>Cancel</Button>
                    </Link>
                </div>   
            </form>  
            </Box> 
        </div>
    );

  };
  
  export default AddProjects;