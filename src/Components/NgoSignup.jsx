import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Section = styled.div`
    display : flex;
    justify-content : center;
    width : 100vw;
    height : 100vh;
    align-items : center;
    background-image: url(${process.env.PUBLIC_URL}/bg.jpeg);
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
    font-size : 2rem;
    color : 00;
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
         fetch("http://192.168.1.23:5000/registerNGO", {
             method: "POST",
             headers: {
                "Content-Type": "application/json",
            },
             body:JSON.stringify(formDataObj),
       })
         .then(response => response.json())
         .then(data => {
            console.log(data)
            navigate('/LoginNGO')
        })
         .catch(error => console.error("Error:", error));
    } 


    return (
            <Section>
            <Container>
                <Left>
                
                </Left>
                <Right>
                    <Title>NGO Sign Up</Title>
                    <Form onSubmit={handleSubmit} >
                        <input type="text" name='name' placeholder="Name" />
                        <input type="text" name='email' placeholder="Email" />
                        <input type="text" name='password' placeholder="Password" />
                        <input type="text" name='confirm' placeholder="Confirm Password" />
                        <input type="text" name='address' placeholder="Address" />
                        <input type="text" name='city' placeholder="City" />
                        <input type="text" name='pincode' placeholder="Pincode" />
                        <input type="text" name='state' placeholder="State" />
                        <input type="text" name='country' placeholder="Country" />
                        <input type="text" name='phone' placeholder="Contact Number" />
                        <button type= "submit" >Sign Up</button>
                    </Form>
                </Right>
            </Container>
            </Section>
    );
}

export default NgoSignup;
