import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";

export default function FabricCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to="/fabricentry">
          <CardMedia
            component="img"
            height="140"
            image="src/Images/velvetFabric.png"
            alt="fabric"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fabric Entry
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              This is a fabric entry
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        );
    }