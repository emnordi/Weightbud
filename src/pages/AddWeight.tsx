import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Input,
  InputAdornment,
  TextField,
} from '@mui/material'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { ChangeEvent, useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import PopupSelector from '../components/PopupSelector/PopupSelector'
import { excercises } from '../components/PopupSelector/Exercises/excercises'

const AddWeight = () => {
  const [excercise, setExcercise] = useState('')
  const [inputExcercise, setInputExcercise] = useState('')
  const [value, setValue] = useState<Date | null>(new Date())
  const [weight, setWeight] = useState(0)

  const handleChange = (newValue: Date | null) => {
    setValue(newValue)
  }
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(parseInt(event.target.value))
  }
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setExcercise(event.target.value)
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1>Add weight for exercise!</h1>
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="Exercise date"
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6}>
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
          sx={{ width: 200 }}
          isOptionEqualToValue={(option, value) => true}
          renderInput={(params) => <TextField {...params} label="Exercise" />}
        />
      </Grid>
      <Grid item xs={6}>
        <PopupSelector
          setExcercise={setExcercise}
          setInputExcercise={setInputExcercise}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Weight"
          id="outlined-start-adornment"
          onChange={handleChange2}
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            alert(excercise)
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddWeight
