
// Replace your Configuration here..
// var config = {
//     apiKey: "AIzaSyCKp-RwlkZhJBehZLOSLhn1E7WpoXn9xoI",
//     authDomain: "realtime-on-map-example.firebaseapp.com",
//     databaseURL: "https://realtime-on-map-example.firebaseio.com",
//     projectId: "realtime-on-map-example",
//     storageBucket: "",
//     messagingSenderId: "851837622908"
// };

const config = {
     apiKey: "AIzaSyCS9Nk8cb7W1EIse8_bINnGVmuqHs5uOTo",
  authDomain: "medidores-matamoros.firebaseapp.com",
  databaseURL: "https://medidores-matamoros.firebaseio.com",
  projectId: "medidores-matamoros",
  storageBucket: "medidores-matamoros.appspot.com",
  messagingSenderId: "713161378977",
  appId: "1:713161378977:web:cbe890da5f4c735bf6b4e0",
  measurementId: "G-GV5N0N0L7H"

  // apiKey: "AIzaSyBRVBJuvk-Mbxzv2DTx2a18jPaope7gBPY",
  // authDomain: "usrsmty.firebaseapp.com",
  // databaseURL: "https://usrsmty.firebaseio.com",
  // projectId: "usrsmty",
  // storageBucket: "usrsmty.appspot.com",
  // messagingSenderId: "840900135873",
  // appId: "1:840900135873:web:cbcc627858630c625ebd40",
  // measurementId: "G-47LEFJRJCX"


};

firebase.initializeApp(config);




// counter for online cars...
var cars_count = 0;
var pedidos_count = 0;
var colorConductor = "#00023";
// markers array to store all the markers, so that we could remove marker when any car goes offline and its data will be remove from realtime database...
var markers = [];
var conductoresArray = [];

var markersPedidos = [];
var map;

var numDeltas = 100;
var delay = 10; //milliseconds
var i = 0;
var deltaLat;
var deltaLng;
var position = [24.378031, -98.23036]; //lat lon CEID

var datos;

