import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
// import Card from '@mui/material/Card';

const Section = styled.div`
  display: flex;
  justify-content: center;
  background-color: none;


`;

const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 100%;
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

const Dashboard = () => {
  var num = 1234;
  return (
    <Section>
      <Container>
        <Panel>
          <Name>Arjun Krishna</Name>
          <Details>12445664798</Details>
        </Panel>
        <Body>
          <Stats>
            <Card>
              <CardNumber>42</CardNumber>
              <CardHeading>Items</CardHeading>
            </Card>
            <Card>
              <CardNumber>
                <CountUp enableScrollSpy={true} start ={1} end={num} duration={5} />
              </CardNumber>
              <CardHeading>Count</CardHeading>
            </Card>
            <Card>
              <CardNumber>123</CardNumber>
              <CardHeading>Units</CardHeading>
            </Card>
          </Stats>
          <Notifications>
            <NotificationName>Notifications</NotificationName>
            <Notification>Lorem Inpsum</Notification>
            <Notification>LoremIpsum</Notification>
          </Notifications>
        </Body>
      </Container>
    </Section>
  );
};

export default Dashboard;
