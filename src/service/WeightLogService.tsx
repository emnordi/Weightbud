import { Weightlog } from '../types/weightlog'

export async function getWeightlogs(
  userId: string,
  regDate: string | null,
): Promise<Weightlog[]> {
  const wdate = regDate ? '&reg_date=' + regDate : ''
  const response = await fetch('/weightlog?user_id=1' + wdate)
  return await response.json()
}

function requestOptions(messageBody: string) {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: messageBody,
  }
}
export async function addWeightLog(messageBody: Weightlog): Promise<any> {
  console.log(messageBody)
  const response = await fetch(
    '/weightlog/insert',
    requestOptions(JSON.stringify(messageBody)),
  )
  return await response.json()
}
