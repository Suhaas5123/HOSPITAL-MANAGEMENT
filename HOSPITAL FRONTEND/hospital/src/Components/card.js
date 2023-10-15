// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// export default function BasicCard(props) {
//   const navigate=useNavigate();
//   return (
//     <Card sx={{ maxWidth: 345}}>
//       <CardActionArea>
//         <CardMedia>
//         <img src={props.picture} alt="" style={{height:'200px',width:'350px'}}/>
//           {console.log(props)}
//         </CardMedia>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {props.card.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {props.card.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" onClick={()=>{navigate(props.card.link)}}>
//             Click
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }