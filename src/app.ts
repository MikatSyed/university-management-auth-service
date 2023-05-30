import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.router'
const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', usersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Sucessfully work!!')
})

export default app
