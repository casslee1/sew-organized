import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import styles from './projectCard.module.css'
import PropTypes from 'prop-types';

export default function ProjectCard({ projectName, projectImage }) {

  const imageUrl = projectImage ? `http://localhost:8080/uploads/${projectImage}` : "src/Images/velvetFabric.png";

    return (
      <div className={styles.projectCardContainer}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/projectentry">
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt="fabric"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project Name: {projectName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                TBD
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
        );
    }

    ProjectCard.propTypes = {
      projectName: PropTypes.string,
      projectImage: PropTypes.string,
    }