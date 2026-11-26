"use server";
import { cookies } from "next/headers";
import { createUser, loginUser } from "./api";
import { LoginPayload, RegisterPayload, User } from "../types/user";

const TOKEN_COOKIE = "gamesync_token";
const USER_COOKIE = "gamesync_user";

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
};

interface AuthResult {
    user?: User;
    error?: string;
}

async function saveSession(token: string, user: User) {
    const cookieStore = await cookies();
    cookieStore.set(TOKEN_COOKIE, token, COOKIE_OPTIONS);
    cookieStore.set(USER_COOKIE, JSON.stringify(user), COOKIE_OPTIONS);
}

export async function register(payload: RegisterPayload): Promise<AuthResult> {
    try {
        const { token, ...user } = await createUser(payload);
        await saveSession(token, user);
        return { user };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Erro ao criar conta.",
        };
    }
}

export async function login(payload: LoginPayload): Promise<AuthResult> {
    try {
        const { token, ...user } = await loginUser(payload);
        await saveSession(token, user);
        return { user };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Erro ao fazer login.",
        };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(TOKEN_COOKIE);
    cookieStore.delete(USER_COOKIE);
}

export async function getSessionUser(): Promise<User | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_COOKIE)?.value;
    const rawUser = cookieStore.get(USER_COOKIE)?.value;

    if (!token || !rawUser) return null;

    try {
        return JSON.parse(rawUser) as User;
    } catch {
        return null;
    }
}