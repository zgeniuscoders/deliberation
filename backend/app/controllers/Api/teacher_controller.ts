import type { HttpContext } from '@adonisjs/core/http'
import {inject} from "@adonisjs/core";
import {TeacherService} from "#services/teacher_service";
import {PersonService} from "#services/person_service";

@inject()
export default class TeacherController {
  constructor(
    private teacherService: TeacherService,
    private personService: PersonService
  ) {
  }

  async index({}: HttpContext) {
    return await this.teacherService.all()
  }

  async store({}: HttpContext) {
    const person = await this.personService.create()

    await this.teacherService.create(person.id)
  }

  async show({}: HttpContext) {
    return await this.teacherService.findTeacherById()
  }

}
