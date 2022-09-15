
import styled from "styled-components";
// import Video1 from "../assets/video.mp4"
import {TiThumbsUp} from "react-icons/ti"
import {TiThumbsDown} from "react-icons/ti"
import {RiShareForwardLine} from "react-icons/ri"
import {MdDataSaverOn} from "react-icons/md"
import {BsThreeDots} from "react-icons/bs"
import Logo1 from "../assets/logo.jpg";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
display:flex;
gap:1.5rem;
background-color:${({ theme }) =>theme.bg};
`
const Content = styled.div`
flex:5;
`
const VideoWrapper = styled.div`
background-color:#181818;
`
const Title = styled.h1`
font-size:1.1rem;
font-weight:400;
margin-top:1rem;
margin-bottom:0.6rem;
color:${({ theme }) =>theme.text};
`
const Details = styled.div`
display: flex;
    text-align: center;
    justify-content: space-between;

`
const Info = styled.span`
color:${({ theme }) =>theme.textSoft};
`
const Buttons = styled.div`
display:flex;
gap:1.2rem;
color:${({ theme }) =>theme.text};
font-size:14px;
cursor:pointer;
`
const Button = styled.div`
display:flex;
align-items:center;
gap:3px;
`
const Recommendation = styled.div`
flex:2;
`
const Hr = styled.hr`
color:${({ theme }) =>theme.soft};
margin-top:15px;
`
const Channel = styled.div`
display:flex;
justify-content:space-between;
margin-top:25px;
`
const ChannelInfo = styled.div`
display:flex;
gap:20px;
`
const Image = styled.img`
width:50px;
height:50px;
border-radius:50%;
`
const ChannelDetail = styled.span`
display:flex;
flex-direction:column;
color:${({ theme }) =>theme.text};
`
const ChannelName = styled.span`
font-weight:600;
margin-top:3px;
`
const ChannelCounter = styled.div`
margin-top:5px;
margin-bottom:20px;
color:${({ theme }) =>theme.textSoft};
font-size:12px;
`
const Description = styled.div`
font-size:14px;
`
const Subscribe = styled.button`
background-color:#cc1a00;
font-weight:500;
color:#fff;
border:none;
border-radius:3px;
height:max-content;
padding:10px 20px;
cursor:pointer;
`
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe 
          width="100%"
          height="450"
          // src={Video1}
          title="you tube video player"
          frameBorder={0}
          allow="acceleration; autoplay; clipboard-write; encrepted-media; gyroscope; picture-in-picture"
          allowFullScreen
          >
          </iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>5,258,36 views * jun 22, 2022</Info>
          <Buttons>
            <Button>
              <TiThumbsUp style={{fontSize:"25px"}}/> 125
            </Button>
            <Button>
              <TiThumbsDown style={{fontSize:"25px"}}/> DISLIKE
            </Button>
            <Button>
              <RiShareForwardLine style={{fontSize:"25px"}}/> SHARE
            </Button>
            <Button>
              <MdDataSaverOn style={{fontSize:"25px"}}/> SAVE
            </Button>
            <Button>
              <BsThreeDots style={{fontSize:"25px"}}/> 
            </Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src={Logo1}/>
            <ChannelDetail>
              <ChannelName>React tute</ChannelName>
              <ChannelName>500k subscribe</ChannelName>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore porro sapiente vitae! Beatae maiores ex, optio dolores laboriosam voluptates a quibusdam distinctio accusamus quia est consectetur voluptas, aliquid officiis.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video