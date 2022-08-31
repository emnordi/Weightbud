import { MenuItem, OutlinedInput, Select } from '@mui/material'
import { Exercise } from '../../../types/exercises'

export const muscleGroups: string[] = ['abs', 'biceps', 'back', 'chest', 'legs']

export const excercises: Exercise[] = [
  //Abs
  { name: 'Crunches', mg: ['abs'] },
  { name: 'Sit-ups', mg: ['abs'] },
  { name: 'Ab Crunch Machine', mg: ['abs'] },
  //Biceps
  { name: 'Alternate Hammer Curl', mg: ['biceps'] },
  //Triceps
  //Back
  { name: 'Pull-ups', mg: ['back'] },
  { name: 'Deadlifts', mg: ['back'] },
  //Chest
  { name: 'Benchpress', mg: ['chest'] },
  { name: 'Incline benchpress', mg: ['chest'] },
  { name: 'Decline benchpress', mg: ['chest'] },
  //Legs
  { name: 'Squats', mg: ['legs'] },
  { name: 'Lunges', mg: ['legs'] },
  //Shoulders
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
    if (col.mg.includes(muscleGroup)) {
      return (
        <MenuItem key={col.name} value={col.name}>
          {col.name}
        </MenuItem>
      )
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
