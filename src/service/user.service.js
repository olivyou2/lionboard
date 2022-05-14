const users = [];

export class User {
  static constructor() {
    this.idCount = 0;
  }

  constructor() {
    this.email = '';
    this.password = '';
    this.id = User.idCount;

    User.idCount += 1;
  }
}

/**
 *
 * @param {User} user
 * @returns {User} insertedUser
 */
export function CreateUser(user) {
  const iuser = new User();
  iuser.email = user.email;
  iuser.password = user.password;

  users.push(user);

  return iuser;
}

/**
 *
 * @param {String} email
 * @returns {User} user
 */
export function GetUser(email) {
  return users.find((u) => u.email === email);
}

/**
 *
 * @param {Number} id
 * @returns {User} user
 */
export function GetUserById(id) {
  return users.find((u) => u.id === id);
}
