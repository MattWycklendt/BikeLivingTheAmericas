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
            var lat = path[j].lat();
            var lon = path[j].lng();
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
    url: "/raw/ancorage_to_portland.json",
    dataType: "json",
    success: function(route) {
        display_route(route);
    }
});

$.ajax({
    type: "GET",
    url: "/raw/portland_to_LA.json",
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

$.ajax({
    type: "GET",
    url: "/raw/ancorage_to_portland.json",
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
        title: "10/05/2015 - 10/13/2015",
        position: { lat: 54.39149, lng: -126.6606 }
    },
    {
        title: "10/14/2015",
        position: { lat: 54.1442, lng: -125.378 }
    },
    {
        title: "10/15/2015",
        position: { lat: 54.02692, lng: -124.0379 }
    },
    {
        title: "10/16/2015",
        position: { lat: 53.92495, lng: -122.776 }
    },
    {
        title: "10/17/2015",
        position: { lat: 53.58415, lng: -122.6726 }
    },
    {
        title: "10/18/2015",
        position: { lat: 53.05032, lng: -122.53490 }
    },
    {
        title: "10/19/2015",
        position: { lat: 53.05028, lng: -122.53450 }
    },
    {
        title: "10/20/2015",
        position: { lat: 52.73353, lng: -122.52520 }
    },
    {
        title: "10/21/2015",
        position: { lat: 52.13391, lng: -122.13960 }
    },
    {
        title: "10/22/2015",
        position: { lat: 51.64593, lng: -121.29690 }
    },
    {
        title: "10/23/2015",
        position: { lat: 51.08742, lng: -121.58630 }
    },
    {
        title: "10/24/2015",
        position: { lat: 50.68800, lng: -121.93630 }
    },
    {
        title: "10/25/2015",
        position: { lat: 50.32352, lng: -122.80370 }
    },
    {
        title: "10/26/2015 - 11/01/2015",
        position: { lat: 50.11329, lng: -122.95430 },
    },
    {
        title: "11/18/2015",
        position: { lat: 48.76476, lng: -122.47020 }
    },
    {
        title: "11/19/2015",
        position: { lat: 48.76501, lng: -122.47050 }
    },
    {
        title: "11/18/2015",
        position: { lat: 48.76471, lng: -122.47050 }
    },
    {
        title: "11/19/2015",
        position: { lat: 48.11766, lng: -122.77090 }
    },
    {
        title: "11/20/2015",
        position: { lat: 47.63723, lng: -122.71360 }
    },
    {
        title: "11/21/2015",
        position: { lat: 47.20832, lng: -123.10700 }
    },
    {
        title: "11/22/2015",
        position: { lat: 46.90225, lng: -123.02160 }
    },
    {
        title: "11/23/2015",
        position: { lat: 46.71759, lng: -122.96080 },
    },
    {
        title: "11/24/2015",
        position: { lat: 46.17361, lng: -123.84390 },
    },
    {
        title: "11/25/2015",
        position: { lat: 45.98111, lng: -123.92920 },
    },
    {
        title: "11/26/2015",
        position: { lat: 45.70981, lng: -123.92000 },
    },
    {
        title: "11/27/2015",
        position: { lat: 45.45099, lng: -122.96080},
    },
    {
        title: "11/28/2015",
        position: { lat: 44.97011, lng: -124.01340 },
    },
    {
        title: "11/29/2015",
        position: { lat: 43.95250, lng: -124.10400 },
    },
    {
        title: "11/30/2015",
        position: { lat: 43.14450, lng: -124.38940 },
    },
    {
        title: "12/01/2015 - 12/03/2015",
        position: { lat: 42.74454, lng: -124.49860 },
    },
    {
        title: "12/04/2015",
        position: { lat: 43.118004, lng: -124.413343 },
    },
    {
        title: "12/05/2015",
        position: { lat: 42.747567, lng: -124.497454 },
    },
    {
        title: "12/06/2015",
        position: { lat: 41.761232, lng: -124.197621 },
    },
    {
        title: "12/07/2015",
        position: { lat: 41.290016, lng: -124.058445 },
    },
    {
        title: "12/08/2015",
        position: { lat: 40.805443, lng: -124.134033 },
    },
    {
        title: "12/09/2015",
        position: { lat: 39.965241, lng: -123.794335 },
    },
    {
        title: "12/10/2015",
        position: { lat: 39.440508, lng: -123.806049 },
    },
    {
        title: "12/11/2015",
        position: { lat: 38.653113, lng: -123.400651 },
    },
    {
        title: "12/12/2015",
        position: { lat: 38.086067, lng: -122.811991 },
    },
    {
        title: "12/13/2015 - 01/01/2016",
        position: { lat: 37.761479, lng: -122.406016 }
    },
    {
        title: "01/05/2015",
        position: { lat: 36.49562, lng: -121.93700 },
    },
    {
        title: "01/06/2015",
        position: { lat: 36.24937, lng: -121.78230 },
    },
    {
        title: "01/07/2015",
        position: { lat: 35.59701, lng: -121.12580 },
    },
    {
        title: "01/08/2015",
        position: { lat: 35.13037, lng: -120.63570 },
    },
    {
        title: "01/09/2015",
        position: { lat: 34.64815, lng: -120.43370 },
    },
    {
        title: "01/10/2015",
        position: { lat: 34.39310, lng: -119.52200 },
    },
    {
        title: "01/11/2015",
        position: { lat: 34.04853, lng: -118.93340 }
    },
    {
        title: "01/12/2015",
        position: { lat: 33.76797, lng: -118.18230 }
    },
    {
        title: "01/13/2015",
        position: { lat: 33.58250, lng: -117.71650 }
    },
    {
        title: "01/14/2015",
        position: { lat: 33.17077, lng: -117.33030 }
    },
    {
        title: "01/15/2015",
        position: { lat: 32.78869, lng: -117.23720 }
    },
    {
        title: "01/16/2015",
        position: { lat: 32.78835, lng: -117.23660 }
    },
    {
        title: "01/17/2015",
        position: { lat: 32.58128, lng: -117.11470 }
    },
    {
        title: "01/18/2015",
        position: { lat: 31.71189, lng: -116.56990 },
    },
    {
        title: "01/19/2015",
        position: { lat: 30.71252, lng: -115.99710 }
    },
    {
        title: "01/20/2015",
        position: { lat: 30.05204, lng: -115.29970 }
    },
    {
        title: "01/21/2015",
        position: { lat: 29.66009, lng: -114.64370 }
    },
    {
        title: "01/22/2015",
        position: { lat: 28.87055, lng: -114.13480 }
    },
    {
        title: "01/23/2015",
        position: { lat: 27.9683362, lng: -114.0587749}
    },
    {
        title: "01/24/2015",
        position: { lat: 27.284026, lng: -112.898035 }
    },
    {
        title: "01/25/2015",
        position: { lat: 26.889443, lng: -111.984690 }
    },
    {
        title: "01/26/2015",
        position: { lat: 26.021068, lng: -111.354050 }
    },
    {
        title: "01/27/2015 - 02/29/2015",
        position: { lat: 24.145090, lng: -110.309722 }
    },
    {
        title: "03/01/2015",
        position: { lat: 24.25695, lng: -110.32770 }
    },
    {
        title: "03/02/2015",
        position: { lat: 23.19910, lng: -106.41740 }
    },
    {
        title: "03/03/2015",
        position: { lat: 22.99890, lng: -105.85890 }
    },
    {
        title: "03/04/2015",
        position: { lat: 22.11886, lng: -105.21490 }
    },
    {
        title: "03/05/2015",
        position: { lat: 21.49613, lng: -104.90560 }
    },
    {
        title: "03/06/2015",
        position: { lat: 21.03379, lng: -104.36740 }
    },
    {
        title: "03/07/2015",
        position: { lat: 20.88633, lng: -103.84010 }
    },
    {
        title: "03/08/2015",
        position: { lat: 20.74399, lng: -103.35630 }
    },
    {
        title: "03/09/2015 - 03/15/2015",
        position: { lat: 20.61546, lng: -103.07820 },
    },
    {
        title: "03/16/2015",
        position: { lat: 19.9925472, lng: -102.3247923 }
    },
    {
        title: "03/17/2015",
        position: { lat: 19.8201039, lng: -101.8190806 }
    },
    {
        title: "03/18/2015",
        position: { lat: 19.95796, lng: -101.13510 }
    },
    {
        title: "03/19/2015",
        position: { lat: 19.88547, lng: -100.66430 }
    },
    {
        title: "03/20/2015",
        position: { lat: 19.93414, lng: -99.84182 }
    },
    {
        title: "03/21/2015",
        position: { lat: 19.97936, lng: -99.04319 }
    },
    {
        title: "03/22/2015",
        position: { lat: 18.98021, lng: -97.79923 }
    },
    {
        title: "03/23/2015",
        position: { lat: 18.44426, lng: -97.40807 }
    },
    {
        title: "03/24/2015 - 03/26/2015",
        position: { lat: 18.82770, lng: -97.08976 }
    },
    {
        title: "03/27/2015",
        position: { lat: 19.16598, lng: -96.11624 }
    },
    {
        title: "03/28/2015",
        position: { lat: 18.774258, lng: -95.761802 }
    },
    {
        title: "03/28/2015",
        position: { lat: 18.15497, lng: -95.53612 }
    },
    {
        title: "03/29/2015",
        position: { lat: 18.01010, lng: -94.55134 }
    },
    {
        title: "03/30/2015",
        position: { lat: 16.75047, lng: -93.38412 }
    },
    {
        title: "03/31/2015 - 04/01/2015",
        position: { lat: 16.75582, lng: -93.11533 }
    },
    {
        title: "04/02/2015",
        position: { lat: 16.73041, lng: -92.63844 }
    },
    {
        title: "04/03/2015",
        position: { lat: 16.24987, lng: -92.13774 }
    },
    {
        title: "04/04/2015",
        position: { lat: 15.64146, lng: -91.98168 }
    },
    {
        title: "04/05/2015",
        position: { lat: 15.31196, lng: -91.48060 }
    },
    {
        title: "04/06/2015",
        position: { lat: 15.31187, lng: -91.48056 }
    },
    {
        title: "04/07/2015",
        position: { lat: 15.13191, lng: -91.53591 }
    },
    {
        title: "04/08/2015",
        position: { lat: 14.71522, lng: -91.28854 }
    },
    {
        title: "04/09/2015",
        position: { lat: 14.70047, lng: -91.28791 }
    },
    {
        title: "04/10/2015",
        position: { lat: 14.70062, lng: -91.28776 }
    },
    {
        title: "04/11/2015",
        position: { lat: 14.70027, lng: -91.28783 }
    },
    {
        title: "04/12/2015",
        position: { lat: 14.70020, lng: -91.28776 }
    },
    {
        title: "04/13/2015",
        position: { lat: 14.70032, lng: -91.28770 }
    },
    {
        title: "04/14/2015",
        position: { lat: 14.55522, lng: -90.73534 }
    },
    {
        title: "04/15/2015",
        position: { lat: 14.53290, lng: -90.58585 }
    },
    {
        title: "04/16/2015",
        position: { lat: 13.93678, lng: -89.85509 }
    },
    {
        title: "04/17/2015",
        position: { lat: 13.84294, lng: -89.74839 }
    },
    {
        title: "04/18/2015",
        position: { lat: 13.49613, lng: -89.39133 }
    },
    {
        title: "04/19/2015",
        position: { lat: 13.50365, lng: -88.90290 }
    },
    {
        title: "04/20/2015",
        position: { lat: 13.21593, lng: -88.09683 }
    },
    {
        title: "04/21/2015",
        position: { lat: 13.21597, lng: -88.09669 }
    },
    {
        title: "04/22/2015",
        position: { lat: 12.63312, lng: -87.13422 }
    },
    {
        title: "04/23/2015",
        position: { lat: 12.33481, lng: -86.66904 }
    },
    {
        title: "04/24/2015",
        position: { lat: 12.04852, lng: -86.19794 }
    },
    {
        title: "04/25/2015",
        position: { lat: 11.92859, lng: -85.95342 }
    },
    {
        title: "04/26/2015",
        position: { lat: 11.38734, lng: -86.03234 }
    },
    {
        title: "04/27/2015",
        position: { lat: 11.38733, lng: -86.03220 }
    },
    {
        title: "04/28/2015",
        position: { lat: 10.62829, lng: -85.44334 }
    },
    {
        title: "04/29/2015",
        position: { lat: 9.98548, lng: -84.73507 }
    },
    {
        title: "04/30/2015",
        position: { lat: 9.65639, lng: -84.63522 }
    },
    {
        title: "05/01/2015",
        position: { lat: 9.27139, lng: -83.88146 }
    },
    {
        title: "05/02/2015",
        position: { lat: 8.89072, lng: -83.37721 }
    },
    {
        title: "05/03/2015",
        position: { lat: 8.42718, lng: -82.44389 }
    },
    {
        title: "05/04/2015",
        position: { lat: 8.42707, lng: -82.44376 }
    },
    {
        title: "05/05/2015",
        position: { lat: 8.22552, lng: -81.67007 }
    },
    {
        title: "05/06/2015",
        position: { lat: 8.11402, lng: -80.96288 }
    },
    {
        title: "05/07/2015",
        position: { lat: 8.51419, lng: -80.35048 }
    },
    {
        title: "05/08/2015",
        position: { lat: 8.57957, lng: -79.88423 },
    },
    {
        title: "05/09/2015",
        position: { lat: 8.99704, lng: -79.59095 },
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


