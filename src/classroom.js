class Classroom {
    constructor(classroom) {        
      this.id = classroom.id
      this.room_name = classroom.room_name
      this.age = classroom.age
      this.full = classroom.full
      Classroom.all.push(this)
    }
}