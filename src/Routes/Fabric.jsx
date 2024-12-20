import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import FabricCard from '../Components/FabricCard/FabricCard';
import { FormControl } from "@mui/material";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
//import TextField from '@mui/material/TextField';
import '../Styles/index.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Fabric = () => {
  const [fabric, setFabric] = useState([]);
  const [filterFabric, setFilterFabric] = useState('');
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilterOption, setSelectedFilterOption] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8080/fabric/get");
          console.log("Fetched fabric data:", response.data);
          setFabric(response.data); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      if (!filterFabric) {
        setFilterOptions([]);
        return;
      }
      try {
        const response = await axios.get(`http://localhost:8080/fabric/options/${filterFabric}`);
        setFilterOptions(response.data);
      }
      catch(error){
        console.error("Error fetching filter options", error);
      }
    };
    fetchFilterOptions();
  }, [filterFabric]);

  useEffect(() => {
    if (selectedFilterOption) {
      const filtered = fabric.filter((item) => 
        item[filterFabric]?.toString().toLowerCase() === selectedFilterOption.toLowerCase()
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults(fabric); 
    }
  }, [selectedFilterOption, fabric, filterFabric]);

    return (
      <div className='background'>
        <div className="navWrapper">
          <NavBar/>
        </div>
        <div className="pageWrapper">
          <div className='addButtonWrapper'>
          <div>
            <Box sx={{ minWidth: 120}}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  sx={{width: 380 }}
                  required                    
                  value={filterFabric}
                  onChange={(event) => setFilterFabric(event.target.value)}                       
                >                    
                  <MenuItem value='length'>Length</MenuItem>
                  <MenuItem value='fibreType'>Fibre Type</MenuItem>
                  <MenuItem value='wovenOrKnit'>Woven or Knit</MenuItem>
                  <MenuItem value='fabricType'>Fabric Type</MenuItem>
                  <MenuItem value='solidOrPrint'>Solid or Print</MenuItem>
                  <MenuItem value='dominantColour'>Dominant Colour</MenuItem>                               
                </Select>
              </FormControl>
            </Box>
          </div>
          <br />
          <div>
          {filterFabric && (
            
              <Box sx={{ minWidth: 120}}>
              <FormControl fullWidth>
                <InputLabel>{`Select ${filterFabric}`}</InputLabel>
                <Select
                  sx={{width: 380 }}
                  required                    
                  value={selectedFilterOption}
                  onChange={(event) => setSelectedFilterOption(event.target.value)}                       
                 > 
                    {filterOptions.map((option) => (
                    <MenuItem key={option.id || option.value} value={option.value}>
                      {option.label || option.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            
            )
          }
          </div>
                
            <Link to="../addfabric">
              <Button variant="contained" sx={{background:'#9fdbcd'}}>Add New Fabric</Button>
            </Link>
          </div>
          <div className='cardWrapper'>
          {filteredResults.map((fabric) => (
            <FabricCard 
                key={fabric.id} 
                id={fabric.id}
                userID={fabric.userID}
                fabricName={fabric.fabricName}
                fabricImage={fabric.fabricImage}
            />
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Fabric;

//   <div>
//   {filterFabric === 'other' && (
//     <div>
//       <TextField 
//         type="text" 
//         label="Other Colour" 
//         name="otherColour"
//         sx={{width: 380 }}
//       />
//     </div>
//   )}
// </div>