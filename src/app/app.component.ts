import { Component } from '@angular/core';
import { BlogsLocalService } from './service/blogs-local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'salesforce-test';
  pageTitle = 'Salesforce';

  createBlogs() {
    
  }
}
