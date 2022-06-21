import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import arrow from '../../assets/arrow.svg'

const CollapseWrapper = styled.div`
  width: 45%;
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
  font-weight: 400;
`

const CollapseArrow = styled.img`
`


function LogementCollapse({ title, content }) {
  return (
    <CollapseWrapper>
        <CollapseSwitch>
            <CollapseTitle>{title}</CollapseTitle>
            <CollapseArrow src={arrow} />
        </CollapseSwitch>
        <CollapseDesc>{content}</CollapseDesc>
    </CollapseWrapper>
  )
}

LogementCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

LogementCollapse.defaultProps = {
  title: '',
  content: '',
}

export default LogementCollapse