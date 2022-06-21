import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const TagContainer = styled.div`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 0 30px;
    margin-right: 10px;
    border-radius: 15px;
`
const TagName = styled.p`
    padding: 3px;
    margin: 0;
`

function Tag({ tag }) {
    return (
      <TagContainer>
        <TagName>{tag}</TagName>
      </TagContainer>
    )
  }
  
  Tag.propTypes = {
    tag: PropTypes.string.isRequired,
  }
  
  Tag.defaultProps = {
    tag: '',
  }
  
  export default Tag