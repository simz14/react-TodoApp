const SelectTasks = ({ selectFn }) => {
  return (
    <select onChange={(e) => selectFn(e.target.value)} id="framework">
      <option value="All">All</option>
      <option value="Clean">Clean</option>
      <option value="Shop">Shop</option>
      <option value="Fix">Fix</option>
    </select>
  );
};

export default SelectTasks;
