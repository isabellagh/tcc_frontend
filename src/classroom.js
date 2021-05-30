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
       <span class="classroomCard" id=${this.id}>
      <div id="classroomCard" class="card-group" style="width: 18rem;">
        <div class="card mb-4 shadow-sm">
        <img src="https://playtolearnpreschool.us/wp-content/uploads/2015/07/IMG_4277-1024x732.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.room_name}</h5>
            <h5 class="card-title">Teacher: ${this.teacher_name}</h5>
            <p class="card-text">Age group: ${this.age}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div id="buttonsList" class="btn-group">
                <ul>
                <button id="view-button" type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button id="edit-classroom-button" type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                <button id="delete-classroom-button" type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
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

    renderUpdateForm() {
        return `
        <form classroom-edit-id=${this.id}>
          <label>Room name</label>
          <p>
            <input type="text" value="${this.room_name}" >
          </p>
          <label>Teacher name</label>
          <p>
            <input type="text" value="${this.teacher_name}" >
          </p>
          <button type='submit'>Save</button>
        </form>
        `
    }

}

Classroom.all = [];
