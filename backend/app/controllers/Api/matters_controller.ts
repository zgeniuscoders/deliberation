import type { HttpContext } from '@adonisjs/core/http'
import {inject} from "@adonisjs/core";
import {MatterService} from "#services/matter_service";

@inject()
export default class MattersController {
  constructor(
    private matterService: MatterService
  ) {
  }

  async index({}: HttpContext) {
    const matters = await this.matterService.all()
    return {
      data: matters
    }
  }

  async store({}: HttpContext) {
    await this.matterService.create()
  }

  async show({}: HttpContext) {
    return await this.matterService.findMatterById()
  }

}
