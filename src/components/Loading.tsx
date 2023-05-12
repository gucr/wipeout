import styled from 'styled-components'
import {borderWidth, fontSet} from "../theme.ts";
import {useEffect, useState} from "react";

interface Props {

}

let percent = 0

const Loading = ({...props}: Props) => {


  const [percentage, setPercentage] = useState('000')

  const randomDigits = (minLength = 1, maxLength = 16) => {
    const length = Math.floor(minLength + Math.random() * (maxLength - minLength + 1))
    return Math.random().toString().substring(2, length + 2)
  }

  useEffect(() => {
    setInterval(() => {
      setPercentage(percent.toString().padStart(3, '0'))
      percent++
      if (percent > 100) {
        percent = 0
      }
    }, 40)
  }, [])

  return <Wrapper {...props}>
    <Logo src="/logo.svg" alt="WipeOut 2097 logo"/>

    <Grid>
      <div></div>
      <LoadingSquare>
        <div className="loading">Loading</div>
        TM
      </LoadingSquare>

      <Percentage>{percentage}</Percentage>
      <div>{randomDigits(4, 12)}<br/>{randomDigits(4, 12)}</div>

      <LoadCell>
        <div>% load</div>
        <div>33</div>
        <div>33</div>
        <div>33</div>
      </LoadCell>
      <div>{randomDigits(4, 12)}</div>

      <TrackDetails>
        <div>Venue</div>
        <div>Talon's reach</div>

        <div>Location</div>
        <div>Canada</div>

        <div>Length</div>
        <div>3.2km</div>

        <div>Height</div>
        <div>74m</div>

        <div>Class</div>
        <div>Vector</div>


        <div>Team</div>
        <div>Feisar</div>
      </TrackDetails>
      <div>
        <div>{randomDigits(1, 6)}</div>
        <BarAnimation>
          <TableGrid viewBox="0 0 422 140">
            <path
              d="M0 12h401M200 24h201M301 48h100M301 70h100M0 94h401M350 0v118M0 106h422v34H301V0m-51 0v118M200 0v118M151 0v118M101 0v118M51 0v118m350 0V0H0v118h422M26 106v12m50-12v12m50-12v12m50-12v12m49-12v12m50-11v11m51-12v12m49-12v12"/>

            {Array.from({length: 50}, (_, index) =>
              <line
                className="bar"
                key={index}
                style={{height: `${Math.random() * 80 + 20}%`, animationDelay: `${index * 10}ms`}}
                y1={Math.random() * 100}
                y2={105}
                x1={index * 6 + 4}
                x2={index * 6 + 4}
              >

              </line>)}
          </TableGrid>
        </BarAnimation>
      </div>

    </Grid>
  </Wrapper>
}

export default Loading

const Wrapper = styled.div`
  padding: 28rem 24rem;
`

const Logo = styled.img`
  height: 25rem;
  width: 185rem;
  margin-bottom: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${fontSet.info};
`

const Percentage = styled.div`
  ${fontSet.amalgama};
  font-size: 12rem;
`

const LoadCell = styled.div`
  display: flex;
  column-gap: 12rem;
  padding-right: 6rem;

  :first-child {
    margin-right: auto;
  }
`

const LoadingSquare = styled.div`
  border: ${borderWidth.regular} solid white;
  display: flex;
  padding: 0 2rem;
  width: fit-content;

  .loading {
    ${fontSet.amalgama};
  }
`

const BarAnimation = styled.div`
  position: relative;
`

const TrackDetails = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 4rem;
  white-space: nowrap;
  grid-auto-rows: min-content;
`

const TableGrid = styled.svg`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  stroke-width: 3;
  stroke: #fff;
  fill: none;
  
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
  }

  .bar {
    stroke: #eb0000;
    animation: fadeOut 400ms infinite;
  }
`