const Employee = require('../lib/Employee');

describe("Employee class", () => {

    describe("init", () => {

        it("should create an instance of employee", () => {

            const newEmployee = new Employee("Craig", 5, "craig@craig.com");
            expect(newEmployee.name).toEqual("Craig");
            expect(newEmployee.id).toEqual(5);
            expect(newEmployee.email).toEqual("craig@craig.com");
        })
    })

    describe("getName", () => {

        it("should return the name of the new employee", () => {

            const newEmployee = new Employee("Craig", 5, "craig@craig.com");
            expect(newEmployee.getName()).toEqual("Craig");
        })           
    })

    describe("getId", () => {

        it("should return the ID of the new employee", () => {

            const newEmployee = new Employee("Craig", 5, "craig@craig.com");
            expect(newEmployee.getId()).toEqual(5);
        })            
    })

    describe("geEmail", () => {

        it("should return the email of the new employee", () => {

            const newEmployee = new Employee("Craig", 5, "craig@craig.com");
            expect(newEmployee.getEmail()).toEqual("craig@craig.com");
        })           
    })

    describe("getRole", () => {

        it("should return Employee", () => {

            const newEmployee = new Employee("Craig", 5, "craig@craig.com");
            expect(newEmployee.getRole()).toEqual("Employee");
        })           
    })
})


