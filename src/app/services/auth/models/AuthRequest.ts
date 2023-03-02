import { Request } from "express";
import { User } from "src/routes/user/entities/user.entity";

export interface AuthRequest extends Request{
    user: User;
}