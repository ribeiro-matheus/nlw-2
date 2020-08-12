import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()
const classesControllers = new ClassesController()
const connectionscontroller = new ConnectionsController

routes.get('/class', classesControllers.index )
routes.post('/class', classesControllers.create )

routes.get('/connections', connectionscontroller.index)
routes.post('/connections', connectionscontroller.create)

export default routes