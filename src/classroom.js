class Classroom {
  constructor(classroom) {
    this.id = classroom.id;
    // debugger
    this.room_name = classroom.attributes.room_name;
    this.age = classroom.attributes.age;
    this.teacher_name = classroom.attributes.teacher_name;
    this.full = classroom.attributes.full;
    Classroom.all.push(this);
  }

  renderClassroomTable() {
    // debugger
    return `
      <span class="classroom-container" id="${this.id}">
      <div id="classroomCard" class="classroom-wrapper" style="width: 18rem;">
        <div id="classroomInputs" class="classroom-card">
          <img src="https://playtolearnpreschool.us/wp-content/uploads/2015/07/IMG_4277-1024x732.jpg" class="classroom-img" alt="...">
          <h5 class="card-title">${this.room_name}</h5>
          <h5 class="card-title">Teacher: ${this.teacher_name}</h5>
          <p class="card-text">Age group: ${this.age}</p>
          <button data-id=${this.id} id="delete-classroom-button" type="button" class="classroom-delete-btn">Delete Classroom</button>
        </div>
      </div>
      <span/>`;
  }
}

Classroom.all = [];
