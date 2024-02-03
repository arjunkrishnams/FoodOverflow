import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
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
    gap: 10px;
    background-color: #f5f5f5;
    color: black;
  }

  button {
    align-self: center;
    background-color: #5eaaa8;
    cursor: pointer;
    width: 100px;
    gap: 30px;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Donation = () => {
  const [donors, setDonors] = useState([
    {
      name: '',
      serving: '',
      quantity: '',
      expiry: '',
      Address: '',
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
        Address: '',
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
    },
    [donors]
  );

  return (
    <Container>
      <Centre>
        <Title>Donation Details</Title>
        <Form onSubmit={handleSubmit}>
          {donors.map((temp, index) => (
            <Inputs key={index}>
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
                type="text"
                name="expiry"
                placeholder="Expiry"
                value={temp.expiry}
                onChange={(e) => handleInputChange(index, 'expiry', e.target.value)}
                required
              />
            </Inputs>
          ))}
          <button type="button" onClick={handleMultiple}>
            Add more
          </button>
          <input
            type="text"
            name="Address"
            placeholder="Address"
            value={donors[0]['Address']}
            onChange={(e) => handleInputChange(0, 'Address', e.target.value)}
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
          <button type="submit">Donate</button>
        </Form>
      </Centre>
    </Container>
  );
};

export default Donation;
