export default function EventsRow({ event }) {
  const threatLevelChars = event.threatLevel.split(':');
  const colour = threatLevelChars[1] === 'Amber' ? 'orange' : threatLevelChars[1].toLowerCase();

  return (
    <tr className=' odd:bg-gray-100 even:bg-gray-300 bg-gradient-to-r hover:from-green-400 hover:to-blue-300'>
      <td className='py-4 px-6 text-right'>{event.type}</td>
      <td className='py-4 px-6 text-right'>{event.description}</td>
      <td className='py-4 px-6 text-right'>{event.seed.name}</td>
      <td className='py-4 px-6 text-right'>{event.seed.domain}</td>
      <td className='py-2 px-4 text-right font-bold' style={{ color: colour }}>
        {threatLevelChars[1]}
      </td>
    </tr>
  );
}
