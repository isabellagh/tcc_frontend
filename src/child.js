class Child {
  constructor(child) {
    this.id = child.id;
    this.name = child.attributes.name;
    this.avatar = child.attributes.avatar;
    this.age = child.attributes.age;
    this.classroom = child.attributes.classroom;
    Child.all.push(this);
  }

  renderChildInfo() {
    // debugger
    return `
      <span class="classroom-container" id=${this.id}>
      <div id="childCard" class="classroom-wrapper" style="width: 18rem;">
        <div id="childInputs" class="classroom-card">
          <img src=${this.avatar} class="classroom-img" alt="...">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-title">Age: ${this.age}</p>
          <small class="text-muted">${this.classroom.room_name}</small>
          <button data-id=${this.id} id="delete-child-button" type="button" class="classroom-delete-btn">Delete Child Info</button> 
        </div>
       </div>
      <span/>`;
  }
}

Child.all = [];
