import {inject} from "@adonisjs/core";
import {HttpContext} from "@adonisjs/core/http";
import Person from "#models/person";
import {createPersonValidator} from "#validators/person_validators";

@inject()
export class PersonService {

  constructor(
    private ctx: HttpContext,
  ) {
  }


  async create() {

    const data = this.ctx.request.all()

    await createPersonValidator.validate(data)

    return await Person.create(data)

  }


}
