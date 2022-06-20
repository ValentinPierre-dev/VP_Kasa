import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ThumbCover = styled.img`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  object-fit: cover;
  border-radius: 10px;
  width: 300px;
  height: 300px;
`

const ThumbTitle = styled.span`
position: absolute;
top: 240px;
left: 20px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: normal;
`

const ThumbWrapper = styled.div`
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


function Thumb({ cover, title }) {
  return (
    <ThumbWrapper>
      <ThumbCover src={cover} />
      <ThumbTitle>{title}</ThumbTitle>
    </ThumbWrapper>
  )
}

Thumb.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Thumb.defaultProps = {
  cover: '',
  title: '',
}

export default Thumb