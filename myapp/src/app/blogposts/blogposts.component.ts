import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PostData } from './postdata.model';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  dbPosts: PostData[] = []
  isFetching=true

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts()
  }

  onCreatePost(postData: PostData, form: NgForm){
      console.log(postData)

      this.httpClient.
      post('https://myapphttpproject-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData).
      subscribe((responseData)=>{
        this.fetchPosts()
        form.reset()
      })
  }

  onFetchPosts(){
    this.fetchPosts()
    this.isFetching=false
  }

  fetchPosts(){
    this.httpClient.
    get('https://myapphttpproject-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json').
    pipe(
      map((responseData)=>{

        const postArray = []

        for( const key in responseData){
          postArray.push({...responseData[key],id:key})
        }

        return postArray
      })
    )
    .subscribe((posts)=>{
      this.dbPosts = posts
    })
  }

  onDeletePosts(){
    this.httpClient.delete('https://myapphttpproject-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    .subscribe(()=>{
      console.log("posts deleted")
      this.fetchPosts()
    })
  }
}
