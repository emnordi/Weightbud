import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Input,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { ChangeEvent, useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import PopupSelector from '../components/PopupSelector/PopupSelector'
import { excercises } from '../components/PopupSelector/Exercises/excercises'
import { addWeightLog } from '../service/WeightLogService'

const AddWeight = () => {
  const [excercise, setExcercise] = useState('')
  const [inputExcercise, setInputExcercise] = useState('')
  const [curdate, setCurdate] = useState<Date>(new Date())
  const [weight, setWeight] = useState<number>(0)
  const [reps, setReps] = useState<number>()

  const handleChange = (newValue: Date | null) => {
    setCurdate(newValue ? newValue : new Date())
  }

  const handleChangeGeneral = (event: any, setState: any) => {
    setState(parseInt(event.target.value))
  }

  return (
    <Box>
      <Stack spacing={2} alignItems="center" justifyContent={'center'}>
        <h1>Add weight for exercise!</h1>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="Exercise date"
            inputFormat="yyyy-MM-dd"
            value={curdate}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: 1 / 3 }} />
            )}
          />
        </LocalizationProvider>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent={'center'}
        >
          <Autocomplete
            options={excercises.map((col) => {
              return col.name
            })}
            value={excercise}
            inputValue={inputExcercise}
            onChange={(event, newValue) => {
              setExcercise(newValue!)
            }}
            onInputChange={(event, newInputValue) => {
              setInputExcercise(newInputValue)
            }}
            sx={{ width: 235, marginLeft: -9 }}
            isOptionEqualToValue={(option, value) => true}
            renderInput={(params) => <TextField {...params} label="Exercise" />}
          />
          <PopupSelector
            setExcercise={setExcercise}
            setInputExcercise={setInputExcercise}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent={'center'}
        >
          <TextField
            label="Weight"
            id="outlined-start-adornment"
            onChange={(e) => handleChangeGeneral(e, setWeight)}
            sx={{ m: 1, width: 1 / 2 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            label="Reps"
            id="outlined-start-adornment"
            onChange={(e) => handleChangeGeneral(e, setReps)}
            sx={{ m: 1, width: 1 / 2 }}
          />
        </Stack>
        <Button
          onClick={() => {
            addWeightLog({
              user_id: '1',
              exercise: excercise,
              weight: weight,
              reps: reps,
              reg_date: curdate,
            })
          }}
        >
          Add
        </Button>
      </Stack>
    </Box>
  )
}

export default AddWeight
