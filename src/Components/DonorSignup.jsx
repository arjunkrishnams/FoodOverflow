import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Section = styled.div`
    display : flex;
    justify-content : center;
    width : 100vw;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/bg.jpeg);    
    align-items : center;
    background-size: cover;
`;

const Container = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    justify-content: centre;
    align-items: center;
    width : 50%
`;

const Left = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    align-items : left;
    text-align : left;
    justify-content : center;
`;

const Right = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    background-color : rgba(240, 89, 69, 0.7);
    padding : 2rem 2rem;
    width:70%;
    border-radius : 10px;
`;

const Form = styled.form`
    display : flex;
    flex-direction : column;
    
    gap : 20px;
    margin : 20px 20px;
    input{
        padding : 10px;
        margin : 0px 20px;
        border-radius : 20px;
        border : none;
        gap : 10px;
        background-color : #F5F5F5;

        
    }

    button{
        align-self : center;
        background-color : #5EAAA8;
        color: #fff ;
        cursor : pointer;
        width : 100px;
        gap : 30px;
        border-radius: 20px;
    }
`;

const Title = styled.h1`
    align-self : center;
`;


function NgoSignup() {
        const navigate = useNavigate();
        const handleSubmit = (event) => {
            event.preventDefault(); // Prevent the default form submission behavior
    
            const formData = new FormData(event.target);
            const formDataObj = {}
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            console.log(formDataObj);
         fetch("https://food-overflow-be1.onrender.com/registerDonor", {
             method: "POST",
             headers: {
                "Content-Type": "application/json",
            },
             body:JSON.stringify(formDataObj),
       })
         .then(response => response.json())
         .then(data => {
            console.log(data)
            navigate('/LoginDonor')
        })
         .catch(error => console.error("Error:", error));
    } 


    return (
            <Section>
            <Container>
                <Left>
                
                </Left>
                <Right>
                    <Title>Donor Sign Up</Title>
                    <Form onSubmit={handleSubmit} >
                        <input type="text" name='name' placeholder="Name" />
                        <input type="email" name='email' placeholder="Email" />
                        <input type="password" name='password' placeholder="Password" />
                        <input type="text" name='confirm' placeholder="Confirm Password" />
                        <input type="text" name='phone' placeholder="Contact Number" />
                        <button type= "submit" >Sign Up</button>
                    </Form>
                </Right>
            </Container>
            </Section>
    );
}

export default NgoSignup;
