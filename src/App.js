import React, { useEffect, useState } from 'react';
import './app.css'

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

  function getRowColourForEvent(event) {
    switch(event.threatLevelCode) {
      case "0":
        return 'threatWhite';
      case "1":
        return 'threatGreen';
      case "2":
        return 'threatAmber';
      case "3":
        return 'threatRed';
      default:
        return 'threatWhite'
    }
  }

  function getEventsTable() {
    return (
      <table className='table'>
        <thead>
        <tr>
          <th>Event Type</th>
          <th>Event Description</th>
          <th>Seed Name</th>
          <th>Seed Domain</th>
          <th>Threat Level</th>
        </tr>
        </thead>
        <tbody>
          {React.Children.toArray(events.map((event) => {
            return (
              <tr key={event.seed.seedId} className={getRowColourForEvent(event)}>
                <td>
                  {event.type}
                </td>
                <td>
                  {event.description}
                </td>
                <td>
                  {event.seed.name}
                </td>
                <td>
                  {event.seed.domain}
                </td>
                <td>
                  {event.threatLevel}
                </td>
              </tr>
            );
          }))}
          </tbody>
      </table>
    )
  }

  return events && (
    <div className="App">
      <h5>Sort By</h5>
      <div>
          <label htmlFor='seedId'>Seed Id</label>
          <input id='seedId' type="radio" value="seedId" onChange={() => setSortField('seedId')} checked={sortField==='seedId'} />
        <br/>
          <label htmlFor='createdDateTime'>Created Date Time</label>
          <input id='createdDateTime' type="radio" value="createdDateTime" onChange={() => setSortField('createdDateTime')} checked={sortField==='createdDateTime'} />
      </div>
      <br/>
      <h5>Results</h5>
      {events.length} events found!
      <br/>
      {getEventsTable()}
    </div>
  );
}

export default App;
