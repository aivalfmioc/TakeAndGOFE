import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  zoom = 15;
  markers :any[] = [];
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    clickableIcons: false,
    maxZoom: 20,
    minZoom: 8,
    mapTypeControl: false,
  };
  ngOnInit() {
    
      this.center = {
        lat: 45.7494,
        lng: 21.2272,
      };
      this.markers.push({
        id:1,
        position: {
          lat: 45.7494,
          lng: 21.2272,
        },
        label: {
          color: 'black',
          text: 'Marker label ' + (this.markers.length + 1),
          fontWeight: 'bold',
        },
        title: 'Marker title ' + (this.markers.length + 1),
        options:{
          clickable: true,
          animation: google.maps.Animation.BOUNCE
        }
      });
      this.markers.push({
        id:2,
        position: {
          lat: 45.7450,
          lng: 21.2272,
        },
        label: {
          color: 'black',
          text: 'Marker label ' + (this.markers.length + 1),
          fontWeight: 'bold',
        },
        title: 'Marker title ' + (this.markers.length + 1),
        clickable: true,
        animation: google.maps.Animation.BOUNCE
      });
  }

  markerClicked(id: number){
    console.log(id);
  }
}
