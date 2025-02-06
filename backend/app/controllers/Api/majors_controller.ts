import type {HttpContext} from '@adonisjs/core/http'
import {inject} from "@adonisjs/core";
import {MajorService} from "#services/major_service";

@inject()
export default class MajorsController {

  constructor(
    private majorsService: MajorService
  ) {
  }

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const majors = await this.majorsService.all()
    return {
      data: majors
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({}: HttpContext) {
    await this.majorsService.create()
  }

  /**
   * Show individual record
   */
  async show({}: HttpContext) {
    const major = await this.majorsService.findById()
    return {
      data: major
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({}: HttpContext) {

  }

  /**
   * Delete record
   */
  async destroy({}: HttpContext) {
    await this.majorsService.delete()
  }

}
