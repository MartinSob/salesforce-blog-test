import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogsService } from '../service/blogs.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
  @Input() blog: Blog | undefined = undefined;
  showEdit = false;

  constructor(private blogService: BlogsService, private router: Router) { }
}
