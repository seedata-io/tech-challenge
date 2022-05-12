import { useEffect, useState } from "react"
import { Table, TableRow } from "./components/Table"

function App() {
  const [events, setEvents] = useState([])
  const [seeds, setSeeds] = useState([])
  const [tableCols, setTableCols] = useState([])
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch(`api/events?sortField=`)
      .then((res) => res.json())
      .then((data) => setEvents(data.events))

    fetch(`api/seeds`)
      .then((res) => res.json())
      .then((data) => setSeeds(data.seeds))
  }, [])

  useEffect(() => {
    if (events.length > 0 && seeds.length > 0) {
      const tableData = events.map((event) => {
        return {
          // ...event,
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

  return (
    events && (
      <div className="App">
        <h5>Sort By</h5>
        <div>
          <label htmlFor="seedSortField">Seed Id</label>
          <input type="radio" value="seedId" />
        </div>
        <br />
        <div>
          <label htmlFor="dateSSortField">Created Date Time</label>
          <input type="radio" value="createdDateTime" />
        </div>
        <br />
        <h5>Results</h5>
        <Table cols={tableCols}>
          {tableData.map((data) => (
            <TableRow key={data.id} data={data} />
          ))}
        </Table>
        {events.length} events found!
      </div>
    )
  )
}

export default App
