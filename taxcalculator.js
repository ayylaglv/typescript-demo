var TaxCalculator = /** @class */ (function () {
    function TaxCalculator(salary, name, company) {
        this.salary = salary;
        this.name = name;
        this.company = company;
    }
    TaxCalculator.prototype.calculator = function () {
        var tax;
        if (this.salary > 0 && this.salary < 40000) {
            tax = 0;
        }
        else if (this.salary > 40000 && this.salary < 80000) {
            tax = (this.salary - 40000) * 0.15;
        }
        else if (this.salary > 80000 && this.salary < 240000) {
            tax = (this.salary - 80000) * 0.17 + 40000 * 0.15;
        }
        else if (this.salary > 240000 && this.salary < 540000) {
            tax = (this.salary - 240000) * 0.18 + 40000 * 0.15 + 160000 * 0.17;
        }
        else if (this.salary > 540000 && this.salary < 1000000) {
            tax =
                (this.salary - 540000) * 0.22 +
                    40000 * 0.15 +
                    160000 * 0.17 +
                    300000 * 0.18;
        }
        else {
            console.log("ERRORRRR");
        }
        return tax;
    };
    return TaxCalculator;
}());
var employee = new TaxCalculator(210000, "Sydney", "Barclays");
console.log("Tax calculated for ".concat(employee.name, " is ").concat(employee.calculator()));
var employee2 = new TaxCalculator(-80000, "Sydney", "Barclays");
console.log("Tax calculated for ".concat(employee2.name, " is ").concat(employee2.calculator()));
