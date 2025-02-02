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
    return this.majorsService.all()
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
  }

  /**
   * Handle form submission for the edit action
   */
  async update({}: HttpContext) {
  }

}
