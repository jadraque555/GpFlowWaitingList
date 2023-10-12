import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const InvestmentCard = ({ id, name, image, selectedIds, handleSelect }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span className='h5'>{name}</span>
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        {selectedIds.includes(id) ? (
          <Button variant='contained' size="small" onClick={() => handleSelect(id)}>Unselect</Button>
        ): (
          <Button size="small" onClick={() => handleSelect(id)}>Select</Button>
        )}
        
      </CardActions>
    </Card>
  );
};

export default InvestmentCard;
