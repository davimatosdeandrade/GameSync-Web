import { ProductSimpleDetail, ProductDetail } from '../types/product';
import { Highlight } from '../types/highlights';
import { AuthUser, LoginPayload, RegisterPayload } from '../types/user';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface ApiResponse<T> {
    data: T;
}

async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erro na requisição: ${response.status}`);
    }

    const result: ApiResponse<T> = await response.json();
    return result.data;
}

export async function getCatalog(search?: string): Promise<ProductSimpleDetail[]> {
    const query = search ? `?search=${encodeURIComponent(search)}` : '';
    return fetcher<ProductSimpleDetail[]>(`/catalog${query}`, {
        next: { revalidate: 60 },
    });
}

export async function getHighlights(): Promise<Highlight[]> {
    return fetcher<Highlight[]>('/highlights', {
        next: { revalidate: 120 },
    });
}

export async function getProductByPk(id: string | number): Promise<ProductDetail> {
    return fetcher<ProductDetail>(`/product/${id}`, {
        cache: 'no-store',
    });
}

export async function getSimilarProducts(id: string | number): Promise<ProductSimpleDetail[]> {
    return fetcher<ProductSimpleDetail[]>(`/product/${id}/similar`, {
        next: { revalidate: 120 },
    });
}

export async function createUser(payload: RegisterPayload): Promise<AuthUser> {
    return fetcher<AuthUser>('/register', {
        method: 'POST',
        body: JSON.stringify(payload),
        cache: 'no-store',
    });
}

export async function loginUser(payload: LoginPayload): Promise<AuthUser> {
    return fetcher<AuthUser>('/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        cache: 'no-store',
    });
}
