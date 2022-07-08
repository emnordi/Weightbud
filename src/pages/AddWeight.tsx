import {
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

const AddWeight = () => {
  const [excercise, setExcercise] = useState('')
  const [value, setValue] = useState<Date | null>(new Date())
  const [weight, setWeight] = useState(0)

  const handleChange = (newValue: Date | null) => {
    setValue(newValue)
  }
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(parseInt(event.target.value))
    console.log(weight)
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
        <TextField label="Exercise" value={excercise} />
      </Grid>
      <Grid item xs={6}>
        <PopupSelector setExcercise={setExcercise} />
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
            alert(weight)
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddWeight
