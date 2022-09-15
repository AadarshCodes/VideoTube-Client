import Logo from "../assets/adarsh (2).jpg";
import Logo1 from "../assets/logo.jpg";
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
width:${(props) => props.type !== "sm" && "320px"};
margin-bottom:${(props) => props.type === "sm" ? "10px" : "45px"};
cursor:pointer;
display:${(props) => props.type === "sm" && "flex"};
gap:10px;
`
const Image = styled.img`
width:100%;
height:${(props) => props.type === "sm" ? "120px" : "200px"};
background-color:#999;
`
const Details = styled.div`
display:flex;
margin-top:${(props) => props.type !== "sm" && "16px"};
gap:0.8rem;

`
const ChannelImage = styled.img`
width:2.1rem;
height:2.1rem;
border-radius:50%;
background-color:#999;
display:${(props) => props.type === "sm" && "none"};
`
const Texts = styled.div``
const Title = styled.h1`
font-size:16px;
font-weight:500;
color:${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
font-size:14px;
color:${({ theme }) => theme.textSoft};
margin:9px 0px;
`
const Info = styled.div`
font-size:14px;
color:${({ theme }) => theme.textSoft};
`

const Card = ({type}) => {
  return (
    <Link to="/video/path" style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image src={Logo}  type={type}/>
        <Details  type={type}>
          <ChannelImage  type={type} src={Logo1}/>
          <Texts>
            <Title>
              adarsh
            </Title>
            <ChannelName>React tute</ChannelName>
            <Info>556.55.64 views * 1 day ago</Info>
          </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card