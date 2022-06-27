import styled from 'styled-components';
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

const LeftArrow = styled.div`
    display: flex;
    position: absolute;
    top: 45%;
    left: 25px;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    @media only screen and (max-width : 500px) {
        left: 10px;
    }
`

const RightArrow = styled.div`
    display: flex;
    position: absolute;
    top: 45%;
    right: 25px;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    @media only screen and (max-width : 500px) {
        right: 10px;
    }
`

const ImageLeft = styled.img`
    @media only screen and (max-width : 500px) {
        height: 20px;
        width: 20px;
    }
`

const ImageRight = styled.img`
    @media only screen and (max-width : 500px) {
        height: 20px;
        width: 20px;
    }
`

function Arrow({ direction, handleClick }) {

    const ArrowType =
    direction === "left" ? (
        <LeftArrow onClick={handleClick}>
            <ImageLeft src={leftArrow} alt="précédente" />
        </LeftArrow>
    ) : (
        <RightArrow onClick={handleClick}>
            <ImageRight src={rightArrow} alt="suivante" />
        </RightArrow>
    );

    return ArrowType

}

export default Arrow