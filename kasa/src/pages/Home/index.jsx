import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import homeimg from "../../assets/homeimg.jpg";
import Thumb from "../../components/Thumb";
//import dataList from '../../datas/data'
import { Loader } from "../../utils/style/Atoms";

const HomeWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  @media only screen and (max-width: 500px) {
    width: 90%;
    margin: 0px auto;
  }
`;

const HomeBanner = styled.div`
  position: relative;
  text-align: center;
  color: white;
  @media only screen and (max-width: 500px) {
    text-align: left;
  }
`;

const HomeBannerImg = styled.img`
  width: 100%;
  border-radius: 25px;
  filter: brightness(80%);
  object-fit: cover;
  @media only screen and (max-width: 500px) {
    height: 111px;
    border-radius: 10px;
  }
`;

const HomeBannerTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
    left: 38%;
  }
`;

const ThumbList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  grid-auto-rows: minmax(100px, auto);
  margin: 30px 0;
  padding: 56px;
  border-radius: 25px;
  background-color: ${colors.secondary};
  @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    padding: 0;
    margin: 15px 0;
    background-color: ${colors.white};
  }
`;

function Home() {
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);
  const [logementsList, setLogementsList] = useState([]);

  useEffect(() => {
    async function fetchLogements() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/datas/data.json`);
        const logementsList = await response.json();
        setLogementsList(logementsList);
      } catch (err) {
        console.log("===== error =====", err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchLogements();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <HomeWrapper>
      <HomeBanner>
        <HomeBannerImg src={homeimg} alt="bannière" />
        <HomeBannerTitle>Chez vous, partout et ailleurs</HomeBannerTitle>
      </HomeBanner>
      {isDataLoading ? (
        <Loader />
      ) : (
        <ThumbList>
          {logementsList.map((logement) => (
            <Link key={`${logement.id}`} to={`/logement/${logement.id}`}>
              <Thumb cover={logement.cover} title={logement.title} />
            </Link>
          ))}
        </ThumbList>
      )}
    </HomeWrapper>
  );
}

export default Home;
