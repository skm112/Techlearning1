export class User {
  name: string;
  state: string;
  city: string;
  phone: number;
  id?: number = 0;

  copy(): User {
    let obj = new User();
    obj.id=this.id;
    obj.name=this.name;
    obj.state=this.state;
    obj.city=this.city;
    obj.phone=this.phone;
    return obj;
  }

  clear() {
    this.name = "";
    this.state = "";
    this.city = "";
    this.phone = null;
    this.id = 0;
  }
}
