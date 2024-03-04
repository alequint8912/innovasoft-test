import React, { useEffect } from "react";
import { MainContainer, Container } from "./Main.styles";
import Header from "layout/MainLayout/Header/Header";
import { Outlet } from "react-router-dom";

import { useRef } from "react";
import { useLocation } from "react-router-dom";

const MainOLD = () => {
  // const containerRef = useRef(null);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     const storedScrollPosition = Number(
  //       localStorage.getItem("scrollPosition")
  //     );

  //     if (containerRef.current.scrollTop !== storedScrollPosition) {
  //       containerRef.current.scrollTop = storedScrollPosition;
  //     }
  //   }
  // }, [location]);

  // const handleScroll = (event) => {
  //   if (location.pathname === "/") {
  //     localStorage.setItem("scrollPosition", containerRef.current.scrollTop);
  //   }
  // };

  return (
    <MainContainer>
      <Container ref={containerRef} onScroll={handleScroll}>
        <Header />
        <Outlet />
      </Container>
    </MainContainer>
  );
};

export default MainOLD;
