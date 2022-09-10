import Paper from '@mui/material/Paper'
import { VictoryChart, VictoryLine } from 'victory'
import { Weightlog } from '../types/weightlog'

interface IDataItem {
  month: string
  sale: number
  total: number
}

const chartData: IDataItem[] = [
  { month: 'Jan', sale: 50, total: 987 },
  { month: 'Feb', sale: 100, total: 3000 },
  { month: 'March', sale: 30, total: 1100 },
  { month: 'April', sale: 107, total: 7100 },
  { month: 'May', sale: 95, total: 4300 },
  { month: 'June', sale: 150, total: 7500 },
]

const Overview = () => {
  //const [data, setData] = React.useState<Weightlog[]>([])
  /*const getData = async () => {
    setData(await getWeightlogs('1', null))
  }*/
  /*  React.useEffect(() => {
    getData()
  })*/
  const dat2: Weightlog[] = [
    {
      exercise: 'Benchpress',
      id: '56d46c07-3080-11ed-b8a0-2cf05d08efad',
      reg_date: new Date('Thu, 01 Sep 2022 19:39:31 GMT'),
      reps: 12,
      user_id: '1',
      weight: 22.0,
    },
    {
      exercise: 'Alternate Hammer Curl',
      id: '5f1710a7-3080-11ed-b8a0-2cf05d08efad',
      reg_date: new Date('Fri, 02 Sep 2022 19:39:31 GMT'),
      reps: 12,
      user_id: '1',
      weight: 23.0,
    },
    {
      exercise: 'Alternate Hammer Curl',
      id: 'ca70638b-2a1f-11ed-b8a0-2cf05d08efad',
      reg_date: new Date('Sat, 03 Sep 2022 19:39:31 GMT'),
      reps: 12,
      user_id: '1',
      weight: 24.0,
    },
    {
      exercise: 'Ab Crunch Machine',
      id: 'cfa2aec6-2a1f-11ed-b8a0-2cf05d08efad',
      reg_date: new Date('Sun, 04 Sep 2022 19:39:31 GMT'),
      reps: 12,
      user_id: '1',
      weight: 25.0,
    },
    {
      exercise: 'Decline benchpress',
      id: 'd1812d79-2a1f-11ed-b8a0-2cf05d08efad',
      reg_date: new Date('Mon, 05 Sep 2022 19:39:31 GMT'),
      reps: 12,
      user_id: '1',
      weight: 26.0,
    },
  ]

  const data3 = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
    { argument: 4, value: 20 },
  ]

  return (
    <VictoryChart width={400} height={200}>
      <VictoryLine data={dat2} x={'reg_date'} y={'weight'} />
    </VictoryChart>
  )
}

export default Overview
