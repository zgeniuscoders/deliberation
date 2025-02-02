import {inject} from "@adonisjs/core";
import {HttpContext} from "@adonisjs/core/http";
import Teacher from "#models/teacher";

@inject()
export class TeacherService {

  constructor(
    private ctx: HttpContext,
  ) {
  }

  async all() {
    return Teacher
      .query()
      .preload('person')
  }


  async create(personId: number) {
    const data = {
      peopleId: personId
    }
    await Teacher.create(data)
  }

  async findTeacherById() {

    const id = this.ctx.params.id

    const teacher = await Teacher.findOrFail(id)

    await teacher.load('majors', (query) => {
      query.preload('matters', (matters) => {
        matters.preload('courses', (courses) => {
          courses.where('teacher_id', teacher.id)
        })
      })
    })

    return teacher

  }

}
