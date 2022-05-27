export default function SortButton({ value, name, sortField, handleSort }) {
  return (
    <div>
      <label>{name}</label>
      <input type='radio' value={value} checked={sortField === value} onClick={handleSort} />
    </div>
  );
}
