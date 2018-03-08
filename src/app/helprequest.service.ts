import { Injectable } from '@angular/core';

@Injectable()
export class HelprequestService {

  constructor() { }
  markers: marker[]=[];
 /*  markers: marker[] = [
	  {
		  lat: 49.866926,
		  lng: 8.6472159,
		  label: 'A',
		  draggable: true
	  }
  ] */
  setLocationMarker(latVal:any,longVal:any){
    this.markers.push({
      lat: latVal,
      lng: longVal,
      draggable: true
    });
  }

  getLocationMarker(){
    return this.markers;
  }
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