function initMap() { // Google Map Initialization... 
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: new google.maps.LatLng(24.378031, -98.23036),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

/////////


var polygoneCoords10 = [


{lat:26.051644,lng:-97.9034},
{lat:26.053122,lng:-97.8546},
{lat:26.039972,lng:-97.77553},
{lat:26.018617,lng:-97.73531},
{lat:26.014722,lng:-97.64479},
{lat:25.919881,lng:-97.56141},
{lat:25.903786,lng:-97.51819},
{lat:25.866768,lng:-97.47144},
{lat:25.866309,lng:-97.43794},
{lat:25.830364,lng:-97.41747},
{lat:25.835342,lng:-97.36764},
{lat:25.872409,lng:-97.34638},
{lat:25.902648,lng:-97.35541},
{lat:25.92209,lng:-97.28895},
{lat:25.937809,lng:-97.26536},
{lat:25.942647,lng:-97.189},
{lat:25.939655,lng:-97.13552},
{lat:25.839525,lng:-97.13359},
{lat:25.827488,lng:-97.155},
{lat:25.780869,lng:-97.1585},
{lat:25.763292,lng:-97.2119},
{lat:25.735978,lng:-97.19576},
{lat:25.720681,lng:-97.22453},
{lat:25.704828,lng:-97.16136},
{lat:25.684613,lng:-97.18565},
{lat:25.688569,lng:-97.24222},
{lat:25.636058,lng:-97.2742},
{lat:25.607374,lng:-97.25581},
{lat:25.637355,lng:-97.20453},
{lat:25.661053,lng:-97.18246},
{lat:25.650557,lng:-97.17585},
{lat:25.224789,lng:-97.41625},
{lat:25.219893,lng:-97.43887},
{lat:25.344462,lng:-97.37779},
{lat:25.357929,lng:-97.40887},
{lat:25.388609,lng:-97.39033},
{lat:25.410854,lng:-97.40519},
{lat:25.429267,lng:-97.44327},
{lat:25.457643,lng:-97.52677},
{lat:25.436391,lng:-97.56402},
{lat:25.411627,lng:-97.55689},
{lat:25.420311,lng:-97.53477},
{lat:25.34494,lng:-97.48325},
{lat:25.368447,lng:-97.53717},
{lat:25.289255,lng:-97.53666},
{lat:25.279913,lng:-97.52386},
{lat:25.268168,lng:-97.55312},
{lat:25.304718,lng:-97.56175},
{lat:25.300387,lng:-97.58729},
{lat:25.321214,lng:-97.61403},
{lat:25.35274,lng:-97.61213},
{lat:25.362045,lng:-97.68121},
{lat:25.343581,lng:-97.71181},
{lat:25.299241,lng:-97.70667},
{lat:25.24689,lng:-97.72574},
{lat:25.270398,lng:-97.76311},
{lat:25.243595,lng:-97.78973},
{lat:25.218854,lng:-97.73099},
{lat:25.23157,lng:-97.70069},
{lat:25.170033,lng:-97.69186},
{lat:25.157489,lng:-97.66938},
{lat:25.112612,lng:-97.70113},
{lat:25.066534,lng:-97.69945},
{lat:25.026572,lng:-97.73306},
{lat:24.936344,lng:-97.65757},
{lat:24.913747,lng:-97.61367},
{lat:24.849025,lng:-97.69349},
{lat:24.889877,lng:-97.7261},
{lat:24.809105,lng:-97.73509},
{lat:24.774938,lng:-97.70779},
{lat:24.663535,lng:-97.7265},
{lat:24.630326,lng:-97.70938},
{lat:24.471799,lng:-97.74778},
{lat:24.498764,lng:-97.77954},
{lat:24.54211,lng:-97.77571},
{lat:24.539151,lng:-97.83885},
{lat:24.560425,lng:-97.84349},
{lat:24.526211,lng:-97.86584},
{lat:24.497353,lng:-97.87045},
{lat:24.476799,lng:-97.84876},
{lat:24.437179,lng:-97.85816},
{lat:24.457767,lng:-97.69072},
{lat:24.403014,lng:-97.85551},
{lat:24.409677,lng:-97.9042},
{lat:24.395681,lng:-97.96571},
{lat:24.402992,lng:-97.97387},
{lat:24.408676,lng:-97.98273},
{lat:24.378031,lng:-98.23036},
{lat:24.38433,lng:-98.23695},
{lat:24.388039,lng:-98.24362},
{lat:24.390303,lng:-98.25537},
{lat:24.396023,lng:-98.25975},
{lat:24.409968,lng:-98.26565},
{lat:24.413835,lng:-98.28185},
{lat:24.420745,lng:-98.29285},
{lat:24.437753,lng:-98.29317},
{lat:24.547407,lng:-98.12874},
{lat:24.622626,lng:-98.33697},
{lat:24.848851,lng:-98.36395},
{lat:24.842145,lng:-98.59543},
{lat:25.108261,lng:-98.58557},
{lat:25.268374,lng:-98.23001},
{lat:25.265832,lng:-98.11569},
{lat:25.374366,lng:-98.09258},
{lat:25.393241,lng:-98.01147},
{lat:25.511475,lng:-97.92443},
{lat:25.660215,lng:-97.92498},
{lat:25.686343,lng:-97.93853},
{lat:25.859634,lng:-97.88479},
{lat:25.925073,lng:-97.88716},
{lat:26.051644,lng:-97.9034},




];
var myPolygon10 = new google.maps.Polygon({
     paths: polygoneCoords10,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon10.setMap(map);


} //end of map




function transition(result, data) {
    datos = data.val();
    console.log("data Mombre: " + datos);
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    moveMarker();
}

function moveMarker() {
    console.log("Move Markerr Mombre: " + datos.nombre);
    position[0] += deltaLat;
    position[1] += deltaLng;


    //var latlng = new google.maps.LatLng(position[0], position[1]);

    var longlat = [position[1], position[0]];
    //marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
    //marker.setPosition(latlng);

    // marker.setLngLat(longlat)
    // marker.addTo(map);


    if (i != numDeltas) {
        i++;
        setTimeout(moveMarker, delay);
    }
}


// This Function will create a car icon with angle and add/display that marker on the map
function AddMarkerConductor(data) {
    let conductor = data;


    let urlIcon = (conductor.situacion == "Disponible") ? 'lampara.png' : 'lampara.png';
    var result = [parseFloat(conductor.latitud), parseFloat(conductor.longitud)];
    //transition(result,data)

    //#region marker e icono

    var icon = { // car icon

        url: urlIcon,
        //path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
        // scale: 0.6,
        scaledSize: new google.maps.Size(30, 30),
        fillColor: colorConductor, //<-- Car Color, you can change it 
        fillOpacity: 1,
        strokeWeight: 1,
        anchor: new google.maps.Point(0, 5),
        rotation: 44 //<-- Car angle
    };

    //path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',

    // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
    var infowindow = new google.maps.InfoWindow({
        content: `<strong>Medidor: ${conductor.medidor}
                    <p>Lampara ${conductor.lampara}</p>
                    <p>Capacidad ${conductor.capacidad}</p>
                    <p>Status ${conductor.status}</p>
                    </strong>`
    });
    var uluru = { lat: parseFloat(conductor.latitud), lng: parseFloat(conductor.longitud) };

    var marker = new google.maps.Marker({
        position: uluru,
        icon: icon,
        map: map,
        title: conductor.medidor
    });

    // Al hacer click sobre el marker mostraremos su información en una ventana
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    markers[conductor.key] = marker; // add marker in the markers array...
    document.getElementById("cars").innerHTML = cars_count;
    //#endregion

}


function buildLococationConductoresList(data) {
    let array = data;
    let arraySize = array.length;
    let color;
    var listings = document.getElementById('poimapbox-listings');
    listings.innerHTML = "";
    for (let i = 0; i < arraySize; i++) {
        let element = array[i];
        let conductor = element;

        AddMarkerConductor(element);

        color = (conductor.situacion == "Disponible") ? '#8bc34ba3' : '#ff572287';


        var listing = listings.appendChild(document.createElement('div'));
        listing.innerHTML
        listing.className = 'amenity-poi';


        listing.style.backgroundColor = color;

        listing.id = "listing-" + i;

        var link = listing.appendChild(document.createElement('a'));
        link.innerHTML = "";
        link.href = '#';
        link.className = 'name';
        link.dataPosition = i;

        link.innerHTML =
            // '<img src=' + conductor.properties.imagetmb + '>' +
            '<img src="https://img.icons8.com/officexs/16/000000/lights.png"/>' +
            '<h3>' + conductor.medidor+ '</h3>' +
            '<p>' + conductor.lampara + '</p>' +
            '<p>' + conductor.capacidad + '</p>' +
            '<p>? ' + conductor.fecha_hora + '</p>'

        link.addEventListener('click', function (e) {
            // Update the conductor to the Park associated with the clicked link
            var clickedListing = data[this.dataPosition];
            console.log(clickedListing);
            // // 1. Fly to the point
            flyToStore(clickedListing);

            // // 2. Close all other popups and display popup for clicked Park
            // createPopUp(clickedListing);

            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('amenity-poi active');

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');

        });

    }
}

function flyToStore(currentFeature) {
    let latitud = parseFloat(currentFeature.latitud);
    let longitud = parseFloat(currentFeature.longitud);
    // map.flyTo({
    //     center: currentFeature,
    //     zoom: 15
    // });

    map.setZoom(17);
    map.panTo({ lat: latitud, lng: longitud });
}

// get firebase database reference...
var cars_Ref = firebase.database().ref('/LAMPARAS_E8_MAT');


var dataConductores = firebase.database().ref('/LAMPARAS_E8_MAT');
dataConductores.on('value', function (snapshot) {
    //updateStarCount(postElement, snapshot.val());

    let conductores = snapshot.val();
    conductoresArray = [];
    for (const key in conductores) {
        if (conductores.hasOwnProperty(key)) {
            const element = conductores[key];
            //console.log(element);
            conductoresArray.push(element);


        }
    }

    buildLococationConductoresList(conductoresArray);
});

// this event will be triggered when a new object will be added in the database...
cars_Ref.on('child_added', function (data) {
    //console.log(data.val());
    cars_count++;
    //AddMarkerConductor(data);
    let conductor = data.val();

});

// this event will be triggered on location change of any car...
cars_Ref.on('child_changed', function (data) {
    markers[data.key].setMap(null);
    //AddMarkerConductor(data);
    let conductor = data.val();

});

// If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
cars_Ref.on('child_removed', function (data) {
    markers[data.key].setMap(null);
    cars_count--;
    document.getElementById("cars").innerHTML = cars_count;
});


function AddPedido(data) {
    var color = "";
 

    if (data.val().suministro != "BAJABAJA") {

        color = "#09ebcd";
        colorConductor = "#09ebcd";

    } else if (data.val().suministro != "ALTABAJA") {
        color = "#32a856";
        colorConductor = "#32a856";
    } else {
        color = "#151582";
    }

    var icon = { // car icon
      path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
         scale: 0.5,
       
        fillColor: color,
        // strokeWeight: 1,
        // anchor: new google.maps.Point(0, 5),
        // rotation: 44 //<-- Car angle
        fillOpacity: 1,
        strokeWeight: 2,
        anchor: new google.maps.Point(0, 5),
        rotation: data.val().angle //<-- Car angle
    };

    // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
    var infowindow = new google.maps.InfoWindow({
        content: `<strong>Medidor: ${data.val().medidor}
                <p>Facturado: ${data.val().facturado}</p>
                <p>Suministro: ${data.val().suministro}</p>
                </strong>`
    });
    var uluru = { lat: parseFloat(data.val().latitud), lng: parseFloat(data.val().longitud) };

    var marker = new google.maps.Marker({
        position: uluru,
        icon: icon,
        map: map,
        title: data.val().nombre
    });

    // Al hacer click sobre el marker mostraremos su información en una ventana
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    markersPedidos[data.key] = marker; // add marker in the markers array...
    document.getElementById("pedidos").innerHTML = pedidos_count;
}




var pedidos_Ref = firebase.database().ref('/RPUMEDIDOR_E8_MAT');

// this event will be triggered when a new object will be added in the database...
pedidos_Ref.on('child_added', function (data) {
    pedidos_count++;
    AddPedido(data);
});

// this event will be triggered on location change of any car...
pedidos_Ref.on('child_changed', function (data) {
    markersPedidos[data.key].setMap(null);
    AddPedido(data);
});

// If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
pedidos_Ref.on('child_removed', function (data) {
    markersPedidos[data.key].setMap(null);
    pedidos_count--;
    document.getElementById("pedidos").innerHTML = pedidos_count;
});



