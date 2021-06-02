class Child {

    constructor(child) {        
        this.id = child.id
        this.name = child.attributes.name
        this.avatar = child.attributes.avatar
        this.age = child.attributes.age
        this.classroom = child.attributes.classroom
          Child.all.push(this)
        //   debugger
    }

    // static findById(id) {
    //     return this.all.find(child => child.id === id);
    // }

    renderChildInfo() {
        // debugger
      return `
      <span class="childCard" id=${this.id}>
      <div id="childCard" class="card-group" style="width: 18rem;">
        <div id="childInputs" class="card mb-4 shadow-sm"" style="width: 18rem;">
          <img src=${this.avatar} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Age: ${this.age}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button data-id=${this.id} id="delete-child-button" type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
              </div>
              <small class="text-muted">${this.classroom.room_name}</small>
            </div>
          </div>
        </div>
      </div>
      </div>
      <span/>`
    }

    // renderUpdateForm() {
    //     return `
    //     <form data-id=${this.id}>
    //       <label>Name</label>
    //       <p>
    //         <input type="text" value="${this.name}">
    //       </p>
    //       <label>Age</label>
    //       <p>
    //         <input type="text" value="${this.age}">
    //       </p>
    //       <label for="classrooms">Choose a classroom:</label>
    //         <select id="select-classroom" name="classrooms">
    //           <input type="text" value="${this.classroom}" />
    //         </select>
    //       <button type='submit'>Save Info</button>
    //     </form>
    //     `
    // }

    // <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
    // <button data-id=${this.id}type="button" class="btn btn-sm btn-outline-secondary">Edit</button>


}

Child.all = [];

