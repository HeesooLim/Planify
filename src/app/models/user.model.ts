

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdOn: Date;
  updatedOn: Date;

  constructor(id: string, firstName: string, lastName: string, email: string, password: string) {
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
