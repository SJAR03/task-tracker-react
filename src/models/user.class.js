import { roles } from './roles.enum';

export class user {
  username = '';
  email = '';
  pwd = '';
  rol = roles.USER;

  constructor(username, email, pwd, rol) {
    this.name = username;
    this.email = email;
    this.pwd = pwd;
    this.rol = rol;
  }
}
