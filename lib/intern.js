const Employee = require("./Employee");

class Intern extends Employee{

    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getHtml(){      
        return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">Intern</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this.id}</li>
                    <li class="list-group-item">email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">School: ${this.school}</li>
                    </ul>
                </div>`
    }
}

module.exports = Intern;