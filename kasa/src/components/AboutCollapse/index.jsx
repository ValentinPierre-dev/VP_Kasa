import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import arrow from '../../assets/arrow.svg'

const CollapseWrapper = styled.div`
  width: 80%;
  margin: auto;
  border-radius: 5px;
    background-color: ${colors.secondary};
`

const CollapseSwitch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 5px;
    background-color: ${colors.primary};
`

const CollapseTitle = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-weight: normal;
`

const CollapseDesc = styled.p`
  color: ${colors.primary};
  padding: 20px;
  font-size: 18px;
  font-weight: normal;
`

const CollapseArrow = styled.img`
`


function Collapse({ title, desc }) {
  return (
    <CollapseWrapper>
        <CollapseSwitch>
            <CollapseTitle>{title}</CollapseTitle>
            <CollapseArrow src={arrow} />
        </CollapseSwitch>
        <CollapseDesc>{desc}</CollapseDesc>
    </CollapseWrapper>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

Collapse.defaultProps = {
  title: '',
  desc: '',
}

export default Collapse