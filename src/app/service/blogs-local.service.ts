import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

let blogsList = require('./blogs.json');

@Injectable({
  providedIn: 'root'
})
export class BlogsLocalService {
  constructor() { }

  getBlogs(): Blog[] {
    return blogsList;
  }

  getBlog(id: number): Blog {
    return blogsList.filter((blog: Blog) => blog.id == id)[0];
  }

  updateBlog(blog: Blog): void {
    let newBlogsList = blogsList.filter((b: Blog) => blog.id != b.id);
    newBlogsList.push(blog);
    blogsList = newBlogsList;
  }

  createBlog(blog: Blog): void {
    blog.timestamp = new Date();
    blog.id = Math.max(...blogsList.map((blog: Blog) => blog.id));
    blogsList.push(blog);
  }

  deleteBlog(id: number): void {
    blogsList = blogsList.filter((b: Blog) => id != b.id);
  }

  deleteBlogs(): void {
    blogsList = [];
  }
}
