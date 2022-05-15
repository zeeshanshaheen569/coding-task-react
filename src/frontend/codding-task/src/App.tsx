import { useState } from 'react';
import './App.css';
import Button from "./Components/Button/CustomButton";
import DonationList from './Module/Donations/DonationList';
import CreateDonations from './Module/Donations/Create/CreateDonations';
import { Col, Container,Row } from 'react-bootstrap';

const  App = ()=> {
  const [showAddDonation,setShowAddDonation]=useState(false);
  const [toggleDonationList,settoggleDonationList] = useState(false);

  return (
    <div className="App">
      <Container>
        <Row>

        <Col xl={10}>
        <DonationList refreshDonationList={toggleDonationList}/>
        </Col>
        <Col xl={2}>
        <Button 
        border="none"
        color="#4CAF50"
        height = "40px"
        onClick={() => setShowAddDonation(true)}
        radius = "10%"
        width = "90px"
        children = "Add Item"
      />
        </Col>
        </Row>

      </Container>
     
      {
        showAddDonation &&
        <CreateDonations  
          showModal = {showAddDonation} 
          handleHide = {(hide:boolean)=>{
              console.log("hide called",hide);
              setShowAddDonation(hide)
          }}
          onSuccess = {()=>{console.log("sad");settoggleDonationList(!toggleDonationList)}}
          />
      }
        
    </div>
  );
}

export default App;
