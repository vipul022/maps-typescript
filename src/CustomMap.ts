


// !instructions to all the other classes on how they can be an argument to 'addMarker'. All classes should have the properties defined inside interface.
export interface Mappable {
    location: {
      lat: number,
      lng: number
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
  // !annotate the type of google Map. it will be an instance of google.maps.Map class
  // !private modifier will stop the access of googleMap property outside of this class
   private googleMap: google.maps.Map

// !initialising 
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }});

  }

// ! mappable (argument) should has the properties defined inside interface Mappable
  addMarker(mappable: Mappable): void{
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: {
      lat: mappable.location.lat ,
      lng: mappable.location.lng
      }
    })
// !add event listner to marker
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        // !content is a property of InfoWindow with type string
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat ,
  //       lng: company.location.lng
  //       }
  //     })
  // }

}