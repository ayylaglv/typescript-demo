class TaxCalculator {
  salary: number;
  name: string;
  company: string;

  constructor(salary: number, name: string, company: string) {
    this.salary = salary;
    this.name = name;
    this.company = company;
  }

  calculator() {
    var tax;
    if (this.salary > 0 && this.salary < 40000) {
      tax = 0;
    } else if (this.salary > 40000 && this.salary < 80000) {
      tax = (this.salary - 40000) * 0.15;
    } else if (this.salary > 80000 && this.salary < 240000) {
      tax = (this.salary - 80000) * 0.17 + 40000 * 0.15;
    } else if (this.salary > 240000 && this.salary < 540000) {
      tax = (this.salary - 240000) * 0.18 + 40000 * 0.15 + 160000 * 0.17;
    } else if (this.salary > 540000 && this.salary < 1000000) {
      tax =
        (this.salary - 540000) * 0.22 +
        40000 * 0.15 +
        160000 * 0.17 +
        300000 * 0.18;
    } else {
      console.log("ERRORRRR");
    }

    return tax;
  }
}

let employee = new TaxCalculator(210000, "Sydney", "Barclays");
console.log(`Tax calculated for ${employee.name} is ${employee.calculator()}`);
let employee2 = new TaxCalculator(-80000, "Sydney", "Barclays");
console.log(
  `Tax calculated for ${employee2.name} is ${employee2.calculator()}`
);
