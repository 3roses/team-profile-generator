const Intern = require('../lib/Intern');

describe("Intern class", () => {

    describe("init", () => {

        it("should create an instance of Intern", () => {

            const newIntern = new Intern("Craig", 5, "craig@craig.com", "SMU");
            expect(newIntern.name).toEqual("Craig");
            expect(newIntern.id).toEqual(5);
            expect(newIntern.email).toEqual("craig@craig.com");
            expect(newIntern.school).toEqual("SMU");
        })
    })

    describe("getName", () => {

        it("should return the name of the new Intern", () => {

            const newIntern = new Intern("Craig", 5, "craig@craig.com", "SMU");
            expect(newIntern.getName()).toEqual("Craig");
        })          
    })

    describe("getId", () => {

        it("should return the ID of the new Intern", () => {

            const newIntern = new Intern("Craig", 5, "craig@craig.com", "SMU");
            expect(newIntern.getId()).toEqual(5);
        })           
    })

    describe("geEmail", () => {

        it("should return the email of the new Intern", () => {

            const newIntern = new Intern("Craig", 5, "craig@craig.com", "SMU");
            expect(newIntern.getEmail()).toEqual("craig@craig.com");
        })           
    })

    describe("getRole", () => {

        it("should return Intern", () => {

            const newIntern = new Intern("Craig", 5, "craig@craig.com", "SMU");
            expect(newIntern.getRole()).toEqual("Intern");
        })         
    })

    describe("getSchool", () => {

        it("should return the school of the Intern", () => {

            const newIntern = new Intern("Craig", 5, "craig@craig.com", "SMU");
            expect(newIntern.getSchool()).toEqual("SMU");
        })  
    })

    describe("getHtml", () => {

        it("should return the Html for this Intern card", () => {

            const newIntern = new Intern("Craig", 5, "craig@craig.com", "SMU");
            expect(newIntern.getHtml()).toEqual(

                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Craig</h5>
                    <p class="card-text">Intern</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 5</li>
                    <li class="list-group-item">email: <a href="mailto:craig@craig.com">craig@craig.com</a></li>
                    <li class="list-group-item">School: SMU</li>
                    </ul>
                </div>`
            );
        })
    })
})


