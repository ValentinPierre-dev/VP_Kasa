import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import arrow from "../../assets/arrow.svg";

const CollapseWrapper = styled.div`
  width: ${(props) => props.width};
  border-radius: 5px;
  background-color: ${colors.secondary};
  margin-bottom: 25px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const CollapseWrapperNotActive = styled.div`
  width: ${(props) => props.width};
  background-color: none;
  margin-bottom: 25px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const CollapseSwitch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 5px;
  background-color: ${colors.primary};
`;

const CollapseTitle = styled.p`
  color: ${colors.white};
  font-size: ${(props) => props.titleSize};
  font-weight: normal;
  @media only screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const ButtonArrow = styled.button`
  border-style: none;
  background-color: ${colors.primary};
  cursor: pointer;
`;

const ButtonArrowActive = styled.button`
  border-style: none;
  background-color: ${colors.primary};
  transform: rotateZ(-180deg);
  cursor: pointer;
`;

const Arrow = styled.img`
  @media only screen and (max-width: 500px) {
    height: 10px;
  }
`;

function DescriptionCollapse({ title, width, titleSize, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <CollapseWrapper width={width}>
      <CollapseSwitch>
        <CollapseTitle titleSize={titleSize}>{title}</CollapseTitle>
        <ButtonArrowActive onClick={() => setIsOpen(false)}>
          <Arrow src={arrow} alt="bouton flèche" />
        </ButtonArrowActive>
      </CollapseSwitch>
      {children}
    </CollapseWrapper>
  ) : (
    <CollapseWrapperNotActive width={width}>
      <CollapseSwitch>
        <CollapseTitle titleSize={titleSize}>{title}</CollapseTitle>
        <ButtonArrow onClick={() => setIsOpen(true)}>
          <Arrow src={arrow} alt="bouton flèche" />
        </ButtonArrow>
      </CollapseSwitch>
    </CollapseWrapperNotActive>
  );
}

DescriptionCollapse.propTypes = {
  title: PropTypes.string.isRequired,
};

DescriptionCollapse.defaultProps = {
  title: "",
  content: "",
};

export default DescriptionCollapse;
