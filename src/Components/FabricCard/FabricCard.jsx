import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import styles from './fabricCard.module.css'
import PropTypes from 'prop-types';

export default function FabricCard({ fabricName, fabricImage }) {

  const imageUrl = fabricImage ? `http://localhost:8080/uploads/${fabricImage}` : "src/Images/velvetFabric.png";

    return (
      <div className={styles.fabricCardContainer}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/fabricentry">
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt="fabric"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fabric Name: {fabricName}
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

    FabricCard.propTypes = {
      fabricName: PropTypes.string,
      fabricImage: PropTypes.string
  }
