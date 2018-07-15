import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient ) {
    console.log("SpotifyService Listo")
  }

  getQuery( query:string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      "Authorization":"Bearer BQAlJ2vP9B4QhxL5rGTXfbAyifgMaKXMV_AO_2sin3hZcTc9Ga0BgBHdKSQAPBgZYe8L0NDfpOJXLGnCpoY"
    })

    return this.http.get(url, {headers});
  }

  getNewRelases(){

    return this.getQuery("browse/new-releases?limit=20")
      .pipe( map( data=> data["albums"].items ));

  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map( data=> data["artists"].items ));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
      .pipe(map( data=> data["tracks"]));
  }
}
