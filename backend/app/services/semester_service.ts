import {inject} from "@adonisjs/core";
import {HttpContext} from "@adonisjs/core/http";
import {createSemesterValidator} from "#validators/semester_validators";
import Semester from "#models/semester";

@inject()
export class SemesterService {

  constructor(
    private ctx: HttpContext,
  ) {
  }

  async all() {
    return Semester
      .all()
  }


  async create() {

    const data = this.ctx.request.all()
    await createSemesterValidator.validate(data)

    await Semester.create(data)

  }

  async findSemesterById(){

    const id = this.ctx.params.id

    const semester = await Semester.findOrFail(id)
    await semester.load('matters', (query) => {
      query.preload('courses')
    })

    return semester

  }

}
