class Laptop {
  serialId: string;
  model: string;
  color: string;
  isNew: boolean;

  constructor(serialId: string, model: string, color: string, isNew: boolean) {
    if (serialId.length < 10) {
      console.log("serial id is invalid");
      throw new Error();
    }

    this.serialId = serialId;
    this.model = model;
    this.color = color;
    this.isNew = isNew;
  }
}

let oyster = new Laptop("341098799987655678", "MAC", "space grey", true);

console.log(JSON.stringify(oyster));
