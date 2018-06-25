import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient ) {
    console.log("SpotifyService Listo")
  }

  getNewRelases(){
    const headers = new HttpHeaders({
      "Authorization":"Bearer BQCfnqcL-Rkiviq7EGQifAtSP9zWm6lkE0ttPc1O2G_-ogChq21G1K0W4yKYx8K1izsUNct_1WNbX4Wxr9U"
    })

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers});
  }
}
