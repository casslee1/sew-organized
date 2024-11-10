import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import styles from './patternCard.module.css'
import PropTypes from 'prop-types';

export default function PatternCard({ id, patternName, patternImage }) {

  const imageUrl = patternImage ? `http://localhost:8080/uploads/${patternImage}` : "src/Images/velvetFabric.png";

    return (
      <div className={styles.patternCardContainer}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to={`/patternentry/${id}`}>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt="pattern"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pattern Company
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Pattern Name or Number: {patternName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
        );
    }
    
    PatternCard.propTypes = {
      id: PropTypes.number.isRequired,
      patternName: PropTypes.string,
      patternImage: PropTypes.string
  }
