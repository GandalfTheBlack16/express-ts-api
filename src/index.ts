import express from 'express'
import { healthCheckRouter } from './routes/HealthCheck'

const app = express()

app.use('/health', healthCheckRouter)

app.listen(process.env.PORT ?? 3000, () => {
  console.log('Application running on port', process.env.PORT ?? 3000)
})
