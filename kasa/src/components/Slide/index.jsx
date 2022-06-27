import styled from "styled-components";

const SlideCSS = styled.img`
  width: 100%;
  margin: auto;
  height: 500px;
  object-fit: cover;
  border-radius: 25px;
  @media only screen and (max-width: 500px) {
    height: 255px;
  }
`;

const Slide = ({ content }) => <SlideCSS src={content} />;

export default Slide;
