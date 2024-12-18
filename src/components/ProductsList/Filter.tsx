import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
interface IFilter {
  age: string;
  handleChange: () => {};
}
export const Filter = (props: IFilter) => {
  const { handleChange, age } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Asc</MenuItem>
        <MenuItem value={20}>Desc</MenuItem>
      </Select>
    </FormControl>
  );
};
