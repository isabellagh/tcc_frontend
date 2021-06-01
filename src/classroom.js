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
      <span class="classroomCard" id="${this.id}>
      <div id="classroomCard" class="card-group" style="width: 18rem;">
        <div id="classroomInputs" class="card mb-4 shadow-sm">
          <img src="https://playtolearnpreschool.us/wp-content/uploads/2015/07/IMG_4277-1024x732.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.room_name}</h5>
            <h5 class="card-title">Teacher: ${this.teacher_name}</h5>
            <p class="card-text">Age group: ${this.age}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div id="buttonsList" class="btn-group">
                <ul>
                <button value=${this.id} id="delete-classroom-button" type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                <ul/>
            </div>
            </div>
          </div>
        </div>
      </div>
      <span/>`
    }

    static findById(id) {
        return this.all.find(classroom => classroom.id === id);
    }

    // renderUpdateForm() {
    //     return `
    //     <form id="create-classroom-form" class="row g-3">
    //     <div class="col-12">
    //       <label for="roomNameInput" class="form-label"></label>
    //       <input type="text" value="${this.room_name}" class="form-control" id="input-room-name" placeholder="Classroom's name">
    //     </div>
    //     <div class="col-12">
    //       <label for="classroomAgeInput" class="form-label"></label>
    //       <input type="text" value="${this.age}" class="form-control" id="classroom-input-age" placeholder="Classroom's age range">
    //     </div>
    //     <div class="col-12">
    //       <label for="teacherNameInput" class="form-label"></label>
    //       <input type="text" value="${this.teacher_name}" class="form-control" id="input-teacher-name" placeholder="Classroom's teacher">
    //     </div>
    //     <div class="col-12">
    //       <br>
    //       <button type="submit" class="btn btn-primary">Add a classroom</button>
    //     </div>
    //   </form>
    //     `
    // }


    // <button id="view-button" type="button" class="btn btn-sm btn-outline-secondary">View</button>
    // <button value=${this.id} id="edit-classroom-button" type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                
}

Classroom.all = [];
