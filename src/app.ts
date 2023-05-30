import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: any) => {
  res.send('Working Sucessfully!')
})

export default app
