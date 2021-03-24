import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogsLocalService } from '../service/blogs-local.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {
  blog: Blog = new Blog();
  checkoutForm: any = this.formBuilder.group({
    title: '',
    text: ''
  });
  isEdit: boolean = true;

  constructor(private formBuilder: FormBuilder, private blogService: BlogsLocalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.data['isEdit'];

    if (this.isEdit) {
      let id = +this.route.snapshot.paramMap.get('id')!;

      this.blog = this.blogService.getBlog(id);

      this.checkoutForm = this.formBuilder.group({
        title: this.blog.title,
        text: this.blog.text
      });
    }
  }

  onSubmit(): void {
    this.blog.text = this.checkoutForm.value.text;
    this.blog.title = this.checkoutForm.value.title;

    if (this.isEdit)
      this.blogService.updateBlog(this.blog);
    else
      this.blogService.createBlog(this.blog);

    this.router.navigate(['']);
  }

  onDelete() {
    this.blogService.deleteBlog(this.blog.id!);
    this.router.navigate(['']);
  }
}
