export class User {
  _id: string
  username: string
  lastName: string
  password: string
  phone: string
  email: string
  constructor(_id = '', username= '', password= '', phone= '', email = '', lastname = ''){
    this._id = _id;
    this.email = email;
    this.username= username;
    this.password= password;
    this.phone= phone;
    this.lastName = lastname
  }
}
