import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "Mark Rofae;",
      phone: "7142305149",
      title: "Heat Trace Designer",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("Mark Rofael");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("Mark Rofael");
    expect(employee.phone).toEqual("7142305149");
    expect(employee.title).toEqual("Heat Trace Designer");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
    it("cancelling an edit of an existing employee", async () => {
      await em.selectEmployeeByName("Bernice Ortiz");
      await em.editEmployee({ title: "Grand Poobah" });
      await em.cancelChanges();
      let employee = await em.getEmployeeInfo();
      expect(employee).toEqual({
        id: 1,
        name: "Bernice Ortiz",
        phone: "4824931093",
        title: "CEO",
      });
      it("editing and then navigating away without saving does not save changes.", async () => {
        await em.selectEmployeeByName("Bernice Ortiz");
        await em.editEmployee({ title: "Grand Poobah" });
        await em.selectEmployeeByName("Phillip Weaver");
        await em.selectEmployeeByName("Bernice Ortiz");
        let employee = await em.getEmployeeInfo();
        expect(employee).toEqual({
          id: 1,
          name: "Bernice Ortiz",
          phone: "4824931093",
          title: "CEO",
        });
      });
    });
  });
});
