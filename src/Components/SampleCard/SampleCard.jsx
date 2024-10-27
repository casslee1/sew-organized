import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import styles from './sampleCard.module.css'

export default function SampleCard({ userID, sampleColumn}) {
    return (
      <div className={styles.sampleCardContainer}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/sampleentry">
            <CardMedia
              component="img"
              height="140"
              image="src/Images/velvetFabric.png"
              alt="fabric"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                User ID: {userID}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Sample Column Entry: {sampleColumn}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
        );
    }