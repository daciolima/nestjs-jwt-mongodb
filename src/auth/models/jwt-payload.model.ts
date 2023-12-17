import { ObjectId } from "mongodb";

export interface JwtPayload {
    userId: ObjectId
}