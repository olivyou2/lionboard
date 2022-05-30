import jwt from "jsonwebtoken";

export const CreateToken = (userId) => {
  const accessToken = jwt.sign({ userId });

  return accessToken;
};

export const GetPayload = (accessToken) => {
  const payload = jwt.verify(accessToken);

  return payload;
};
