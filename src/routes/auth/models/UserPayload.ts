export interface UserPayload{
    sub: string;
    email: string;
    firstName: string;
    iat?: number;
    exp?: number;
}