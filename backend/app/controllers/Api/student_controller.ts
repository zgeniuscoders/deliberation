import type { HttpContext } from '@adonisjs/core/http'
import {inject} from "@adonisjs/core";
import {PersonService} from "#services/person_service";
import {StudentService} from "#services/student_service";

@inject()
export default class StudentController {
  constructor(
    private studentService: StudentService,
    private personService: PersonService
  ) {
  }

  async index({}: HttpContext) {
    return await this.studentService.all()
  }

  async store({}: HttpContext) {
    const person = await this.personService.create()

    await this.studentService.create(person.id)
  }

  async show({}: HttpContext) {
    return await this.studentService.findStudentById()
  }

}
