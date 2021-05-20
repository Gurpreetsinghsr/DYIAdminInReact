import React from 'react';
import SideBar from './components/sideBar/sideBar'
import NavBar from './components/navBar/NavBar';
import MainSpace from './components/mainSpace/mainSpace';


function App() {
  return (
    <React.Fragment>
      <div className="paddingForHeader">
        <NavBar></NavBar>
          <main className="main" id="main">
            <SideBar></SideBar>
            <MainSpace></MainSpace>
          </main>
      </div>
      
    </React.Fragment>
  );
}

export default App;
