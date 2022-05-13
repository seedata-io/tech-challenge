import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function App() {
  const [events, setEvents] = useState([]);
  const [sortField, setSortField] = useState('seedId');

  useEffect(
    () => {
      fetch(`api/events?sortField=${sortField}`)
        .then((res) => res.json())
        .then((data) => setEvents(data.events))
    }, [sortField]
  )

  console.log("Events", events);

  return events && (
    <div className="App m-3">
      <h5>Sort By</h5>
      <div>
        <label htmlFor='seedSortField' className='m-1'>Seed Id</label>
        <input name="sorting" type="radio" value="seedId" onClick={() => setSortField('seedId')} defaultChecked />
      </div>
      <br/>
      <div>
        <label htmlFor='dateSortField' className='m-1'>Created Date Time</label>
        <input name="sorting" type="radio" value="createdDateTime" onClick={() => setSortField('createdDateTime')} />
      </div>
      <br/>
      <h5>Results</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Event type</th>
            <th>Event description</th>
            <th>Seed name</th>
            <th>Seed domain</th>
            <th>Threat level</th>
          </tr>
        </thead>
        <tbody>
        {events.map(event => {
          return(
            <tr key={event.id}>
              <td>{event.type}</td>
              <td>{event.description}</td>
              <td>{event.seed.name}</td>
              <td>{event.seed.domain}</td>
              <td
                style={
                  (event.threatLevelCode === "0") ? { backgroundColor: 'white'} :
                  (event.threatLevelCode === "1") ? { backgroundColor: 'green'} :
                  (event.threatLevelCode === "2") ? { backgroundColor: '#FFBF00'} :
                  (event.threatLevelCode === "3") ? { backgroundColor: 'red'} :
                  {}
                }
              >{event.threatLevel}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>
      {events.length} events found!
    </div>
  );
}

export default App;
