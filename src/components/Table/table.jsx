import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  padding: 0;
  text-align: center;
  vertical-align: center;
  border: 1px solid grey;
  border-collapse: collapse;
`
const StyledHeader = styled.th`
  padding: 1rem;
  border-bottom: 1px solid grey;
  text-transform: capitalize;
`

const Table = ({ cols, children }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {cols.map((col) => (
            <StyledHeader>{col}</StyledHeader>
          ))}
        </tr>
      </thead>
      <tbody>
          {children}
      </tbody>
    </StyledTable>
  )
}

export default Table
