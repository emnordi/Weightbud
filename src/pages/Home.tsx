import { Grid } from '@mui/material'
import { getWeightlogs } from '../service/WeightLogService'

interface Props {
  text: string
}

const Home = ({ text }: Props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Welcome to WeighTrackr, bud!</h1>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
