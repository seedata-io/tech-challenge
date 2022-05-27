import EventsRow from './events-row/events-row';

export default function EventsTable({ events }) {
  return (
    <div className='shadow-md sm:rounded-lg'>
      <table className='table-auto'>
        <thead className='text-md text-gray-100 uppercase bg-gray-500'>
          <tr>
            <th className='p-4'>Type</th>
            <th>Description</th>
            <th>Seed Name</th>
            <th>Seed Domain</th>
            <th className='p-4'>Threat Level</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <EventsRow key={event.id} event={event} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
