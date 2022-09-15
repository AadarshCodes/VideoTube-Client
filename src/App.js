import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu"
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./utils/Theme";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signup from "./pages/Signup";


const Container = styled.div`
display:flex;
`
const Main = styled.div`
flex:7;
background-color:${({theme}) => theme.bg};
`
const Wrapper = styled.div`
padding:22px 30px;
`
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme }>
    <Container>
      <BrowserRouter>
     <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
     <Main>
       <Navbar/>
       <Wrapper>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/video" element={<Home/>} />
            <Route exact path="/Video/:id" element={<Video/>} />
            <Route path="/login" element={<Signup/>} />
        </Routes>
       </Wrapper>
     </Main>
     </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
