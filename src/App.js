import { useEffect, useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`api/events?sortField=`) // SNEAKY URL
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, []);

  return (
    events && (
      <div className='App'>
        <h5>Sort By</h5>
        <div>
          <label htmlFor='seedSortField'>Seed Id</label>
          <input type='radio' value='seedId' />
        </div>
        <br />
        <div>
          <label htmlFor='dateSSortField'>Created Date Time</label>
          <input type='radio' value='createdDateTime' />
        </div>
        <br />
        <h5>Resutls</h5>
        {events.length} events found!
      </div>
    )
  );
}

export default App;
