const express = require('express')
const router = express.Router()
const {getGoals} = require('../controllers/goalController')
const {setGoals} = require('../controllers/goalController')
const {updateGoals} = require('../controllers/goalController')
const {deleteGoals} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(updateGoals)

module.exports =router 