const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {

    describe("init", () => {

        it("should create an instance of Engineer", () => {

            const newEngineer = new Engineer("Craig", 5, "craig@craig.com", "github.com/craig345");
            expect(newEngineer.name).toEqual("Craig");
            expect(newEngineer.id).toEqual(5);
            expect(newEngineer.email).toEqual("craig@craig.com");
            expect(newEngineer.gitHub).toEqual("github.com/craig345");
        })
    })

    describe("getName", () => {

        it("should return the name of the new Engineer", () => {

            const newEngineer = new Engineer("Craig", 5, "craig@craig.com", "github.com/craig345");
            expect(newEngineer.getName()).toEqual("Craig");
        })
    })

    describe("getId", () => {

        it("should return the ID of the new Engineer", () => {

            const newEngineer = new Engineer("Craig", 5, "craig@craig.com", "github.com/craig345");
            expect(newEngineer.getId()).toEqual(5);
        })           
    })

    describe("geEmail", () => {

        it("should return the email of the new Engineer", () => {

            const newEngineer = new Engineer("Craig", 5, "craig@craig.com", "github.com/craig345");
            expect(newEngineer.getEmail()).toEqual("craig@craig.com");
        })          
    })

    describe("getRole", () => {

        it("should return Engineer", () => {

            const newEngineer = new Engineer("Craig", 5, "craig@craig.com", "github.com/craig345");
            expect(newEngineer.getRole()).toEqual("Engineer");
        })           
    })

    describe("getGitHub", () => {

        it("should return the GitHub of the Engineer", () => {

            const newEngineer = new Engineer("Craig", 5, "craig@craig.com", "github.com/craig345");
            expect(newEngineer.getGitHub()).toEqual("github.com/craig345");
        })           
    })

    describe("getHtml", () => {

        it("should return the HTML for this Engineer", () => {

            const newEngineer = new Engineer("Craig", 5, "craig@craig.com", "github.com/craig345");
            expect(newEngineer.getHtml()).toEqual(

                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Craig</h5>
                    <p class="card-text">Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 5</li>
                    <li class="list-group-item">email: <a href="mailto:craig@craig.com">craig@craig.com</a></li>
                    <li class="list-group-item">GitHub: <a href="github.com/craig345">github.com/craig345</a></li>
                    </ul>
                </div>`
            );
        })
    })
})


