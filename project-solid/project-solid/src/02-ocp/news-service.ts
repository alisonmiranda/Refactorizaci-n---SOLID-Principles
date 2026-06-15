export interface HttpClient {
    get<T>(url: string): Promise<T>;
}

export class FetchHttpClient implements HttpClient {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Petición fallida: ${response.status}`);
        }

        return (await response.json()) as T;
    }
}

interface NewsItem {
    id: number;
    title: string;
    body: string;
}

export class NewsService {
    constructor(private readonly httpClient: HttpClient = new FetchHttpClient()) {}

    async getLatestNews(): Promise<NewsItem[]> {
        console.log('Obteniendo noticias de la reserva biológica...');
        return this.httpClient.get<NewsItem[]>('https://jsonplaceholder.typicode.com/posts');
    }
}

export class PhotosService {
    constructor(private readonly httpClient: HttpClient = new FetchHttpClient()) {}

    async getGallery(): Promise<unknown[]> {
        return this.httpClient.get<unknown[]>('https://jsonplaceholder.typicode.com/photos');
    }
}
