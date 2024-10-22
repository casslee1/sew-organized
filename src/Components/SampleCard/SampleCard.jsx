import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import styles from './sampleCard.module.css'

export default function SampleCard() {
    return (
      <div className={styles.sampleCardContainer}>
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
                Sample ID:
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Sample Column Entry:
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
        );
    }