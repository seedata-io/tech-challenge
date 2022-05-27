import SortButton from './sort-button/sort-button';

export default function Sort({ handleSort, sortField }) {
  return (
    <div className='flex flex-col'>
      <h5 className='font-bold text-2xl text-gradient-to-r from-cyan-500 to-blue-500'>Sort By</h5>
      <br />
      <SortButton
        name={'Seed Id '}
        value={'seedId'}
        handleSort={handleSort}
        sortField={sortField}
      />
      <SortButton
        name={'Created Date Time '}
        value={'createdDateTime'}
        handleSort={handleSort}
        sortField={sortField}
      />
    </div>
  );
}
