import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData } from '../blogposts/postdata.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogpostserviceService {

  constructor(private httpClient: HttpClient) { }

  createPosts(title:string, content:string){
    const mypostdata:PostData = {title:title, content:content}
    return this.httpClient.post('https://myapphttpproject-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',mypostdata)
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
  }
}
