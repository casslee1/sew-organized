import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import styles from './projectCard.module.css'

export default function ProjectCard() {
    return (
      <div className={styles.projectCardContainer}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/projectentry">
            <CardMedia
              component="img"
              height="140"
              image="src/Images/velvetFabric.png"
              alt="fabric"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pattern Company
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Pattern Name or Number
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
        );
    }