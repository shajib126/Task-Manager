
const router = require('express').Router()
const { createTask, deleteTask, updateStatus, getTaskByStatus, taskStatusCount } = require('../controllers/taskControllers')
const { auth } = require('../middleware/authMiddleWare')


    router.post('/create',auth,createTask)
    router.get('/delete/:id',auth,deleteTask)
    router.get('/:status',auth,getTaskByStatus)
    router.get('/update/:id/:status',auth,updateStatus)
    router.get('/task/count',auth,taskStatusCount)

module.exports = router