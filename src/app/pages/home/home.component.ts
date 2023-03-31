import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:MovieApiServiceService){ }

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  sciencefictionMovieResult:any=[];
  thrillerMovieResult:any=[];

  ngOnInit():void {
    this.bannerData();
    this.trendingData();
    this.action();
    this.adventure();
    this.animations();
    this.comedy();
    this.documentary();
    this.sciencefiction();
    this.thriller();

  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,"bannerresult----");
      this.bannerResult = result.results;
      
    })
  }

  trendingData(){
    this.service.trendingApiData().subscribe((result)=>{
      console.log(result,'trendingData---');
      this.trendingMovieResult = result.results;
      
    })
  }

  action(){
    this.service.fetchActionMovie().subscribe((result)=>{
      console.log(result,'action');
      this.actionMovieResult = result.results;
      
    })
  }

adventure(){
  this.service.fetchAdventureMovie().subscribe((result)=>{
  console.log(result,'adventure');
  this.adventureMovieResult  = result.results;
  
  })
}

animations(){
  this.service.fetchAnimationsMovie().subscribe((result)=>{
    console.log(result,'animation');
    this.animationMovieResult = result.results;
    
  })
}

comedy(){
  this.service.fetchComedyMovie().subscribe((result)=>{
    console.log(result,'comedy--');
    this.comedyMovieResult = result.results;
    
  })
}

documentary(){
  this.service.fetchDocumentaryMovie().subscribe((result)=>{
    console.log(result,'documentary--');
    this.documentaryMovieResult= result.results;
    
  })
}

sciencefiction(){
  this.service.fetchScienceFictionMovie().subscribe((result)=>{
    console.log(result,'Science-Fiction---');
    this.sciencefictionMovieResult=result.results;
    
  })
}

thriller(){
  this.service.fetchScienceFictionMovie().subscribe((result)=>{
    console.log(result,'thriller');
    this.thrillerMovieResult = result.results;
    
  })
}

}
