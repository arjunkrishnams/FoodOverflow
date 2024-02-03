import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display : flex;
    justify-content : center;
    width : 80vw;
    `;

const Container = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%
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
    background-color : #F05945;
    padding : 20px 50px;
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
        border-radius : 5px;
        border : none;
        gap : 10px;
        background-color : #F5F5F5;
    }

    button{
        align-self : center;
        background-color : #5EAAA8;
        cursor : pointer;
        width : 100px;
        gap : 30px;
    }
`;
function NgoSignup() {
        const handleSubmit = (event) => {
            event.preventDefault(); // Prevent the default form submission behavior
    
            const formData = new FormData(event.target);
            const formDataObj = {}
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            console.log(formDataObj);
         fetch("http://192.168.1.22:5000/registerNGO", {
             method: "POST",
             headers: {
                "Content-Type": "application/json",
            },
             body:JSON.stringify(formDataObj),
       })
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.error("Error:", error));
    } 


    return (
            <Section>
            <Container>
                <Left>
                <h2>NGO Sign Up</h2>
                </Left>
                <Right>
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
