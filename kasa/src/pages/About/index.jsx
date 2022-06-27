import styled from "styled-components";
import aboutimg from "../../assets/aboutimg.jpg";
import aboutData from "../../datas/aboutdata";
import colors from "../../utils/style/colors";
import DescriptionCollapse from "../../components/DescriptionCollapse";

const AboutWrapper = styled.div`
  flex: 1;
  width: 80%;
  margin: 20px auto;
  @media only screen and (max-width: 500px) {
    width: 90%;
    margin: 0px auto;
  }
`;

const AboutBanner = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const AboutBannerImg = styled.img`
  width: 100%;
  border-radius: 25px;
  filter: brightness(80%);
  object-fit: cover;
  @media only screen and (max-width: 500px) {
    height: 223px;
    border-radius: 10px;
  }
`;

const CollapseDesc = styled.p`
  color: ${colors.primary};
  padding: 20px;
  font-size: 24px;
  font-weight: 400;
  @media only screen and (max-width: 500px) {
    font-size: 12px;
    padding: 10px;
  }
`;

const CollapseList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

function About() {
  return (
    <AboutWrapper>
      <AboutBanner>
        <AboutBannerImg src={aboutimg} alt="bannière" />
      </AboutBanner>
      <CollapseList>
        {aboutData.map((about) => (
          <DescriptionCollapse
            key={`${about.id}`}
            title={about.title}
            width={"80%"}
            titleSize={"24px"}
          >
            <CollapseDesc>{about.desc}</CollapseDesc>
          </DescriptionCollapse>
        ))}
      </CollapseList>
    </AboutWrapper>
  );
}

export default About;
