import styled from 'styled-components'
import aproposimg from '../../assets/aproposimg.jpg'

const AProposWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
`

const AProposBanner = styled.div`
position: relative;
text-align: center;
color: white;
`

const AProposBannerImg = styled.img`
  width: 100%;
  margin: 20px auto;
  border-radius: 25px;
  filter: brightness(80%);
`

function Apropos() {
  return (
    <div>
    <AProposWrapper>
      <AProposBanner>
        <AProposBannerImg src={aproposimg} alt="bannière"/>
      </AProposBanner>
    </AProposWrapper>
    </div>
  )
}

export default Apropos