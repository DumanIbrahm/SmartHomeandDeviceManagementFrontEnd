import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Header from "../common/header/Header";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import Custom from "../custom/Custom";
import Services from "../services/Services";
import About from "../about/About";
import LoginForm from "../LoginForm/LoginForm";
import CustomRooms from "../customRoomPage/CustomRooms";
import CustomDevices from "../customDevices/CustomDevices";
import ScrollTop from "../scrollTop/ScrollTop";

const Pages = () => {
  const [userId, setUserId] = useState(null);

  console.log('Pages component userId:', userId);

  return (
    <Router>
      <ScrollTop />
      <ConditionalHeader userId={userId} />
      <Switch>
        <Route exact path='/home' component={HeaderAndFooterWrapper(Home)} />
        <Route exact path='/about' component={HeaderAndFooterWrapper(About)} />
        <Route exact path='/services' component={HeaderAndFooterWrapper(Services)} />
        <Route exact path='/custom' component={HeaderAndFooterWrapper(Custom)} />
        <Route exact path='/' render={(props) => <LoginForm {...props} setUserId={setUserId} />} />
        <Route exact path='/rooms' component={HeaderAndFooterWrapper(CustomRooms)} />
        <Route exact path='/devices' component={HeaderAndFooterWrapper(CustomDevices)} />
      </Switch>
    </Router>
  );
};

const HeaderAndFooterWrapper = (Component) => {
  return () => (
    <>
      <Component />
      <Footer />
    </>
  );
};

const ConditionalHeader = ({ userId }) => {
  const location = useLocation();
  const hideHeaderPaths = ['/']; // Paths where you want to hide the header
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return !shouldHideHeader && <Header userId={userId} />;
};

export default Pages;
