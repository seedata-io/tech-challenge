import { useEffect, useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(
    () => {
      fetch('api/events')
        .then((res) => res.json())
        .then((data) => setEvents(data.events))
    }, []
  )
  return events && (
    <div className="App">
      {events.length} events found!
    </div>
  );
}

export default App;
