import styled from 'styled-components'
import colors from '../../utils/style/colors'
import homeimg from '../../assets/homeimg.jpg'
import Card from '../../components/Card'
import dataList from '../../datas/data'

const HomeWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
`

const HomeBanner = styled.div`
position: relative;
text-align: center;
color: white;
`

const HomeBannerImg = styled.img`
  width: 100%;
  margin: 20px auto;
  border-radius: 25px;
  filter: brightness(80%);
`

const HomeBannerTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
`

const KasaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  padding: 45px;
  border-radius: 25px;
  background-color: ${colors.secondary}
`

function Home() {
  return ( 
    <HomeWrapper>
      <HomeBanner>
        <HomeBannerImg src={homeimg} alt="bannière"/>
        <HomeBannerTitle>Chez vous, partout et ailleurs</HomeBannerTitle>
      </HomeBanner>
      <KasaList>
        {dataList.map((kasa) => (
          <Card 
            key={`${kasa.id}`}
            cover={kasa.cover}
            title={kasa.title}
          />
        ))}
      </KasaList>
    </HomeWrapper>
  )
}

export default Home