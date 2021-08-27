

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmed: boolean;
  createdOn: Date;
  updatedOn: Date;

  constructor(id: string, firstName: string, lastName: string, email: string, password: string, confirmed: boolean) {
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.confirmed = confirmed;
  }
}
