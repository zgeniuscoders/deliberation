import Major from "#models/major";

export class MajorService {
  async all(){
    return Major.all()
  }
}
