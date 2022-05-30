import jwt from "jsonwebtoken";

export const CreateToken = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET);

  return accessToken;
};

export const GetPayload = (accessToken) => {
  const payload = jwt.verify(accessToken, process.env.JWT_SECRET);

  return payload;
};
