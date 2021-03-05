import './App.css';
import Header from "./components/Header/header";
import SiteBar from "./components/SiteBar/SiteBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
   
    return (
        <BrowserRouter>

            <div className='wrapper'>
                <Header/>
                <div className="content-wrp">

                    <SiteBar state = {props.state.siteBar}/>

                    <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage} />}/>

                    <Route path={'/messages'} render={() => <Messages messagesPage={props.state.messagesPage}/>}/>

                    <Route path={'/users'} render={() =>  <UsersContainer/> }/>

                    <Route path={'/news'} component={News}/>

                    <Route path={'/music'} component={Music}/>

                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
