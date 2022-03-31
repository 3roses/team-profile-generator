const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer';
    }
    getHtml(){      
        return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this.id}</li>
                    <li class="list-group-item">email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="${this.gitHub}">${this.gitHub}</a></li>
                    </ul>
                </div>`
    }
}

module.exports = Engineer;