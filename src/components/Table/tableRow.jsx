import styled from "styled-components"
import { ThreatIndicator } from "."

const StyledData = styled.td`
  padding: 1rem;
  border-bottom: 1px solid grey;
`

const TableRow = ({ data }) => {
  const rowData = Object.entries(data)
  return (
    <tr>
      {rowData.map((d, i) => (
        <StyledData key={i}>
          {d[0] === "Threat Indicator" ? <ThreatIndicator threatCode={d[1]} /> : d[1]}
        </StyledData>
      ))}
    </tr>
  )
}
export default TableRow
