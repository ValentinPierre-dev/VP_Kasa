import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import arrow from "../../assets/arrow.svg";

const CollapseWrapper = styled.div`
  width: 80%;
  margin: 30px auto;
  border-radius: 5px;
  background-color: ${colors.secondary};
  @media only screen and (max-width : 500px) {
    width: 100%;
    margin: 15px auto;
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
  font-size: 24px;
  font-weight: normal;
  @media only screen and (max-width : 500px) {
    font-size: 13px;
  }
`;

const CollapseDesc = styled.p`
  color: ${colors.primary};
  padding: 20px;
  font-size: 24px;
  font-weight: normal;
  @media only screen and (max-width : 500px) {
    font-size: 12px;
    padding: 10px;
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
  @media only screen and (max-width : 500px) {
    height: 10px;
  }
`

function Collapse({ title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <CollapseWrapper>
      <CollapseSwitch>
        <CollapseTitle>{title}</CollapseTitle>
        <ButtonArrowActive onClick={() => setIsOpen(false)}>
          <Arrow src={arrow} alt="bouton flèche" />
        </ButtonArrowActive>
      </CollapseSwitch>
      <CollapseDesc>{desc}</CollapseDesc>
    </CollapseWrapper>
  ) : (
    <CollapseWrapper>
      <CollapseSwitch>
        <CollapseTitle>{title}</CollapseTitle>
        <ButtonArrow onClick={() => setIsOpen(true)}>
          <Arrow src={arrow} alt="bouton flèche" />
        </ButtonArrow>
      </CollapseSwitch>
    </CollapseWrapper>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

Collapse.defaultProps = {
  title: "",
  desc: "",
};

export default Collapse;
