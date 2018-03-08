import { Component, OnInit,TemplateRef } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import {HelprequestService} from '../helprequest.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-userloc',
  templateUrl: './app-userloc.component.html',
  styleUrls: ['./app-userloc.component.css'],
  providers:[HelprequestService]
})
export class AppUserlocComponent  {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number;
  lng: number;
  
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markers: marker[] = [];
  
  /* mapClicked($event: AGMMouseEvent) {
    markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  } */
  
 markerDragEnd(m: marker, $event: AGMMouseEvent) {
    this.markers.push({
      lat:$event.coords.lat,
      lng:$event.coords.lng,
      label:"X",
      draggable: true
    });
    console.log('dragEnd',m,$event);
  }

  ngOnInit(){
    console.log("Doing");
    //navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 16;
      console.log("Yipee!"+this.lat);
      console.log("Yipee!"+this.lng);
      this.markers.push({
        lat:this.lat,
        lng:this.lng,
        label:"X",
        draggable: true
      });
    });
  }
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}