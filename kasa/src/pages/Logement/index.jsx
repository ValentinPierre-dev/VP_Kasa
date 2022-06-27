import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../utils/style/Atoms";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import Slider from "../../components/Slider";
import Tag from "../../components/Tag";
import DescriptionCollapse from "../../components/DescriptionCollapse";
import StuffCollapse from "../../components/StuffCollapse";
import Rating from "../../components/Rating";

const MainInfosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: ${colors.primary};
  @media only screen and (max-width : 500px) {
    flex-direction: column;
  }
`;

const LogementWrapper = styled.div`
  width: 80%;
  margin: auto;
  @media only screen and (max-width : 500px) {
    width: 90%;
  }
`;

const TitleWrapper = styled.div`
`;

const TitleStyle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  @media only screen and (max-width : 500px) {
    font-size: 18px;
  }
`;

const SubTitleStyle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  @media only screen and (max-width : 500px) {
    font-size: 14px;
  }
`;

const ProfilWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HostName = styled.p`
  width: 93px;
  font-weight: 500;
  font-size: 18px;
  text-align: right;
  @media only screen and (max-width : 500px) {
    font-size: 12px;
    width: 80px;
  }
`;

const HostPhoto = styled.img`
  margin-left: 10px;
  height: 64px;
  border-radius: 10rem;
  @media only screen and (max-width : 500px) {
    height: 32px;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 50px 0;
  @media only screen and (max-width : 500px) {
    flex-direction: column;
  }
`;

const HostAndRate = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width : 500px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
  }
`;

const RatingWrapper = styled.div`
  position: relative;
  @media only screen and (max-width : 500px) {
    width: 100%;
    height: 18px;
  }
`;

const NotActiveStars = styled.div`
  position: absolute;
  top: 50%;
  inset: 0;
`;

const ActiveStars = styled.div`
  position: absolute;
  top: 50%;
  inset: 0;
`;

function Logement() {
  const { logementId } = useParams();
  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);
  const [logementDetails, setLogementDetails] = useState([]);

  useEffect(() => {
    async function fetchLogements() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/datas/data.json`);
        const resultData = await response.json();
        setLogementDetails(
          resultData.find((logement) => logement.id === logementId)
        );
      } catch (err) {
        console.log("===== error =====", err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchLogements();
  }, [logementId]);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return isDataLoading ? (
    <Loader />
  ) : (
    <LogementWrapper>
      <Slider props={logementDetails.pictures} />
      <MainInfosWrapper>
        <TitleWrapper>
          <TitleStyle>{logementDetails.title}</TitleStyle>
          <SubTitleStyle>{logementDetails.location}</SubTitleStyle>
          <TagList>
            {logementDetails.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} tag={tag} />
            ))}
          </TagList>
        </TitleWrapper>

        <HostAndRate>
          <ProfilWrapper>
            <HostName>{logementDetails.host.name}</HostName>
            <HostPhoto src={logementDetails.host.picture} />
          </ProfilWrapper>

          <RatingWrapper>
            <NotActiveStars>
              <Rating ratingType="NotActive" scaleValue={5} />
            </NotActiveStars>
            <ActiveStars>
              <Rating ratingType="Active" scaleValue={logementDetails.rating} />
            </ActiveStars>
          </RatingWrapper>
        </HostAndRate>
      </MainInfosWrapper>

      <CollapseWrapper>
        <DescriptionCollapse
          title={"Description"}
          content={logementDetails.description}
        />
        <StuffCollapse
          title={"Équipements"}
          contents={logementDetails.equipments}
        />
      </CollapseWrapper>
    </LogementWrapper>
  );
}

export default Logement;
