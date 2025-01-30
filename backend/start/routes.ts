/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import MajorsController from "#controllers/Api/majors_controller";


router.get('/', [MajorsController, 'index'])
