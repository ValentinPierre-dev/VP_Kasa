import styled from "styled-components";
import aboutimg from "../../assets/aboutimg.jpg";
import Collapse from "../../components/AboutCollapse";
import aboutData from "../../datas/aboutdata";

const AboutWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  @media only screen and (max-width : 500px) {
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
  @media only screen and (max-width : 500px) {
    height: 223px;
    border-radius: 10px;
  }
`;

const CollapseList = styled.div``;

function About() {
  return (
    <div>
      <AboutWrapper>
        <AboutBanner>
          <AboutBannerImg src={aboutimg} alt="bannière" />
        </AboutBanner>
        <CollapseList>
          {aboutData.map((about) => (
            <Collapse
              key={`${about.id}`}
              title={about.title}
              desc={about.desc}
            />
          ))}
        </CollapseList>
      </AboutWrapper>
    </div>
  );
}

export default About;
