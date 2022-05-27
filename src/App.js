import { useEffect, useState } from 'react';
import EventsTable from './components/events-table/events-table';
import Sort from './components/sort/sort';

function App() {
  const [events, setEvents] = useState([]);
  const [sortField, setSortField] = useState('');

  const handleSort = (e) => {
    if (e.target.value === sortField) {
      setSortField('');
    } else {
      setSortField(e.target.value);
    }
  };

  useEffect(() => {
    fetch(`api/events?sortField=${sortField}`)
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, [sortField]);

  if (events) {
    console.log(events);
  }
  return (
    <div className='flex flex-col items-center h-screen w-full'>
      <Sort handleSort={handleSort} sortField={sortField} />
      <br />
      <h5>Results: {events.length} events found!</h5>
      <br />
      {events && <EventsTable events={events} />}
    </div>
  );
}

export default App;
