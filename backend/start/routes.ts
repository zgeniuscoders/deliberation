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
import FacultiesController from "#controllers/Api/faculties_controller";
import CategoriesController from "#controllers/Api/categories_controller";
import SemestersController from "#controllers/Api/semesters_controller";
import MattersController from "#controllers/Api/matters_controller";
import TeacherController from "#controllers/Api/teacher_controller";
import StudentController from "#controllers/Api/student_controller";

router.resource('majors', MajorsController)
router.resource('faculties', FacultiesController)
router.resource('categories', CategoriesController)
router.resource('semesters', SemestersController)
router.resource('matters', MattersController)
router.resource('teachers', TeacherController)
router.resource('students', StudentController)
