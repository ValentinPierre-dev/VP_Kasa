import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.primary};
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: bold;
  font-size: 12rem;
`

const ErrorSubtitle = styled.h2`
  font-weight: semi-bold;
  margin-bottom: 6rem;
`
const ErrorLink = styled.div`
  margin-bottom: 6rem;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorLink>
        <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
      </ErrorLink>
    </ErrorWrapper>
  )
}

export default Error