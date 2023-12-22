import styled from "styled-components";
import {
  Brands,
  Catalog,
  Feedback,
  Hero,
  SavingZone,
  Featured,
  NewArrival,
} from "../../components";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival />
      <SavingZone />
      <Catalog catalogTitle={"Categories For Men"} products={mensCatalog} />
      <Catalog catalogTitle={"Categories For Women"} products={womensCatalog} />
      <Brands />
      <Catalog catalogTitle={"In The Limelight"} products={limelightCatalog} />
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
