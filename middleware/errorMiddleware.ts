import { NextFunction, Response, Request } from "express";
import HttpException from "../utils/httpException";
import { NODE_ENV } from "../utils/config";

export const errorHandler = (
    err: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    const message = err.message || 'Something went to wrong';

    res.status(status).json({
        message: message,
        stack: NODE_ENV === 'production' ? null : err.stack
    })

}   