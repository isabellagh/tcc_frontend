class Classroom {
    constructor(classroom) {        
        this.id = classroom.id
        // debugger
        this.room_name = classroom.attributes.room_name
        this.age = classroom.attributes.age
        this.teacher_name = classroom.attributes.teacher_name
        this.full = classroom.attributes.full
        Classroom.all.push(this)
        //   debugger
    }

    renderClassroomTable() {
        // debugger

       return `
      <div class="card-group" >
      <div class="card">
      <img src="https://playtolearnpreschool.us/wp-content/uploads/2015/07/IMG_4277-1024x732.jpg" class="card-img-top" alt="...">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${this.room_name}</h5>
            <h5 class="card-title">Teacher: ${this.teacher_name}</h5>
            <p class="card-text">Age group: ${this.age}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>`
    }
}

Classroom.all = [];
