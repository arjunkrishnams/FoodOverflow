import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
// import CustomCard from '@mui/material/CustomCard';


const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items : center;
  height: 100vh;
  background-color: none;
`;


const Container = styled.div`
  display: flex;
  height: 80vh;
  width : 80%;
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
  justify-content :center;
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

const CustomCard = styled.div`
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

const CustomCardNumber = styled.h2`
  font-size: 3rem;
  margin : 0;
  font-family : 'Impact', sans-serif;
`;

const CustomCardHeading = styled.p`
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
  gap: 1rem;
`;
const OuterList = styled.ul`
    display: flex;
    flex-direction: column; 
    background-color: rgba(240, 89, 69, 0.7);
    border-radius: 10px;
    padding: 1rem;
    align-items: center;
    
    li {    
        
    }
`;

const InnerList = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0.2rem;
    margin: 0.2rem;
    background-color: #F7F3E9;
    border-radius: 5px;

    li {
        padding: 0.5rem;
        
    }


`;

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
  
  padding:0.2rem;
`;
const Button = styled.button`

  background-color :#F7F3E9;
  margin : 0.2rem;
  border-radius: 10px;
  cursor:pointer;
  color : #5EAAA8;
`;
const Dashboard = () => {
  const location = useLocation();
  // var noOfActiveDonations=0, noOfPlatesDonated=0, noOfDonations = 0;
  // var name = '';
  const [name, setName] = useState('');
  // var phone = '';
  const [phone, setPhone] = useState('');
  const [noOfActiveDonations, setNoOfActiveDonations] = useState(100);
  const [noOfPlatesDonated, setNoOfPlatesDonated] = useState(100);
  const [noOfDonations, setNoOfDonations] = useState(100);
  const [list, setList] = useState([]);


const DeleteElement = (index,id) => {
    const newList = list.filter((item, i) => i !== index);
    fetch(`http://192.168.1.23:5000/DeleteDonation/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            fetch(`http://192.168.1.23:5000/DashboardNGO/${location.state.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                setNoOfActiveDonations(data.noOfActiveDonations);
                setNoOfDonations(data.noOfDonations);
                setNoOfPlatesDonated(data.noOfPlatesDonated);
                setName(data.name);
                setList(data.foodList);
                setPhone(data.phone);
                console.log("The list is ",list);
              })
              .catch((error) => {
                console.error('Error fetching data:', error);
              });  
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
 
        
        
        };
 
useEffect(() => {
    fetch(`http://192.168.1.23:5000/DashboardNGO/${location.state.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNoOfActiveDonations(data.noOfActiveDonations);
        setNoOfDonations(data.noOfDonations);
        setNoOfPlatesDonated(data.noOfPlatesDonated);
        setName(data.name);
        setList(data.foodList);
        setPhone(data.phone);
        console.log("The list is ",list);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <Section>
      <Container>
        <Panel>
          <Name>{name}</Name>
          <Details>Phone:</Details>
          <Details>{phone}</Details>
          <Details>Email: </Details>
          <Details>{location.state.email}</Details>
        </Panel>
        <Body>
          <Stats>
            <CustomCard>
              <CustomCardNumber>
                <CountUp enableScrollSpy={true} start ={0} end={noOfActiveDonations} duration={5} />
              </CustomCardNumber>
              <CustomCardHeading>Active Donations</CustomCardHeading>
            </CustomCard>
            <CustomCard>
              <CustomCardNumber>
                <CountUp enableScrollSpy={true} start ={0} end={noOfPlatesDonated} duration={5} />
              </CustomCardNumber>
              <CustomCardHeading>Plates Served</CustomCardHeading>
            </CustomCard>
            <CustomCard>
              <CustomCardNumber>
                <CountUp enableScrollSpy={true} start ={0} end={noOfDonations} duration={5} />
              </CustomCardNumber>
              <CustomCardHeading>Total Donations</CustomCardHeading>
            </CustomCard>
          </Stats>
          <Notifications>
          <Notifications>
            {list.map((item, index) => (
                <OuterList key={index}>
                {/* Rendering individual list items */}
                <li>Address: {item.address}</li>
                <li>City: {item.city}</li>
                <li>State: {item.state}</li>
                <li>Phone: {item.phone}</li>
                {/* Mapping over nested items array */}
                <li>
                    {item.items.map((nestedItem, nestedIndex) => (
                    <InnerList key={nestedIndex}>
                        <li>{nestedItem.name}</li>
                        <li>{nestedItem.quantity} kg</li>
                        <li>{nestedItem.serving} servings</li>
                        <li>DOE: {nestedItem.expiry}</li>
                    </InnerList>
                    ))}
                </li>
                <Button onClick={() =>{DeleteElement(index,item.id)}}>Accept</Button>
                </OuterList>
            ))}
            </Notifications>

          </Notifications>
        </Body>
      </Container>
    </Section>
  );
};

export default Dashboard;
