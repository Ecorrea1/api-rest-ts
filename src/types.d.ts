export type Result = 'success' | 'failure';
export type User = 'user' | 'admin';

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: User;
};


