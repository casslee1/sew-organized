import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../Styles/itemPage.css';

const PatternEntry = () => {
    return (
      <div className='itemEntryWrapper'>
        <div className='topImageWrapper'>
          <img src="src/Images/velvetFabric.png" alt="fabric" />
        </div>
        <div className='listWrapper'>
          <List>
            <ListItem>
              <ListItemText primary="Pattern company: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern number: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern name: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Size range: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern type: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Print or PDF: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern printed: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cut out: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fabric requirements: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Notions required: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Purchase date: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Year released: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="For woven or knit: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Recommended fabric types: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Purchased from: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Notes: " />
            </ListItem>
          </List>
        </div>
      </div>
    );
  };
  
  export default PatternEntry;