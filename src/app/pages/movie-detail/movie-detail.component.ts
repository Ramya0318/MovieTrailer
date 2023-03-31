import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  constructor(private service: MovieApiServiceService, private router:ActivatedRoute){}
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id'); 
    console.log(getParamId,'getParamId--');
    
    this.getmovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
    
  }

  getmovie(id:any){
    this.service.getMovieDetail(id).subscribe((result)=>{
      console.log(result, "moviedetails##");
      this.getMovieDetailResult = result;  
    })
  }

getVideo(id:any){
  this.service.getMovieVideo(id).subscribe((result)=>{
    console.log(result,"movievideos--");
    result.results.forEach((element:any)=>{
      if(element.type =="Trailer"){
        this.getMovieVideoResult =element.key; 
      }
    })
    
  })
}

getMovieCast(id:any){
  this.service.getMovieCast(id).subscribe((result)=>{
    console.log(result,'moviecast---');
    this.getMovieCastResult = result.cast;
    
  })
}


}
