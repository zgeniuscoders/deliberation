import type { HttpContext } from '@adonisjs/core/http'
import {inject} from "@adonisjs/core";
import {SemesterService} from "#services/semester_service";

@inject()
export default class SemestersController {
  constructor(
    private semesterService: SemesterService
  ) {
  }

  async index({}: HttpContext) {
    return await this.semesterService.all()
  }

  async store({}: HttpContext) {
    await this.semesterService.create()
  }

  async show({}: HttpContext) {
    return await this.semesterService.findSemesterById()
  }

}
