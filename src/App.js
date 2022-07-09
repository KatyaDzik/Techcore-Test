import './App.css';
import Menu from "./components/Menu";
import Submenu from "./components/Submenu";
import Breadcrumbs from "./components/Breadcrumbs";
import {Routes, Route, Link} from 'react-router-dom';
import MainContent from "./components/MainContent";


function App() {
  return (
        <div className="App">
            <Menu/>
            <Routes>
            <Route path="/" element={<MainContent page="Dashboard"/>}></Route>
            <Route path="/users" element={<MainContent page="Users"/>}></Route>
            <Route path="/settings" element={<MainContent page="SETTINGS"/>}></Route>
            <Route path="/p&l" element={<MainContent page="P&L"/>}></Route>
            <Route path="/vacation" element={<MainContent page="VACATION manager"/>}></Route>
            <Route path="/settings/general" element={<MainContent page="settings/general"/>}></Route>
            <Route path="/settings/vacation" element={<MainContent page="settings VACATION"/>}></Route>
            <Route path="/settings/vacation/types" element={<MainContent page="settings TYPES"/>}></Route>
            <Route path="/settings/vacation/location" element={<MainContent page="Locations"/>}></Route>
            <Route path="*" element={<MainContent page="NOT FOUND"/>}></Route>
        </Routes>
        </div>
  );
}

export default App;
