import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link } from "react-router-dom";

const AddProjects = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      };

    return (
        <div>
            <h1>Add Projects Here</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormLabel>Add image</FormLabel>
                    <TextField 
                        name="projectImage" 
                        type="file" 
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Pattern</FormLabel>
                    {/*dropdown populated from user's patterns with text box if pattern not in stash */}
                </div>
                <br />
                <div>
                    <FormLabel>Fabric</FormLabel>
                    {/*dropdown populated from user's fabrics with text box if fabric not in stash */}
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Project Status</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="planned" name="projectStatus" control={<Radio />} label="Planned" />
                            <FormControlLabel value="inProgress" name="projectStatus" control={<Radio />} label="In Progress" />
                            <FormControlLabel value="completed" name="projectStatus" control={<Radio />} label="Completed" />
                            <FormControlLabel value="onHold" name="projectStatus" control={<Radio />} label="On Hold" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Have all supplies?</FormLabel> {/*If no include way to make list of supplies needed */}
                        <RadioGroup>
                            <FormControlLabel value="yes" name="haveSupplies" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" name="haveSupplies" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormLabel>Deadline</FormLabel>
                    <TextField 
                        type="date"
                        name="deadline"
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Date Started</FormLabel>
                    <TextField 
                        type="date"
                        name="startDate"
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Date Completed</FormLabel>
                    <TextField 
                        type="date"
                        name="completionDate"
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Size made" 
                        name="sizeMade"
                    />
                </div>
                <br />
                <div> {/*Switch type of input, maybe to dropdown, need to sort out how to do metric/imperial selection/switch */}
                    <TextField 
                        type="text" 
                        label="Length of fabric used" 
                        name="lengthOfFabricUsed"
                    />
                </div>
                <br />
                <div>
                    <TextField  
                        multiline
                        label="Fitting Notes" 
                        name="fittingNotes" 
                        rows={4}
                    />
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
                    <Link to="../projects">
                        <Button variant="contained">Cancel</Button>
                    </Link>
                </div>   
            </form>   
        </div>
    );

  };
  
  export default AddProjects;