import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const [events, setEvents] = useState([]);
  const [sortField, setSortField] = useState('seedId');
  const [seeds, setSeeds] = useState([]);
  const [tableCols, setTableCols] = useState([])
  const [tableData, setTableData] = useState([])

  useEffect(
    () => {
      fetch(`api/events?sortField=${sortField}`)
        .then((res) => res.json())
        .then((data) => setEvents(data.events))

      fetch(`api/seeds`)
        .then((res) => res.json())
        .then((data) => setSeeds(data.seeds))
    }, [sortField])

  useEffect(() => {
    if (events.length > 0 && seeds.length > 0) {
      const tableData = events.map((event) => {
        return {
          // ...events,
          "Event Type": event.type,
          "Event Description": event.description,
          "Seed Name": seeds.find((seed) => seed.id === event.seedId).name,
          "Seed Domain": seeds.find((seed) => seed.id === event.seedId).domain,
          "Threat Indicator": event.threatLevelCode,
        }
      })

      const cols = Object.keys(tableData[0])
      setTableCols(cols)
      setTableData(tableData)
    }
  }, [events, seeds])


  console.log("Events", events);

  return (
    events && (
      <div className="App">
        <h5>Sort By</h5>
        <div>
          <label htmlFor="seedSortField">Seed Id</label>
          <input name= 'sorting' type="radio" value="seedId" onClick={() => setSortField('seedId')} defaultChecked />
        </div>
        <br />
        <div>
          <label htmlFor="dateSortField">Created Date Time</label>
          <input name= 'sorting' type="radio" value="createdDateTime" onClick={() => setSortField('createdDateTime')} />
        </div>
        <br />
        <h5>Results</h5>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableCols.map((col) => ( 
                  <TableCell key={col}>{col} </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id} event={event}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell >{event.type}</TableCell>
                  <TableCell >{event.description}</TableCell>
                  <TableCell >{event.seed.name}</TableCell>
                  <TableCell >{event.seed.domain}</TableCell>
                  <TableCell sx={
                    (event.threatLevelCode === "0") ? { backgroundColor: 'white'} :
                    (event.threatLevelCode === "1") ? { backgroundColor: 'green'} :
                    (event.threatLevelCode === "2") ? { backgroundColor: '#FFBF00'} :
                    (event.threatLevelCode === "3") ? { backgroundColor: 'red'} :
                    {}
                  }>{event.threatLevelCode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {events.length} events found!
      </div>
    )
  )
}

export default App;