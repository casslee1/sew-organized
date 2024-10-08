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
              <ListItemText primary="Project name: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fabric: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Project status: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Have all supplies: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Deadline: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date started: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date completed: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Size: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Length of fabric used: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Thread used: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fitting notes: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Notes: " />
            </ListItem>
          </List>
        </div>
      </div>
    );
  };
  
  export default ProjectEntry;