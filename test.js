var Laptop = /** @class */ (function () {
    function Laptop(serialId, model, color, isNew) {
        if (serialId.length < 10) {
            console.log("serial id is invalid");
            throw new Error();
        }
        this.serialId = serialId;
        this.model = model;
        this.color = color;
        this.isNew = isNew;
    }
    return Laptop;
}());
var oyster = new Laptop("341098799987655678", "MAC", "space grey", true);
console.log(JSON.stringify(oyster));
