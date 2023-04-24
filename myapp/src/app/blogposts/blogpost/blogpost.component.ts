import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from '../postdata.model';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  @Input()
  post: PostData

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onPostDelete(){
    console.log("Deleting: "+this.post.id)

    this.httpClient.delete('https://myapphttpproject-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'+this.post.id+'.json')
    .subscribe(()=>{
      
        console.log("Post Deleted")
      
    })
  }
}
