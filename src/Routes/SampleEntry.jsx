import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../Styles/itemPage.css';

const ProjectEntry = () => {
    return (
      <div className='itemEntryWrapper'>
        <div className='topImageWrapper'>
          <img src="src/Images/velvetFabric.png" alt="fabric" />
        </div>
        <div className='listWrapper'>
          <List>
            <ListItem>
              <ListItemText primary="Sample ID: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sample Column: " />
            </ListItem>
          </List>
        </div>
      </div>
    );
  };
  
  export default ProjectEntry;