import express from "express";
import { GetPayload } from "../service/jwt.service";
import { GetUser, GetUserById } from "../service/user.service";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(400).json({
      error: {
        message: "로그인을 먼저 해주세요",
      },
    });
  }

  const { authorization } = req.headers;

  try {
    const payload = GetPayload(authorization);

    res.locals.userId = payload.userId;

    const user = await GetUserById(payload.userId);

    res.locals.user = user;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(419).json({
        error: {
          message: "토큰이 만료되었습니다. 다시 로그인해주세요.",
        },
      });
    }

    return res.status(400).json({
      error: {
        message: "토큰 정보가 잘못되었습니다. 다시 시도해주세요.",
      },
    });
  }
};
