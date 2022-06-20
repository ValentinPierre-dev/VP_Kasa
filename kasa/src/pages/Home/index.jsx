import styled from 'styled-components'
import colors from '../../utils/style/colors'
import homeimg from '../../assets/homeimg.jpg'
import Thumb from '../../components/Thumb'
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

const ThumbList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  grid-auto-rows: minmax(100px, auto);
  padding: 56px;
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
      <ThumbList>
        {dataList.map((kasa) => (
          <Thumb 
            key={`${kasa.id}`}
            cover={kasa.cover}
            title={kasa.title}
          />
        ))}
      </ThumbList>
    </HomeWrapper>
  )
}

export default Home