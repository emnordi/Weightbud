import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'
import GetExcercisesFromMg from './Exercises/excercises'

interface Props {
  setExcercise: any
}

const PopupSelector = ({ setExcercise }: Props) => {
  const [open, setOpen] = useState(false)
  const [muscleGroup, setMuscleGroup] = useState<string>('')
  const [tempExcersize, setTempExcercise] = useState('')

  const handleChange = (event: SelectChangeEvent<typeof muscleGroup>) => {
    setMuscleGroup(event.target.value)
  }

  const onChange = (event: { target: { value: any } }, child: any) => {
    setTempExcercise(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string,
  ) => {
    if (reason !== 'backdropClick') {
      setExcercise(tempExcersize)
      setOpen(false)
    }
  }
  return (
    <div>
      <Button onClick={handleClickOpen}>Choose Excercise</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel htmlFor="demo-dialog-native">Muscle Group</InputLabel>
              <Select
                native
                value={muscleGroup}
                onChange={handleChange}
                input={
                  <OutlinedInput label="muscle group" id="demo-dialog-native" />
                }
              >
                <option aria-label="None" value="" />
                <option value="abs">Abs</option>
                <option value="back">Back</option>
                <option value="chest">Chest</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Exercise</InputLabel>
              <GetExcercisesFromMg
                tempExcersize={tempExcersize}
                onChange={onChange}
                muscleGroup={muscleGroup}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PopupSelector
