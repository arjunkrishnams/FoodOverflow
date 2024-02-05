import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #5EAAA8;
  background-size: cover;
  // background-image: url(${process.env.PUBLIC_URL}/bg1.jpeg);
  height: 100vh;
`;

const Centre = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #F7F3E9;
`;
const Inputsmall = styled.div`
    display: flex;

`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 10px;
    margin: 0px 20px;
    border-radius: 5px;
    border: none;
    width : 50%;
    align-self: center;
    gap: 10px;
    background-color: #f5f5f5;
    color: black;
  }

  button {
    align-self: center;
    background-color: #F05945;
    color: #F7F3E9;
    cursor: pointer;
    gap: 30px;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Donation = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log(location.state.id);
  const [donors, setDonors] = useState([
    {
      name: '',
      serving: '',
      quantity: '',
      expiry: '',
      address: '',
      city: '',
      pincode: '',
      state: '',
      country: '',
      phone: '',
    },
  ]);

  const handleInputChange = useCallback(
    (index, name, value) => {
      setDonors((prevDonors) => {
        const newDonors = [...prevDonors];
        newDonors[index][name] = value;
        return newDonors;
      });
    },
    []
  );

  const handleMultiple = useCallback(() => {
    setDonors((prevDonors) => [
      ...prevDonors,
      {
        name: '',
        serving: '',
        quantity: '',
        expiry: '',
        address: '',
        city: '',
        pincode: '',
        state: '',
        country: '',
        phone: '',
      },
    ]);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      console.log(donors);

      fetch(`https://food-overflow-be1.onrender.com/addDonation/${location.state.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data : donors,id:location.state.id }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          navigate('/DashboardDonor',{state: {id: location.state.id}})
        })
        .catch((error) => console.error('Error:', error));
    },
    [donors]
  );

  return (
    <Container>
      <Centre>
        <Title>Donation Details</Title>
        <Form onSubmit={handleSubmit}>
          {donors.map((temp, index) => (
            <Inputsmall key={index}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={temp.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                required
              />
              <input
                type="text"
                name="serving"
                placeholder="Serving"
                value={temp.serving}
                onChange={(e) => handleInputChange(index, 'serving', e.target.value)}
                required
              />
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={temp.quantity}
                onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                required
              />
              <input
                type="date"
                name="expiry"
                placeholder="Expiry"
                value={temp.expiry}
                onChange={(e) => handleInputChange(index, 'expiry', e.target.value)}
                required
              />
            </Inputsmall>
          ))}
          <button type="button" onClick={handleMultiple}>
            +
          </button>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={donors[0]['address']}
            onChange={(e) => handleInputChange(0, 'address', e.target.value)}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={donors[0]['city']}
            onChange={(e) => handleInputChange(0, 'city', e.target.value)}
            required
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={donors[0]['pincode']}
            onChange={(e) => handleInputChange(0, 'pincode', e.target.value)}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={donors[0]['state']}
            onChange={(e) => handleInputChange(0, 'state', e.target.value)}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={donors[0]['country']}
            onChange={(e) => handleInputChange(0, 'country', e.target.value)}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={donors[0]['phone']}
            onChange={(e) => handleInputChange(0, 'phone', e.target.value)}
            required
          />
          <button type="submit" >Donate</button>
        </Form>
      </Centre>
    </Container>
  );
};

export default Donation;
