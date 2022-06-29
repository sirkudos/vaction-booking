import React from "react";
import { StyledFlexWrapper } from "../../components/common/Basics/StyledFlexWrapper";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Layout from "../../components/Layout/Layout";
import SideBarSearch from "../../components/SideBarSearch/SideBarSearch";
import SearchResult from "./SearchResult/SearchResult";

const HotelList = () => {
  return (
    <Layout>
      <StyledFlexWrapper padding="3rem" gap="2rem">
        <SideBarSearch />
        <SearchResult />
      </StyledFlexWrapper>
    </Layout>
  );
};

export default HotelList;
