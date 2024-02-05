import React, {useState} from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';

const Section = styled.div`
  display: flex;
  justify-content: center;
  background-color: none;
  align-items: center;
  height : 100vh;


`;


const Container = styled.div`
  display: flex;
  height: 90vh;
  width: 80%;
  min-height: 90vh;
  background-color: #a3d2ca;
  margin : 0;
  border-radius : 10px;
`;

const Panel = styled.div`
  flex: 1;
  background-color: #5eaaa8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

const Name = styled.h1`
  margin-top: 50px;
  font-size: 2rem;
  font-family : 'Georgia', serif;
  margin-bottom: 10px;
  color: #2b2b2b;
  text-align: left;
`;

const Details = styled.p`
  font-size: 1rem;
  color: #fff; /* White text color */
  text-align: left;
`;
const Body = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background-color: #a3d2ca;
  border-radius: 10px;

`;

const Stats = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
`;

const Card = styled.div`
  flex: 1;
  background-color: rgba(240, 89, 69, 0.7); /* More transparent red */
  border-radius: 10px;
  margin-left: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardNumber = styled.h2`
  font-size: 3rem;
  margin : 0;
  font-family : 'Impact', sans-serif;
`;

const CardHeading = styled.p`
  font-size: 1rem;
  color: #fff; /* White text color */
`;

const Notifications = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;

  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
// const Button = styled.button`
//    flex: 0.5;
//     align-self: center;
//     background-color: #f05945;
//     color: #f7f3e9;
//     cursor: pointer;
//     padding: 10px 20px;
//     border-radius: 5px;
//     border: none;

//   `;
const NotificationName = styled.h2`
  margin-top: 20px;
  font-size: 2rem;
  font-family : 'Georgia', serif;
  margin-bottom: 10px;
  color: #2b2b2b;
  text-align: left;
`;

const Notification = styled.p`
  background-color: #f0f0f0;
  color : #2b2b2b;
  text-align : left;
  padding: 20px;
`;

const Button = styled.button`

  background-color : #fff;
  align-self : end;
  margin : 0.5rem;
  border-radius: 10px;
  cursor:pointer;
`;
const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // var noOfActiveDonations=0, noOfPlatesDonated=0, noOfDonations = 0;
  // var name = '';
  const [name, setName] = useState('');

  
  // var phone = '';
  const [phone, setPhone] = useState('');
  const [noOfActiveDonations, setNoOfActiveDonations] = useState(100);
  const [noOfPlatesDonated, setNoOfPlatesDonated] = useState(100);
  const [noOfDonations, setNoOfDonations] = useState(100);

  fetch(`https://food-overflow-be1.onrender.com/DashboardDonor/${location.state.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // noOfActiveDonations = data.noOfActiveDonations;
      // noOfPlatesDonated = data.noOfPlatesDonated;
      // noOfDonations = data.noOfDonations;
      setNoOfActiveDonations(data.noOfActiveDonations);
      setNoOfDonations(data.noOfDonations);
      setNoOfPlatesDonated(data.noOfPlatesDonated);
      setName(data.name);
      // phone = data.phone; 
      setPhone(data.phone);
      console.log(name);

     
    });
  return (
    <Section>
      <Container>
        <Panel>
          <Name>{name}</Name>
          <Details>{phone}</Details>
          <Details>{location.state.email}</Details>
        </Panel>
        <Body>
          <Stats>
            <Card>
              <CardNumber>
                <CountUp enableScrollSpy={true} start ={0} end={noOfActiveDonations} duration={5} />
              </CardNumber>
              <CardHeading>Active Donations</CardHeading>
            </Card>
            <Card>
              <CardNumber>
                <CountUp enableScrollSpy={true} start ={0} end={noOfPlatesDonated} duration={5} />
              </CardNumber>
              <CardHeading>Plates Served</CardHeading>
            </Card>
            <Card>
              <CardNumber>
                <CountUp enableScrollSpy={true} start ={0} end={noOfDonations} duration={5} />
              </CardNumber>
              <CardHeading>Total Donations</CardHeading>
            </Card>
          </Stats>
          <Notifications>

          </Notifications>
          <Button onClick={() => navigate('/Donation', { state: { id: location.state.id } })}>
            Donate
          </Button>
        </Body>
      </Container>
    </Section>
  );
};

export default Dashboard;
