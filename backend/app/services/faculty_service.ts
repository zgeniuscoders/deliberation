import {inject} from "@adonisjs/core";
import {HttpContext} from "@adonisjs/core/http";
import Faculty from "#models/faculty";
import {createFacultyValidator, updateFacultyValidator} from "#validators/faculty_validators";

@inject()
export class FacultyService {

  constructor(
    private ctx: HttpContext
  ) {
  }

  async all() {
    return Faculty
      .query()
      .withCount('majors')
      .preload('majors');
  }

  async create() {
    const data = this.ctx.request.all()

    await createFacultyValidator.validate(data)

    await Faculty.create(data)
  }

  async findById() {
    const id = this.ctx.params.id

    return await Faculty.findOrFail(id)
  }

  async update() {
    const data = this.ctx.request.all()

    await updateFacultyValidator.validate(data)

    const faculty = await this.findById()


  }

  async delete() {
    const faculty = await this.findById()
    await faculty.delete()
  }

}
