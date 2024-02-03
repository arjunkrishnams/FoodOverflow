import React from "react";
import styled from 'styled-components';

const Section = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    right : 0;

    display : flex;
    justify-content : center;
    `;

const Container = styled.div`
width : 100%;
display : flex;
justify-content : space-between;
padding : 20px 0;
`;
const Links = styled.div`
display : flex;
align-items : center;
`;
const Logo = styled.img`
height : 50px;
`;
const List = styled.ul`
    display : flex;
    gap : 20px;
    list-style : none;
    cursor : pointer;
`;
const ListItem = styled.li`

`;
const Icons = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`;
const Icon = styled.img`
    height : 30px;
    cursor : pointer;
`;
const Button = styled.button`
    width : 100px;
    color : white;
    background : #2B2B2B;
    padding :10px;
    border : none;
    border-radius : 20px;
    cursor : pointer;
`;
const Navbar = () => {
    return(
        <Section>
            <Container>
                <Links>
                    <Logo src="./images/logo.png" alt="Hi"/>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Who</ListItem>
                        <ListItem>What</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./images/search.png" alt="Hi"/>
                    <Button >Contact now</Button>
                </Icons>
            </Container>
        </Section>
    )
    }

export default Navbar;