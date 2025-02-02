import Major from "#models/major";
import {inject} from "@adonisjs/core";
import {HttpContext} from "@adonisjs/core/http";
import {createMajorValidator} from "#validators/major_validators";

@inject()
export class MajorService {

  constructor(
    private ctx: HttpContext,
  ) {
  }

  async all(){
    return Major.query()
      .preload('faculty')
  }


  async create(){

    const data = this.ctx.request.all()
    await createMajorValidator.validate(data)

    await Major.create(data)

  }

}
