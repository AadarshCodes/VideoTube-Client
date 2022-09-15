import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Container = styled.div`
position:sticky;
top:0;
background:${({ theme }) => theme.bgLighter};
height:3.5rem;
z-index:1;
`
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
height:100%;
padding:0px 1rem;
position:relative;
`
const Search = styled.div`
width:50%;
position:absolute;
left:0;
right:0;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border:1px solid #ccc;
border-radius:3px;
height:2rem;
padding:18px;
margin-top:10px;
`
const Input = styled.input`
border:none;
background-color:transparent;
width:93%;
outline:none;
padding:8px 0px;
input:hover{
  border:none;
}
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

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
         <Input placeholder="Search"/>
         <AiOutlineSearch/>
        </Search>
        <Button>
          <BiUserCircle />
          SIGN IN
          </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar