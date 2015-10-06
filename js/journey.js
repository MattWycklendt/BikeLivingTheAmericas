var customMapType = new google.maps.StyledMapType(
    [
        {
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#0099dd"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#aadd55"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {}
    ], {
        name: "Journey"
    }
);

var customMapTypeId = "custom_style";
var map = new google.maps.Map(document.getElementById("map"), {
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
});

map.mapTypes.set(customMapTypeId, customMapType);
map.setMapTypeId(customMapTypeId);


var bounds = new google.maps.LatLngBounds ();

//Takes a google json path and
function display_route(route, poly, bound) {
    var route;
    var steps = route.routes[0].legs[0].steps;
    var points = [];
    for (i = 0; i < steps.length; i++) {
        path = google.maps.geometry.encoding.decodePath(steps[i].polyline.points);
        for (j = 0; j < path.length; j++) {
            var lat = path[j].H;
            var lon = path[j].L;
            var p = new google.maps.LatLng(lat, lon);
            points.push(p);
            if(bound){bounds.extend(p);}
        }
    };

    if (poly === undefined) {
        poly = new google.maps.Polyline({
            // use your own style here
            path: points,
            strokeColor: "#FF00AA",
            strokeOpacity: .7,
            strokeWeight: 4,
            zIndex: 1
        });
    }
    else {
        poly.path = points;
        poly = new google.maps.Polyline(poly);
    }

    poly.setMap(map);

    // fit bounds to track
    if(bound){map.fitBounds(bounds);}
};

$.ajax({
    type: "GET",
    url: "/raw/ancorage_to_LA.json",
    dataType: "json",
    success: function(route) {
        display_route(route);
    }
});

$.ajax({
    type: "GET",
    url: "/raw/LA_to_LaPaz.json",
    dataType: "json",
    success: function(route) {
        display_route(route);
    }
});

$.ajax({
    type: "GET",
    url: "/raw/LaPaz_to_PuertoVallarta.json",
    dataType: "json",
    success: function(route) {
        display_route(route);
    }
});

$.ajax({
    type: "GET",
    url: "/raw/PuertoVallarta_to_Panama.json",
    dataType: "json",
    success: function(route) {
        display_route(route);
    }
});

$.ajax({
    type: "GET",
    url: "/raw/Turbo_to_Santiago.json",
    dataType: "json",
    success: function(route) {
        display_route(route);
    }
});

$.ajax({
    type: "GET",
    url: "/raw/Santiago_to_Ushuaia.json",
    dataType: "json",
    success: function(route) {
        display_route(route);
    }
});

var poly = {
    // use your own style here
    strokeColor: "#00CC00",
    strokeOpacity: .7,
    strokeWeight: 4,
    zIndex: 2
};

$.ajax({
    type: "GET",
    url: "/raw/So_Far.json",
    dataType: "json",
    success: function(route) {
        display_route(route, poly, true);
    }
});

var stops = [
    {
        title: "Anchorage<br>08/29/2015",
        position: {lat: 61.2167, lng: -149.9000}
    },
    {
        title: "Knik River crossing<br>08/30/2015",
        position: { lat: 61.495476, lng: -149.244352}
    },
    {
        title: "Chickaloon<br>08/31/2015",
        position: { lat: 61.709933, lng: -148.925358 }
    },
    {
        title: "Glacier View<br>09/01/2015",
        position: { lat: 61.827630, lng: -147.414452 }
    },
    {
        title: "Eureka<br>09/02/2015",
        position: { lat: 61.946896, lng: -147.148897 }
    },
    {
        title: "Glennallen<br>09/03/2015",
        position: { lat: 62.106925, lng: -145.772299 }
    },
    {
        title: "Gakona<br>09/04/2015",
        position: { lat: 62.390068, lng: -145.127729 }
    },
    {
        title: "Tok<br>09/07/2015",
        position: { lat: 63.33238, lng: -142.9886}
    },
    {
        title: "09/08/2015",
        position: { lat: 63.18067, lng: -142.158 }
    },
    {
        title: "09/10/2015",
        position: { lat: 62.15106, lng: -140.6863 }
    },
    {
        title: "09/11/2015",
        position: { lat: 61.89835, lng: -140.2206 }
    },
    {
        title: "09/12/2015",
        position: { lat: 61.35535, lng: -139.0018 }
    },
    {
        title: "09/13/2015",
        position: { lat: 60.90453, lng: -137.8399 }
    },
    {
        title: "09/14/2015",
        position: { lat: 60.80666, lng: -136.5681 }
    },
    {
        title: "09/15/2015",
        position: { lat: 60.70788, lng: -135.0343 }
    },
    {
        title: "09/18/2015",
        position: { lat: 60.47193, lng: -134.2655 }
    },
    {
        title: "09/19/2015",
        position: { lat: 60.16993, lng: -132.736 }
    },
    {
        title: "09/20/2015",
        position: { lat: 59.91051, lng: -131.6669 }
    },
    {
        title: "09/21/2015",
        position: { lat: 60.09118, lng: -130.6825 }
    },
    {
        title: "09/22/2015",
        position: { lat: 60.06115, lng: -128.7001 }
    },
    {
        title: "09/23/2015",
        position: { lat: 59.82785, lng: -129.1309 }
    },
    {
        title: "09/24/2015",
        position: { lat: 59.62186, lng: -129.249 }
    },
    {
        title: "09/25/2015",
        position: { lat: 58.43864, lng: -129.99 }
    },
    {
        title: "09/26/2015",
        position: { lat: 57.90723, lng: -130.0519 }
    },
    {
        title: "09/27/2015",
        position: { lat: 57.90737, lng: -130.051 }
    },
    {
        title: "09/28/2015",
        position: { lat: 57.26293, lng: -130.2539 }
    },
    {
        title: "09/29/2015",
        position: { lat: 56.67883, lng: -129.7373 }
    },
    {
        title: "09/30/2015",
        position: { lat: 56.09976, lng: -129.305 }
    },
    {
        title: "10/01/2015",
        position: { lat: 55.58348, lng: -128.4206 }
    },
    {
        title: "10/02/2015",
        position: { lat: 55.17965, lng: -127.7261 }
    },
    {
        title: "10/03/2015",
        position: { lat: 54.78278, lng: -127.1556 }
    },
    {
        title: "10/04/2015",
        position: { lat: 54.68224, lng: -127.0253 }
    },
    {
        title: "10/05/2015",
        position: { lat: 54.39149, lng: -126.6606 }
    },
    {
        title: "We Are Here<br>10/06/2015",
        position: { lat: 54.39198, lng: -126.6597 },
        show: true
    }
];

for (var k = 0; k < stops.length; k++) {
    var marker = new google.maps.Marker({
        position: stops[k].position,
        map: map,
        info: new google.maps.InfoWindow({
                content: stops[k].title
            })
    });
    if(stops[k].show) {marker.info.open(map, marker);}
    else {
        marker.addListener('click', function() {
            this.info.open(map, this);
        });
    }
}



/*
$.ajax({
    type: "GET",
    url: "/raw/2015-8-30-afternoon.tcx",
    dataType: "xml",
    success: function(xml) {
        var points = [];
        var currPos;
        var bounds = new google.maps.LatLngBounds ();

        $(xml).find("Position").each(function() {
            var lat = $(this).find("LatitudeDegrees").html();
            var lon = $(this).find("LongitudeDegrees").html();
            var p = new google.maps.LatLng(lat, lon);
            points.push(p);

            currPos = p;//{'lat': int(lat), 'log': ing(clon};
            bounds.extend(p);
        });

        // Define the symbol, using one of the predefined paths ('CIRCLE')
        // supplied by the Google Maps JavaScript API.
        var lineSymbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            strokeColor: '#393'
        };


        var poly = new google.maps.Polyline({
            // use your own style here
            path: points,
            strokeColor: "#6600CC",
            strokeOpacity: .7,
            strokeWeight: 4,
            icons: [{
                icon: lineSymbol,
                offset: '100%'
            }],
        });

        poly.setMap(map);
        //animateCircle(poly);

        // fit bounds to track
        map.fitBounds(bounds);

        var marker = new google.maps.Marker({
            position: currPos,
            map: map,
            title: 'Hello World!'
        });

        // Use the DOM setInterval() function to change the offset of the symbol
        // at fixed intervals.
        function animateCircle(line) {
            var count = 0;
            window.setInterval(function() {
                if (count === 199) {
                    return;
                }
                count = (count + 1) % 200;

                var icons = line.get('icons');
                icons[0].offset = (count / 2) + '%';
                line.set('icons', icons);
            }, 20);
        }
    }
});
*/


