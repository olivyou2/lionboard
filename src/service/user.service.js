import User from "../../models/user";
import bcrypt from "bcrypt";
/**
 *
 * @param {User} user
 * @returns {User} insertedUser
 */
export async function CreateUser(user) {
  const iuser = new User();
  iuser.email = user.email;
  iuser.password = bcrypt.hashSync(user.password);

  await iuser.save();

  return iuser;
}

/**
 *
 * @param {String} email
 * @returns {User} user
 */
export function GetUser(email) {
  return User.findOne({ email });
}

export function GetUserPassword(email, password) {
  return User.findOne({
    email,
    password: bcrypt.hash(password),
  });
}

/**
 *
 * @param {Number} id
 * @returns {User} user
 */
export function GetUserById(id) {
  return User.findOne({ id });
}
