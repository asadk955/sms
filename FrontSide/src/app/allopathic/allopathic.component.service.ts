import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AllopathicService {

    url = 'http://localhost:4000/Customerlogin/allopathic'
    constructor(private httpClient: HttpClient) { }
    

     getAllopathic() {
        return this.httpClient.get(this.url)
      }
    
}