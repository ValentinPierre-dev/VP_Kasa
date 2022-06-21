import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from '../../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Tag from "../../components/Tag";
import LogementCollapse from "../../components/LogementCollapse";

const MainInfosWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    color: ${colors.primary};
`

const LogementWrapper = styled.div`
    width: 80%;
    margin: auto;
`

const TitleWrapper = styled.div``

const TitleStyle = styled.h1`
    font-weight: 500;
    font-size: 36px;
`

const SubTitleStyle = styled.h2`
    font-weight: 500;
    font-size: 18px;
`

const ProfilWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items : center;
`

const HostName = styled.p`
    width: 93px;
    font-weight: 500;
    font-size: 18px;
    text-align: right;
`

const HostPhoto = styled.img`
    margin-left: 10px;
    height: 64px;
    border-radius: 10rem;
`

const TagList = styled.div`
    display: flex;
    margin: 10px 0;
`

const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
`

const CollapseDesc = styled.div``

function Logement() {

    const { logementId } = useParams()
    const [isDataLoading, setDataLoading] = useState(true)
    const [error, setError] = useState(false)
    const [logementDetails, setLogementDetails] = useState([])
  
    useEffect(() => {
      async function fetchLogements() {
        setDataLoading(true)
        try {
          const response = await fetch(`http://localhost:3000/datas/data.json`)
          const resultData = await response.json()
          setLogementDetails(resultData.find((logement) => logement.id === logementId))
        } catch (err) {
          console.log('===== error =====', err)
          setError(true)
        } finally {
          setDataLoading(false)
        }
      }
      fetchLogements()
    }, [logementId])
  
    if (error) {
      return <span>Oups il y a eu un problème</span>
    }

    return isDataLoading ? <Loader /> : (
        <LogementWrapper>
            <MainInfosWrapper>
                <TitleWrapper>
                    <TitleStyle>{logementDetails.title}</TitleStyle>
                    <SubTitleStyle>{logementDetails.location}</SubTitleStyle>
                </TitleWrapper>
                <ProfilWrapper>
                <HostName>{logementDetails.host.name}</HostName>
                    <HostPhoto src={logementDetails.host.picture} />
                </ProfilWrapper>
            </MainInfosWrapper>
            <TagList>
                {logementDetails.tags.map((tag, index) => (
                    <Tag 
                        key={`${tag}-${index}`}
                        tag={tag} 
                    />
                ))}
            </TagList>
            <CollapseWrapper>
                <LogementCollapse title={'Description'} content={logementDetails.description} />
                <LogementCollapse title={'Équipements'} content={logementDetails.equipments} />
            </CollapseWrapper>
        </LogementWrapper>
    )
}

export default Logement