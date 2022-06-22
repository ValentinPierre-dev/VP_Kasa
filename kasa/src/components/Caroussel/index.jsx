import PropTypes from "prop-types";
import styled from "styled-components";

const ImageStyle = styled.img`
  width: 100%;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
  margin-bottom: 25px;
`;

function Caroussel({ image }) {
  return <ImageStyle src={image} />;
}

Caroussel.propTypes = {
  tag: PropTypes.string.isRequired,
};

Caroussel.defaultProps = {
  tag: "",
};

export default Caroussel;
