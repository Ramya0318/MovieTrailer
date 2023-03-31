import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {
  constructor(private http:HttpClient){ }

  baseurl ="https://api.themoviedb.org/3";
  apikey ="35bae74eed38ecd0c2dcfa797fb11ee9";

  // bannerApiData 
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  // TrendingApiData 
 trendingApiData():Observable<any>{
  return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
 }
 
//  serachMovie
 getSearchMovie(data:any):Observable<any>{
  console.log(data,"resultofMovie");
  
  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);

 }

//  moviedetail

getMovieDetail(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
}

getMovieVideo(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
}

getMovieCast(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)

}
// Action 
fetchActionMovie():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
}

// Adventure
fetchAdventureMovie():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
}

// Animations
fetchAnimationsMovie():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
}

// Comedy

fetchComedyMovie():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
}

// Documentary
fetchDocumentaryMovie():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
}

// Science-Fiction
fetchScienceFictionMovie():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
}

// thriller
fetchThrillerMovie():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
}

}
