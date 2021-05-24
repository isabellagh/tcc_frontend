class Child {

    // constructor(child, childAttributes) { 
    //     // debugger       
    //     this.id = child.id             // top level
    //     // debugger                    
    //     this.name = childAttributes.name
    //     this.age = childAttributes.age
    //     this.avatar = childAttributes.avatar
    //     this.classroom = childAttributes.classroom
    //       Child.all.push(this)
    //     //   debugger
    // }

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
              </div>
              <small class="text-muted">${this.classroom.room_name}</small>
            </div>
          </div>
        </div>
        </div>
        </div>
        `

        // return `
        // <div data-id=${this.id}>
        //   <img src=${this.avatar} height="200" width="250">
        //   <h3>${this.name}</h3>
        //   <p>${this.classroom.room_name}</p>
        //   <button data-id=${this.id}>edit</button>
        // </div>
        // <br><br>`;
    }

}

Child.all = [];
