export class Product {
  constructor(id, name, description, price,) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getItemCount() {
    return this.items.length;
  }

  getItems() {
    return this.items;
  }
}
