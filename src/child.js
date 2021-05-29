class Child {

    constructor(child) {        
        this.id = child.id
        this.name = child.attributes.name
        this.age = child.attributes.age
        this.avatar = child.attributes.avatar
        this.classroom = child.attributes.classroom
          Child.all.push(this)
        //   debugger
    }

    renderChildInfo() {
        // debugger
      return `
      <div class="card" style="width: 18rem;">
        <div class="card mb-4 shadow-sm">
          <img src=${this.avatar} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Age: ${this.age}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                <button type="button" name="delete" class="btn btn-sm btn-outline-secondary">Delete</button>
              </div>
              <small class="text-muted">${this.classroom.room_name}</small>
            </div>
          </div>
        </div>
        </div>
        </div>`
    }

    
    formAddNewChild() {
        return ``
    }

}

Child.all = [];
