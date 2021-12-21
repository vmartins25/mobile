import axios from 'axios';

import { ProductList, User } from '../entities';

class SocialNetworkService {

    private readonly api = axios.create({
        baseURL: 'https://example-ecommerce.herokuapp.com'
    });

    public async login(login: string, password: string): Promise<string | null> {
        try {
            const response = await this.api.post('/user/login', { login, password });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    public async createUser(user: User) {
        try {
            const response = await this.api.post<User>('/user/customer/add', user);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    public async getUser(token: string) {
        try {
            const config = this.createConfig(token);
            const response = await this.api.get<User>('/users', config);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    public async getProductList() {
        try {
            const response = await this.api.get<ProductList[]>('/product/list');
            //console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    private createConfig(token: string) {
        return { headers: { Authorization: `Bearer ${token}` } };
    }

}

export const snService = new SocialNetworkService();