const Employee = require("./Employee");

class Manager extends Employee{

    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return this.manager
    }
    getHtml(){      
        return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="./css/style.css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                    <title>Team Info</title>
                </head>
                <body>
        
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                        <h1 class="display-4">Meet the Team</h1>
                        <p class="lead"></p>
                        </div>
                    </div>
                    
                    <div class="row padding">
                
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">Manager</p>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">email: <a href="mailto:${this.email}">${this.email}</a></li>
                            <li class="list-group-item">Office number: ${this.officeNumber}</li>
                            </ul>
                        </div>`
    }
}


module.exports = Manager;