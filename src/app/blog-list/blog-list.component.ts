import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogsLocalService } from '../service/blogs-local.service';
import { BlogsService } from '../service/blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  @Output() blogClicked: EventEmitter<number> =
    new EventEmitter<number>();
  selectedBlog = new Blog();

  constructor(private router: Router, private blogService: BlogsLocalService) { }

  getBlogs(): void {
    this.blogs = this.blogService.getBlogs();
  }

  ngOnInit(): void {
    this.getBlogs();
  }

  blogDetail(blog: Blog) {
    this.selectedBlog = blog;
  }

  removeBlogs() {
    this.blogService.deleteBlogs();
    this.getBlogs();
  }
}
