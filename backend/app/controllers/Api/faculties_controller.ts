// import type { HttpContext } from '@adonisjs/core/http'

import {inject} from "@adonisjs/core";
import {FacultyService} from "#services/faculty_service";
import type {HttpContext} from "@adonisjs/core/http";

@inject()
export default class FacultiesController {

  constructor(
    private facultyService: FacultyService
  ) {
  }

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const faculties = await this.facultyService.all()
    return {
      "data": faculties
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({}: HttpContext) {
    await this.facultyService.create()
  }

  /**
   * Show individual record
   */
  async show({}: HttpContext) {
    return this.facultyService.findById()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({}: HttpContext) {
    await this.facultyService.update()
  }

  /**
   * Delete record
   */
  async destroy({}: HttpContext) {
    await this.facultyService.delete()
  }

}
