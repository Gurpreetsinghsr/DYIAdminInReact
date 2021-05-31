import NavBar from "./../navBar/NavBar";
import MainSpace from "./../mainSpace/mainSpace";
import SideBar from "./../sideBar/sideBar";
const DefaultPage = () => {
  return (
    <div className="paddingForHeader">
      <NavBar></NavBar>
      <main className="main" id="main">
        <SideBar></SideBar>
        <MainSpace></MainSpace>
      </main>
    </div>
  );
};

export default DefaultPage;
