import { Router } from 'express'

export const healthCheckRouter = Router()
  .get('/', (req, res) => {
    res.json({
      serviceName: 'express-ts-api',
      status: 'UP'
    })
  })
