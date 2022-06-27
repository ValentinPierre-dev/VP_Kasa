import { useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import Slide from '../Slide'
import Arrow from '../Arrow'


const SliderContent = styled.div`
  position: relative;
  margin-bottom: 30px;
  @media only screen and (max-width : 500px) {
    margin-bottom: 10px;
  }
`

const Index = styled.p`
  display: flex;
  position: absolute;
  left: 48%;
  bottom: 10px;
  height: 50px;
  width: 50px;
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  @media only screen and (max-width : 500px) {
    display: none;
  }
`

function Slider ({ props }) {

  const [state, setState] = useState({
    activeIndex: 0,
  })

  const { activeIndex } = state

  const nextSlide = () => {
    if (activeIndex === props.length - 1) {
      return setState({
        ...state,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        activeIndex: props.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1
    })
  }
  
  return props.length > 1 ? (
    <SliderContent>
      <Slide content={props[activeIndex]}/>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Index>{activeIndex + 1}/{props.length}</Index>
    </SliderContent>
  ) : (
    <SliderContent>
      <Slide content={props[activeIndex]}/>
    </SliderContent>
  )
}

export default Slider