import express, { Application } from 'express'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/users.router'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', UserRoutes)

// app.get('/',(req: Request, res: Response, next: NextFunction) => {
// //   Promise.reject(new Error('Umhandled Promise Rejection'))
// //   throw new Error('I got error')
// //   throw new ApiError(400,'I got error')
//   next('Error Happen Man!')})

app.use(globalErrorHandler)

export default app
