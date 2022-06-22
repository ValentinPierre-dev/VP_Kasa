import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import arrow from "../../assets/arrow.svg";

const CollapseWrapper = styled.div`
  width: 45%;
  border-radius: 5px;
  background-color: ${colors.secondary};
`;

const CollapseWrapperNotActive = styled.div`
  width: 45%;
  background-color: none;
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
  font-size: 18px;
  font-weight: normal;
`;

const CollapseDesc = styled.ul`
  color: ${colors.primary};
  padding: 20px;
  font-size: 18px;
  font-weight: 400;
`;

const StuffList = styled.li`
  list-style: none;
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

function StuffCollapse({ title, contents }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <CollapseWrapper>
      <CollapseSwitch>
        <CollapseTitle>{title}</CollapseTitle>
        <ButtonArrowActive onClick={() => setIsOpen(false)}>
          <img src={arrow} alt="bouton flèche" />
        </ButtonArrowActive>
      </CollapseSwitch>
      <CollapseDesc>
        {contents.map((content) => (
          <StuffList>{content}</StuffList>
        ))}
      </CollapseDesc>
    </CollapseWrapper>
  ) : (
    <CollapseWrapperNotActive>
      <CollapseSwitch>
        <CollapseTitle>{title}</CollapseTitle>
        <ButtonArrow onClick={() => setIsOpen(true)}>
          <img src={arrow} alt="bouton flèche" />
        </ButtonArrow>
      </CollapseSwitch>
    </CollapseWrapperNotActive>
  );
}

StuffCollapse.propTypes = {
  title: PropTypes.string.isRequired,
};

StuffCollapse.defaultProps = {
  title: "",
  content: "",
};

export default StuffCollapse;
