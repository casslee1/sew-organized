import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link, useParams, useNavigate } from "react-router-dom";
import '../Styles/entryForm.css';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import axios from "axios";
import {useState, useEffect} from 'react';
import { useContext } from "react";
import { UserContext } from "../Context/UserContext"; 

const EditProject = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { userID } = useContext(UserContext);
    
    const [fabrics, setFabrics] = useState([]);
    const [patterns, setPatterns] = useState([]);
    const [project, setProject] = useState([]);

    const formatDate = (dateString) => {
        if (!dateString) return ""; 
        return dateString.split("T")[0] || dateString.split(" ")[0]; 
    };

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

    useEffect(() => {
        axios.get(`http://localhost:8080/projects/${id}`)
            .then(response => {
                const data = response.data;

                const formattedProject = {
                    ...data,
                    deadline: formatDate(data.deadline),
                    startDate: formatDate(data.startDate),
                    dateCompleted: formatDate(data.dateCompleted), 
                };

                setProject(formattedProject);
    })
            .catch(error => console.error("Error fetching project", error));
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
               
        formData.append("userID", userID);
               

        try {
            const response = await axios.put(`http://localhost:8080/projects/edit/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            navigate(`/projectentry/${id}`);
            console.log(response);
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };
    
    return (
        <div className="entryFormWrapper">
            <h1>Edit a Project</h1>
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
                        value={project.projectName || ""}
                        onChange={(e) => setProject({ ...project, projectName: e.target.value })}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Pattern</FormLabel>
                    <TextField
                        select
                        name="pattern"
                        value={project.pattern || ""}
                        sx={{ width: 380 }}
                        onChange={(event) => setPatterns({...project, pattern: event.target.value})} 
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
                        value={project.fabric || ""}
                        sx={{ width: 380 }}
                        onChange={(event) => setFabrics({...project, fabric: event.target.value})} 
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
                        value={project.projectStatus || ""}
                        onChange={(e) => setProject({...project, projectStatus: e.target.value})}
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
                            value={project.haveAllSupplies || ""}
                            onChange={(e) => setProject({...project, haveAllSupplies: e.target.value})}
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
                        value={project.deadline || ""}
                        onChange={(e) => setProject({...project, deadline: e.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Date Started</FormLabel>
                    <TextField 
                        type="date"
                        name="startDate"
                        value={project.startDate || ""}
                        onChange={(e) => setProject({...project, startDate: e.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Date Completed</FormLabel>
                    <TextField 
                        type="date"
                        name="dateCompleted"
                        value={project.dateCompleted || ""}
                        onChange={(e) => setProject({...project, dateCompleted: e.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Size made" 
                        name="sizeMade"
                        value={project.sizeMade || ""}
                        onChange={(e) => setProject({...project, sizeMade: e.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="text" 
                        label="Length of fabric used" 
                        name="lengthOfFabricUsed"
                        value={project.lengthOfFabricUsed || ""}
                        onChange={(e) => setProject({...project, lengthOfFabricUsed: e.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div> 
                    <TextField 
                        type="text" 
                        label="Thread used" 
                        name="threadUsed"
                        value={project.threadUsed || ""}
                        onChange={(e) => setProject({...project, threadUsed: e.target.value})}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div>
                    <TextField  
                        multiline
                        label="Fitting Notes" 
                        name="fittingNotes" 
                        value={project.fittingNotes || ""}
                        onChange={(e) => setProject({...project, fittingNotes: e.target.value})}
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
                        value={project.notes || ""}
                        onChange={(e) => setProject({...project, notes: e.target.value})}
                        rows={4}
                        sx={{width: 380 }}
                    />
                </div>
                <br />
                <div className="buttonWrapper">
                    <Button variant="contained" type="submit" sx={{background:'#9fdbcd'}}>Save Changes</Button>
                    <Link to={`/projectEntry/${id}`}>
                        <Button variant="contained" sx={{background:'#9fdbcd'}}>Cancel</Button>
                    </Link>
                </div>   
            </form>  
            </Box> 
        </div>
    );
}

export default EditProject;