import {inject} from "@adonisjs/core";
import {HttpContext} from "@adonisjs/core/http";
import Student from "#models/student";
import {createStudentValidator} from "#validators/student_validators";

@inject()
export class StudentService {

  constructor(
    private ctx: HttpContext,
  ) {
  }

  async all() {
    return Student
      .query()
      .preload('user')
      .preload('person')
      .preload('major')
  }


  async create(personId: number) {

    const data = this.ctx.request.all()

    const {majorId} = await createStudentValidator.validate(data)

    const student = {peopleId: personId, userId: 1, majorId: majorId}

    await Student.create(student)
  }

  async findStudentById() {

    const id = this.ctx.params.id

    const student = await Student.findOrFail(id)

    await student.load('person')
    await student.load('major')

    return student

  }

}
