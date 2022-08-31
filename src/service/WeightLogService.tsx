export async function getWeightlogs(): Promise<any> {
  const response = await fetch('/weightlog')
  return await response.json()
}

export async function addWeightLog(): Promise<any> {
  const response = await fetch('/weightlog')
  return await response.json()
}
