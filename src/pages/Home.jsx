import React from "react";
import { StyledContainer } from "../components/common/Basics/StyledContainer";
import { StyledText } from "../components/common/Basics/StyledText";
import EmailSubscription from "../components/EmailSubscription/EmailSubscription";
import Featured from "../components/Featured/Featured";
import FeaturedHomeGuest from "../components/FeaturedHomeGuest/FeaturedHomeGuest";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import NavBar from "../components/Navbar/NavBar";
import PropertyType from "../components/PropertyType/PropertyType";
import { Theme } from "../Theme";

const Home = (componentName) => {
  return (
    <Layout componentName={componentName}>
      <StyledContainer>
        <Featured />
        <StyledText color={Theme.colors.generalColor}>
          Browse By Property Type
        </StyledText>
        <PropertyType />
        <StyledText color={Theme.colors.generalColor}>Home Guest</StyledText>
        <FeaturedHomeGuest />
      </StyledContainer>
      <EmailSubscription />
    </Layout>
  );
};

export default Home;
