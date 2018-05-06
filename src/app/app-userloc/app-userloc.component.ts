import { Component, OnInit,TemplateRef } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import {HelprequestService} from '../helprequest.service'
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tickets } from '../tickets';

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

  private ticket:Tickets;
  

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private httpObj:HttpClient) {}
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
    console.log("Hello HTTP");
    this.httpObj.post("http://localhost:9000/createpost",{
      "description":"Entry 3 not to be seen",
	    "status":"open",
	    "severity":"low",
	    "location" : {
        "type" : "Point",
        "coordinates" : [ 
          49.826613,
          8.636391
        ]
      },
	    "author":{"_id":"57d029f214188619304da626",
			  "username":"ashwin",
			  "email":"ashvin.sriram@gmail.com"
	    },
	    "responder":{}
      }).subscribe((data:any)=>{
      console.log("Successfully talked");
    });
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

    this.ticket=new Tickets({description:"",severity:""});
  }

  public onFormSubmit({ value, valid}: { value: Tickets, valid: boolean }) {
    this.ticket = value;
    console.log( this.ticket);
    console.log("valid: " + valid);
    //Make the createpost HTTP call from here after 
}
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}