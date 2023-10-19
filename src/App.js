import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Card} from "react-bootstrap"
import Button from 'react-bootstrap/Button';



const App=()=>{
  const cardInfo=[
  {
    image: "https://i.insider.com/50f967f56bb3f7830a000019",
    title: "rajesh",
    text: "koi bhi"
  },
  {
    image: "https://i.insider.com/50f967f56bb3f7830a000019",
    title: "kumar",
    text: "wadhwani"
  },
  {
    image: "https://i.insider.com/50f967f56bb3f7830a000019",
    title: "koi bhi",
    text: "wadhwani"
  },
  ];
  const renderCard=(card,index)=>{
    return(
      <Card style={{ width: '18rem' }} key={index} >
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
    )

  }

     return(
      <React.Fragment>
        
      {cardInfo.map(renderCard)}
        </React.Fragment>


     );


};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
 
      
//       </header>
//     </div>
//   );
// }

export default App;
