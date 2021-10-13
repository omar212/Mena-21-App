import './App.scss';
import { Route, Switch as Switching } from "react-router";
import HomePage from './Components/HomePage/HomePage'
import PrettyPage from './Components/PrettyPage/PrettyPage'

import Page1 from './Components/Pages/Page1'
import Page2 from './Components/Pages/Page2'
import Page3 from './Components/Pages/Page3'
import Page4 from './Components/Pages/Page4'
import Page5 from './Components/Pages/Page5'
import Page6 from './Components/Pages/Page6'
import Page7 from './Components/Pages/Page7'
import Page8 from './Components/Pages/Page8'
import Page9 from './Components/Pages/Page9'
import Page10 from './Components/Pages/Page10'
import Page11 from './Components/Pages/Page11'
import Page12 from './Components/Pages/Page12'
import Page13 from './Components/Pages/Page13'
import Page14 from './Components/Pages/Page14'
import Page15 from './Components/Pages/Page15'
import Page16 from './Components/Pages/Page16'
import Page17 from './Components/Pages/Page17'
import Page18 from './Components/Pages/Page18'
import Page19 from './Components/Pages/Page19'
import Page20 from './Components/Pages/Page20'
import Page21 from './Components/Pages/Page21'
import Page22 from './Components/Pages/Page22'

import styled from 'styled-components'
import Header from './Components/Header/Header'
import PlaySound from './Components/MediaPlayer/PlayLoveSound'
import love from './assests/love.mp3'

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <MainContentStyled>
        <PlaySound />
        <Switching>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/pretty" exact>
              <PrettyPage />
            </Route>
            <Route path="/b1" exact>
              <Page1 />
            </Route>
            <Route path="/b2" exact>
              <Page2 />
            </Route>
            <Route path="/b3" exact>
              <Page3 />
            </Route>
            <Route path="/b4" exact>
              <Page4 />
            </Route>
            <Route path="/b5" exact>
              <Page5 />
            </Route>
            <Route path="/b6" exact>
              <Page6 />
            </Route>
            <Route path="/b7" exact>
              <Page7 />
            </Route>
            <Route path="/b8" exact>
              <Page8 />
            </Route>
            <Route path="/b9" exact>
              <Page9 />
            </Route>
            <Route path="/b10" exact>
              <Page10 />
            </Route>
            <Route path="/b11" exact>
              <Page11 />
            </Route>
            <Route path="/b12" exact>
              <Page12 />
            </Route>
            <Route path="/b13" exact>
              <Page13 />
            </Route>
            <Route path="/b14" exact>
              <Page14 />
            </Route>
            <Route path="/b15" exact>
              <Page15 />
            </Route>
            <Route path="/b16" exact>
              <Page16 />
            </Route>
            <Route path="/b17" exact>
              <Page17 />
            </Route>
            <Route path="/b18" exact>
              <Page18 />
            </Route>
            <Route path="/b19" exact>
              <Page19 />
            </Route>
            <Route path="/b20" exact>
              <Page20 />
            </Route>
            <Route path="/b21" exact>
              <Page21 />
            </Route>
            <Route path="/b22" exact>
              <Page22 />
            </Route>
        </Switching>
        </MainContentStyled>
    </div>
  );
}
const MainContentStyled = styled.main` 
    background-image: url("https://unsplash.com/photos/Hli3R6LKibo");
    background-size: cover;
    height:94vh;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`;
export default App;
