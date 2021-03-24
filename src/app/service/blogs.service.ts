import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

const axios = require('axios');

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  apiUrl: string = '';
  constructor() { }

  async getBlogs(): Promise<Blog[]> {
    const response = await axios.get(this.apiUrl);
    const blogs: Blog[] = [];

    response.data.forEach((blog: Blog) => {
      blogs.push(blog)
    });

    return blogs;
  }

  async getBlog(id: number): Promise<Blog> {
    const response = await axios.get(this.apiUrl + id);
    const blog: Blog = response.data;
    
    return blog;
  }

  async updateBlog(blog: Blog): Promise<void> {
    const response = await axios.post(this.apiUrl + blog.id, blog);
    return response;
  }

  async createBlog(blog: Blog): Promise<void> {
    const response = await axios.post(this.apiUrl, blog);
    return response;
  }

  async deleteBlog(id: number): Promise<void> {
    const response = await axios.delete(this.apiUrl + id);
    return response;
  }

  async deleteBlogs(): Promise<void> {
    const response = await axios.delete(this.apiUrl);
    return response;
  }
}
