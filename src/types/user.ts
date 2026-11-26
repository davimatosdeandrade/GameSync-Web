export interface User {
    id: number;
    name: string;
    email: string;
    accessLevel: number;
    active: boolean;
}

export interface AuthUser extends User {
    token: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}
