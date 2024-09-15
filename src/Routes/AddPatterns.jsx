import { FormControl, FormLabel} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';	
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Link } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


const AddPatterns = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      };

    return (
        <div>
            <h1>Add Patterns Here</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormLabel>Add image</FormLabel>
                    <TextField 
                        name="patternImage" 
                        type="file" 
                    />
                </div>
                <br />
                <div>
                   <TextField 
                        type="text" 
                        label="Pattern Company" 
                        name="patternCompany"
                   />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Pattern Number" 
                        name="patternNumber"
                    />
                </div>
                <br />
                <div>
                    <TextField 
                    type="text" 
                    label="Pattern Name" 
                    name="patternName"
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Size Range" 
                        name="sizeRange"
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Garment Type</FormLabel>
                    <FormGroup> {/*When other is selected need text box to pop up*/}
                        <FormControlLabel control={<Checkbox />} label="Top" value="top" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Skirt" value="skirt" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Dress" value="dress" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Trousers" value="trousers" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Shorts" value="shorts" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Jumpsuit" value="jumpsuit" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Outerwear" value="outerwear" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Swimwear" value="swimwear" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Under Garments" value="underGarments" name="garmentType"/>
                        <FormControlLabel control={<Checkbox />} label="Other" value="other" name="garmentType"/>
                    </FormGroup>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Print or PDF?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="print" name="printOrPDF" control={<Radio />} label="Print" />
                            <FormControlLabel value="PDF" name="printOrPDF" control={<Radio />} label="PDF" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Is PDF printed?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="printed" name="isPDFPrinted" control={<Radio />} label="Yes" />
                            <FormControlLabel value="not printed" name="isPDFPrinted" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>Cut out?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="cut out" name="cutOut" control={<Radio />} label="Yes" />
                            <FormControlLabel value="not cut out" name="cutOut" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Size cut out?"
                        name="sizeCutOut"
                    />
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Fabric Requirements" 
                        name="fabricRequirements"
                    />{/*Switch to dropdown menu*/}
                </div>
                <br />
                <div>
                    <TextField 
                        type="text" 
                        label="Notions Required" 
                        name="notionsRequired"
                    />
                </div>
                <br />
                <div>
                    <FormLabel>Purchase Date</FormLabel>
                    <TextField 
                        type="date" 
                        name="purchaseDate"
                    />
                </div>
                <br />
                <div>
                    {/*Maybe switch to dropdown menu*/}
                    <TextField 
                        type="text" 
                        label="Year Released" 
                        name="yearReleased"
                    />
                </div>
                <br />
                <div>
                    <FormControl>
                        <FormLabel>For woven or knit?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="woven" name="forWovenOrKnit" control={<Radio />} label="Woven" />
                            <FormControlLabel value="knit" name="forWovenOrKnit" control={<Radio />} label="Knit" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                <div>
                    {/*Maybe switch to dropdown menu*/}
                    <TextField 
                        type="text" 
                        label="Recommended fabric types" 
                        name="recommendedFabricTypes"
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
                        multiline
                        label="Notes" 
                        name="notes" 
                        rows={4}>
                    </TextField>
                </div>
                <br />
                <div>
                    <Button 
                        variant="contained" 
                        type="submit"
                    >
                        Submit
                    </Button>
                    <br />
                    <br />
                    <Link to="../patterns">
                        <Button 
                            variant="contained"
                        >
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
  };
  
  export default AddPatterns;