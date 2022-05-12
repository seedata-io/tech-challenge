import styled from "styled-components"
const Indicator = styled.div.attrs((props) => {
  return {
    bg: props.threatCodeColor || "black",
  }
})`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  margin: 0 auto;
`

const ThreatIndicator = ({ threatCode }) => {
  let threatCodeColor = ""
  switch (threatCode) {
    case "0":
      threatCodeColor = "white"
      break
    case "1":
      threatCodeColor = "green"
      break
    case "2":
      threatCodeColor = "orange"
      break
    case "3":
      threatCodeColor = "red"
      break
    default:
      threatCodeColor = "black"
  }

  return <Indicator threatCodeColor={threatCodeColor} />
}

export default ThreatIndicator
