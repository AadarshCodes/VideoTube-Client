import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io"
import { AiFillHome } from "react-icons/ai"
import { MdOutlineExplore } from "react-icons/md"
import { MdSubscriptions } from "react-icons/md"
import { MdOutlineLibraryBooks } from "react-icons/md"
import { RiHistoryFill } from "react-icons/ri"
import { MdMusicVideo } from "react-icons/md"
import { MdOutlineSportsBasketball } from "react-icons/md"
import { IoLogoGameControllerB } from "react-icons/io"
import { MdOutlineMovie } from "react-icons/md"
import { ImNewspaper } from "react-icons/im"
import { MdLiveTv } from "react-icons/md"
import { AiFillSetting } from "react-icons/ai"
import { VscReport } from "react-icons/vsc"
import { BiHelpCircle } from "react-icons/bi"
import { MdSettingsBrightness } from "react-icons/md"
import { BiUserCircle } from "react-icons/bi"
import { GoThreeBars } from "react-icons/go"


const Container = styled.div`
  flex:1.5;
  background-color:${({ theme }) => theme.bg};
  color:${({ theme }) => theme.text};
  height:100vh;
  font-size:0.9rem;
  position:sticky;
  top:0;
  overflow-x:scroll;

`
const Wrapper = styled.div`
  padding:1.1rem 1.8rem;
  margin-top:4rem;
`
const Logo = styled.div`
display:flex;
top:0.3rem;
align-items:center;
gap:5px;
font-weight:bold;
font-size:20px;
padding:15px 30px;
margin-bottom:20px;
box-shadow:aliceblue ;

position:fixed;
background:${({ theme }) => theme.bgLighter};
.drawer{
  font-size:30px;
  color:${({ theme }) => theme.drawer};
  margin-right: 5px;
  cursor:pointer;
}

`
const Image = styled.div`
display:flex;
gap:0.6rem;
.logo{
    font-size:1.4rem;
    color:red;
}
`
const TitleHead = styled.h1`
font-size:18px;
`
const Item = styled.div`
display:flex;
align-items:center;
gap:1.2rem;
cursor:pointer;
padding:5px;
margin-bottom:0.6rem;
 &:hover{
  background-color:${({ theme }) => theme.textSoft};
 }
`;
const Hr = styled.hr`
margin:15px 0px;
border:0.5px solid ${({ theme }) => theme.soft};
`
const LogIn = styled.div`

`
const Button = styled.div`
padding:5px 15px;
background-color:trtansparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
width:max-content;
height:2rem;
padding:18px;
display:flex;
justify-content:center;
gap:2px;
align-items:center;
`
const Title = styled.h2`
 font-size:14px;
 color:#aaaaaa;
 font-weight:500;
margin-bottom:20px;
 `

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Logo>
        <GoThreeBars className="drawer" />
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Image>
            <IoLogoYoutube className="logo" />
            <TitleHead> VideoTube</TitleHead>
          </Image>
        </Link>
      </Logo>
      <Wrapper>
        <Item>
          <AiFillHome />
          home
        </Item>
        <Item>
          <MdOutlineExplore />
          Explore
        </Item>
        <Item>
          <MdSubscriptions />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <MdOutlineLibraryBooks />
          Library
        </Item>
        <Item>
          <RiHistoryFill />
          History
        </Item>
        <Hr />
        <LogIn>
          Sign in to like videos, comments, and subscribe.
          <Button><BiUserCircle />SIGN IN</Button>
        </LogIn>
        <Hr />
        <Title>
          Best of VideoTube
        </Title>
        <Item>
          <MdMusicVideo />
          Music
        </Item>
        <Item>
          <MdOutlineSportsBasketball />
          Sports
        </Item>
        <Item>
          <IoLogoGameControllerB />
          Gaming
        </Item>
        <Item>
          <MdOutlineMovie />
          Movies
        </Item>
        <Item>
          <ImNewspaper />
          News
        </Item>
        <Item>
          <MdLiveTv />
          Live
        </Item>
        <Hr />
        <Item>
          <AiFillSetting />
          Settings
        </Item>
        <Item>
          <VscReport />
          Report
        </Item>
        <Item>
          <BiHelpCircle />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <MdSettingsBrightness />
          Light mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu    