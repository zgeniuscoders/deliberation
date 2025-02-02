import type { HttpContext } from '@adonisjs/core/http'
import {inject} from "@adonisjs/core";
import {CategoryService} from "#services/category_service";

@inject()
export default class CategoriesController {
  constructor(
    private categoryService: CategoryService
  ) {
  }

  async index({}: HttpContext) {
    return await this.categoryService.all()
  }

  async store({}: HttpContext) {
    await this.categoryService.create()
  }

  async show({}: HttpContext) {
    return await this.categoryService.findCategoryById()
  }

}
