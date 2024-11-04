import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link } from "react-router-dom";
import '../Styles/entryForm.css';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import axios from "axios";
import {useState} from 'react';

const AddProjects = () => {

    const [projectStatus, setProjectStatus] = useState("");
    const [haveAllSupplies, setHaveAllSupplies] = useState(""); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
               
        formData.append("userID", 1);
        formData.append("pattern", "TBD");
        formData.append("fabric", "TBD");

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
                {/* <div>
                    <FormLabel>Pattern</FormLabel>
                    {/*dropdown populated from user's patterns with text box if pattern not in stash */}
                {/* </div>
                <br />
                <div>
                    <FormLabel>Fabric</FormLabel> */}
                    {/*dropdown populated from user's fabrics with text box if fabric not in stash */}
                {/* </div>
                <br /> */} 
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
                                value="inProgress" 
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
                                value="onHold" 
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