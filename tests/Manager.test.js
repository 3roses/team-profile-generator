const Manager = require('../lib/Manager');

describe("Manager class", () => {

    describe("init", () => {

        it("should create an instance of Manager", () => {

            const newManager = new Manager("Craig", 5, "craig@craig.com", 3);
            expect(newManager.name).toEqual("Craig");
            expect(newManager.id).toEqual(5);
            expect(newManager.email).toEqual("craig@craig.com");
            expect(newManager.officeNumber).toEqual(3);
        })
    })

    describe("getName", () => {

        it("should return the name of the new Manager", () => {
            
            const newManager = new Manager("Craig", 5, "craig@craig.com", 3);
            expect(newManager.getName()).toEqual("Craig");
        })
    })

    describe("getId", () => {

        it("should return the ID of the new Manager", () => {

            const newManager = new Manager("Craig", 5, "craig@craig.com", 3);
            expect(newManager.getId()).toEqual(5);
        })
    })

    describe("geEmail", () => {

        it("should return the email of the new Manager", () => {

            const newManager = new Manager("Craig", 5, "craig@craig.com", 3);
            expect(newManager.getEmail()).toEqual("craig@craig.com");
        })
    })

    describe("getRole", () => {

        it("should return Manager", () => {

            const newManager = new Manager("Craig", 5, "craig@craig.com", 3);
            expect(newManager.getRole()).toEqual("Manager");
        })
    })

    describe("getOfficeNumber", () => {

        it("should return office number of the Manager", () => {

            const newManager = new Manager("Craig", 5, "craig@craig.com", 3);
            expect(newManager.getOfficeNumber()).toEqual(3);
        })
    })

    describe("GetHtml", () => {

        it("should return the HTML for the manager card as well as all HTML that comes before that card", () => {

            const newManager = new Manager("Craig", 5, "craig@craig.com", 3)
            expect(newManager.getHtml()).toEqual(

                `<!DOCTYPE html>
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
                            <h5 class="card-title">Craig</h5>
                            <p class="card-text">Manager</p>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 5</li>
                            <li class="list-group-item">email: <a href="mailto:craig@craig.com">craig@craig.com</a></li>
                            <li class="list-group-item">Office number: 3</li>
                            </ul>
                        </div>`
            )
        })
    })
})


