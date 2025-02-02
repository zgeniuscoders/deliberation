import {inject} from "@adonisjs/core";
import {HttpContext} from "@adonisjs/core/http";
import Category from "#models/category";
import {createCategoryValidator} from "#validators/category_validators";

@inject()
export class CategoryService {

  constructor(
    private ctx: HttpContext,
  ) {
  }

  async all() {
    return Category
      .all()
  }


  async create() {

    const data = this.ctx.request.all()
    await createCategoryValidator.validate(data)

    await Category.create(data)

  }

  async findCategoryById(){
    const id = this.ctx.params.id
    return await Category.findOrFail(id)
  }

}
