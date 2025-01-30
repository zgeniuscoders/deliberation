import type { HttpContext } from '@adonisjs/core/http'
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
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
