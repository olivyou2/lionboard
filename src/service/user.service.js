import User from '../../models/user';

/**
 *
 * @param {User} user
 * @returns {User} insertedUser
 */
export async function CreateUser(user) {
  const iuser = new User();
  iuser.email = user.email;
  iuser.password = user.password;

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

/**
 *
 * @param {Number} id
 * @returns {User} user
 */
export function GetUserById(id) {
  return User.findOne({ id });
}
