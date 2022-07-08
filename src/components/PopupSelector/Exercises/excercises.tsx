import { MenuItem, OutlinedInput, Select } from '@mui/material'
import { executionAsyncResource } from 'async_hooks'

export const excercises = [
  { name: 'Crunches', mg: 'abs' },
  { name: 'Pull-ups', mg: 'back' },
  { name: 'Benchpress', mg: 'chest' },
  { name: 'Incline benchpress', mg: 'chest' },
  { name: 'Decline benchpress', mg: 'chest' },
]

interface Props {
  tempExcersize: string
  onChange: any
  muscleGroup: string
}
const GetExcercisesFromMg = ({
  tempExcersize,
  onChange,
  muscleGroup,
}: Props): JSX.Element => {
  const filteredExcercises = excercises.map((col) => {
    if (col.mg === muscleGroup) {
      return <MenuItem value={col.name}>{col.name}</MenuItem>
    }
  })

  return (
    <Select
      labelId="demo-dialog-select-label"
      id="demo-dialog-select"
      value={tempExcersize}
      onChange={onChange}
      input={<OutlinedInput label="Exercise" />}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {filteredExcercises}
    </Select>
  )
}

export default GetExcercisesFromMg
