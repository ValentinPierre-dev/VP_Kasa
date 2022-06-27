import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const ThumbCover = styled.img`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  object-fit: cover;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  @media only screen and (max-width : 500px) {
    width: 100%;
    height: 225px;
  }
`;
const ThumbFilter = styled.div`
  border-radius: 10px;
  position: absolute;
  inset: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 58%
  );
`;

const ThumbTitle = styled.span`
  position: absolute;
  top: 330px;
  left: 20px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: normal;
  @media only screen and (max-width : 500px) {
    top: 180px;
  }
`;

const ThumbWrapper = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 400px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  @media only screen and (max-width : 500px) {
    width: 100%;
    height: 225px;
  }
`;

function Thumb({ cover, title }) {
  return (
    <ThumbWrapper>
      <ThumbCover src={cover} />
      <ThumbFilter></ThumbFilter>
      <ThumbTitle>{title}</ThumbTitle>
    </ThumbWrapper>
  );
}

Thumb.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Thumb.defaultProps = {
  cover: "",
  title: "",
};

export default Thumb;
