import './App.scss';
import { Route, Switch as Switching } from "react-router";
import HomePage from './Components/HomePage/HomePage'
import PrettyPage from './Components/PrettyPage/PrettyPage'
import Page1 from './Components/Pages/Page1'
import Page2 from './Components/Pages/Page2'
import styled from 'styled-components'
import Header from './Components/Header/Header'
import menaBackground from './assests/menaBackground.jpg'

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <MainContentStyled>
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
              <PrettyPage />
            </Route>
            <Route path="/b4" exact>
              <PrettyPage />
            </Route>
            <Route path="/b5" exact>
              <PrettyPage />
            </Route>
            <Route path="/b6" exact>
              <PrettyPage />
            </Route>
            <Route path="/b7" exact>
              <PrettyPage />
            </Route>
            <Route path="/b8" exact>
              <PrettyPage />
            </Route>
            <Route path="/b9" exact>
              <PrettyPage />
            </Route>
            <Route path="/b10" exact>
              <PrettyPage />
            </Route>
            <Route path="/b11" exact>
              <PrettyPage />
            </Route>
            <Route path="/b12" exact>
              <PrettyPage />
            </Route>
            <Route path="/b13" exact>
              <PrettyPage />
            </Route>
            <Route path="/b14" exact>
              <PrettyPage />
            </Route>
            <Route path="/b15" exact>
              <PrettyPage />
            </Route>
            <Route path="/b16" exact>
              <PrettyPage />
            </Route>
            <Route path="/b17" exact>
              <PrettyPage />
            </Route>
            <Route path="/b18" exact>
              <PrettyPage />
            </Route>
            <Route path="/b19" exact>
              <PrettyPage />
            </Route>
            <Route path="/b20" exact>
              <PrettyPage />
            </Route>
            <Route path="/b21" exact>
              <PrettyPage />
            </Route>

        </Switching>
        </MainContentStyled>
    </div>
  );
}
const MainContentStyled = styled.main` 
    background-image: url("https://unsplash.com/photos/Hli3R6LKibo");
    background-size: cover;
    height:105%;
    margin-top:17%;
    margin-bottom:1%;
    // background-color: #282c34;
    min-height: 110%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`;
export default App;
