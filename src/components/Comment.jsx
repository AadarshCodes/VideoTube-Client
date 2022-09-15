import React from 'react'
import styled from "styled-components";
import Logo1 from "../assets/logo.jpg";

const Container = styled.div`
display:flex;
aligh-items:center;
gap:10px;
margin:30px 0px;
`
const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;
`
const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
color:${({ theme }) =>theme.text};
`
const Name = styled.span`
font-size:13px;
font-weight:500;
`
const Date = styled.span`
font-size:12px;
font-weight:400;
color:${({ theme }) =>theme.textSoft};
margin-left:5px;
`
const Text = styled.span`
font-size:14px;
`

const Comment = () => {
  return (
    <Container>
        <Avatar src={Logo1}/>
        <Details>
            <Name>Michel Jackson <Date>1 day ago</Date></Name>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium laboriosam vitae, porro ratione ab delectus culpa sit rerum officia.</Text>
        </Details>
    </Container>
  )
}

export default Comment