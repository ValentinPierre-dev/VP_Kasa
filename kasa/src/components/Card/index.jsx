import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardCover = styled.img`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  object-fit: cover;
  border-radius: 10px;
  width: 300px;
  height: 300px;
`

const CardTitle = styled.span`
position: absolute;
top: 240px;
left: 20px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: normal;
`

const CardWrapper = styled.div`
position: relative;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ cover, title }) {
  return (
    <CardWrapper>
      <CardCover src={cover} />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  cover: '',
  title: '',
}

export default Card