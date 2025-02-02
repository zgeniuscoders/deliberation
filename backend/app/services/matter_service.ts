import {inject} from "@adonisjs/core";
import {HttpContext} from "@adonisjs/core/http";
import Matter from "#models/matter";
import {createMatterValidator} from "#validators/matter_validators";

@inject()
export class MatterService {

  constructor(
    private ctx: HttpContext,
  ) {
  }

  async all() {
    return Matter
      .all()
  }


  async create() {

    const data = this.ctx.request.all()
    await createMatterValidator.validate(data)

    await Matter.create(data)

  }

  async findMatterById(){

    const id = this.ctx.params.id

    const matter = await Matter.findOrFail(id)
    await matter.load('courses', (query) => {
      query.preload('teacher')
    })

    return matter

  }

}
