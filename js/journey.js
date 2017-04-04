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
        title: "01/05/2016",
        position: { lat: 36.49562, lng: -121.93700 },
    },
    {
        title: "01/06/2016",
        position: { lat: 36.24937, lng: -121.78230 },
    },
    {
        title: "01/07/2016",
        position: { lat: 35.59701, lng: -121.12580 },
    },
    {
        title: "01/08/2016",
        position: { lat: 35.13037, lng: -120.63570 },
    },
    {
        title: "01/09/2016",
        position: { lat: 34.64815, lng: -120.43370 },
    },
    {
        title: "01/10/2016",
        position: { lat: 34.39310, lng: -119.52200 },
    },
    {
        title: "01/11/2016",
        position: { lat: 34.04853, lng: -118.93340 }
    },
    {
        title: "01/12/2016",
        position: { lat: 33.76797, lng: -118.18230 }
    },
    {
        title: "01/13/2016",
        position: { lat: 33.58250, lng: -117.71650 }
    },
    {
        title: "01/14/2016",
        position: { lat: 33.17077, lng: -117.33030 }
    },
    {
        title: "01/15/2016",
        position: { lat: 32.78869, lng: -117.23720 }
    },
    {
        title: "01/16/2016",
        position: { lat: 32.78835, lng: -117.23660 }
    },
    {
        title: "01/17/2016",
        position: { lat: 32.58128, lng: -117.11470 }
    },
    {
        title: "01/18/2016",
        position: { lat: 31.71189, lng: -116.56990 },
    },
    {
        title: "01/19/2016",
        position: { lat: 30.71252, lng: -115.99710 }
    },
    {
        title: "01/20/2016",
        position: { lat: 30.05204, lng: -115.29970 }
    },
    {
        title: "01/21/2016",
        position: { lat: 29.66009, lng: -114.64370 }
    },
    {
        title: "01/22/2016",
        position: { lat: 28.87055, lng: -114.13480 }
    },
    {
        title: "01/23/2016",
        position: { lat: 27.9683362, lng: -114.0587749}
    },
    {
        title: "01/24/2016",
        position: { lat: 27.284026, lng: -112.898035 }
    },
    {
        title: "01/25/2016",
        position: { lat: 26.889443, lng: -111.984690 }
    },
    {
        title: "01/26/2016",
        position: { lat: 26.021068, lng: -111.354050 }
    },
    {
        title: "01/27/2016 - 02/29/2016",
        position: { lat: 24.145090, lng: -110.309722 }
    },
    {
        title: "03/01/2016",
        position: { lat: 24.25695, lng: -110.32770 }
    },
    {
        title: "03/02/2016",
        position: { lat: 23.19910, lng: -106.41740 }
    },
    {
        title: "03/03/2016",
        position: { lat: 22.99890, lng: -105.85890 }
    },
    {
        title: "03/04/2016",
        position: { lat: 22.11886, lng: -105.21490 }
    },
    {
        title: "03/05/2016",
        position: { lat: 21.49613, lng: -104.90560 }
    },
    {
        title: "03/06/2016",
        position: { lat: 21.03379, lng: -104.36740 }
    },
    {
        title: "03/07/2016",
        position: { lat: 20.88633, lng: -103.84010 }
    },
    {
        title: "03/08/2016",
        position: { lat: 20.74399, lng: -103.35630 }
    },
    {
        title: "03/09/2016 - 03/15/2016",
        position: { lat: 20.61546, lng: -103.07820 },
    },
    {
        title: "03/16/2016",
        position: { lat: 19.9925472, lng: -102.3247923 }
    },
    {
        title: "03/17/2016",
        position: { lat: 19.8201039, lng: -101.8190806 }
    },
    {
        title: "03/18/2016",
        position: { lat: 19.95796, lng: -101.13510 }
    },
    {
        title: "03/19/2016",
        position: { lat: 19.88547, lng: -100.66430 }
    },
    {
        title: "03/20/2016",
        position: { lat: 19.93414, lng: -99.84182 }
    },
    {
        title: "03/21/2016",
        position: { lat: 19.97936, lng: -99.04319 }
    },
    {
        title: "03/22/2016",
        position: { lat: 18.98021, lng: -97.79923 }
    },
    {
        title: "03/23/2016",
        position: { lat: 18.44426, lng: -97.40807 }
    },
    {
        title: "03/24/2016 - 03/26/2016",
        position: { lat: 18.82770, lng: -97.08976 }
    },
    {
        title: "03/27/2016",
        position: { lat: 19.16598, lng: -96.11624 }
    },
    {
        title: "03/28/2016",
        position: { lat: 18.774258, lng: -95.761802 }
    },
    {
        title: "03/28/2016",
        position: { lat: 18.15497, lng: -95.53612 }
    },
    {
        title: "03/29/2016",
        position: { lat: 18.01010, lng: -94.55134 }
    },
    {
        title: "03/30/2016",
        position: { lat: 16.75047, lng: -93.38412 }
    },
    {
        title: "03/31/2016 - 04/01/2016",
        position: { lat: 16.75582, lng: -93.11533 }
    },
    {
        title: "04/02/2016",
        position: { lat: 16.73041, lng: -92.63844 }
    },
    {
        title: "04/03/2016",
        position: { lat: 16.24987, lng: -92.13774 }
    },
    {
        title: "04/04/2016",
        position: { lat: 15.64146, lng: -91.98168 }
    },
    {
        title: "04/05/2016",
        position: { lat: 15.31196, lng: -91.48060 }
    },
    {
        title: "04/06/2016",
        position: { lat: 15.31187, lng: -91.48056 }
    },
    {
        title: "04/07/2016",
        position: { lat: 15.13191, lng: -91.53591 }
    },
    {
        title: "04/08/2016",
        position: { lat: 14.71522, lng: -91.28854 }
    },
    {
        title: "04/09/2016",
        position: { lat: 14.70047, lng: -91.28791 }
    },
    {
        title: "04/10/2016",
        position: { lat: 14.70062, lng: -91.28776 }
    },
    {
        title: "04/11/2016",
        position: { lat: 14.70027, lng: -91.28783 }
    },
    {
        title: "04/12/2016",
        position: { lat: 14.70020, lng: -91.28776 }
    },
    {
        title: "04/13/2016",
        position: { lat: 14.70032, lng: -91.28770 }
    },
    {
        title: "04/14/2016",
        position: { lat: 14.55522, lng: -90.73534 }
    },
    {
        title: "04/15/2016",
        position: { lat: 14.53290, lng: -90.58585 }
    },
    {
        title: "04/16/2016",
        position: { lat: 13.93678, lng: -89.85509 }
    },
    {
        title: "04/17/2016",
        position: { lat: 13.84294, lng: -89.74839 }
    },
    {
        title: "04/18/2016",
        position: { lat: 13.49613, lng: -89.39133 }
    },
    {
        title: "04/19/2016",
        position: { lat: 13.50365, lng: -88.90290 }
    },
    {
        title: "04/20/2016",
        position: { lat: 13.21593, lng: -88.09683 }
    },
    {
        title: "04/21/2016",
        position: { lat: 13.21597, lng: -88.09669 }
    },
    {
        title: "04/22/2016",
        position: { lat: 12.63312, lng: -87.13422 }
    },
    {
        title: "04/23/2016",
        position: { lat: 12.33481, lng: -86.66904 }
    },
    {
        title: "04/24/2016",
        position: { lat: 12.04852, lng: -86.19794 }
    },
    {
        title: "04/25/2016",
        position: { lat: 11.92859, lng: -85.95342 }
    },
    {
        title: "04/26/2016",
        position: { lat: 11.38734, lng: -86.03234 }
    },
    {
        title: "04/27/2016",
        position: { lat: 11.38733, lng: -86.03220 }
    },
    {
        title: "04/28/2016",
        position: { lat: 10.62829, lng: -85.44334 }
    },
    {
        title: "04/29/2016",
        position: { lat: 9.98548, lng: -84.73507 }
    },
    {
        title: "04/30/2016",
        position: { lat: 9.65639, lng: -84.63522 }
    },
    {
        title: "05/01/2016",
        position: { lat: 9.27139, lng: -83.88146 }
    },
    {
        title: "05/02/2016",
        position: { lat: 8.89072, lng: -83.37721 }
    },
    {
        title: "05/03/2016",
        position: { lat: 8.42718, lng: -82.44389 }
    },
    {
        title: "05/04/2016",
        position: { lat: 8.42707, lng: -82.44376 }
    },
    {
        title: "05/05/2016",
        position: { lat: 8.22552, lng: -81.67007 }
    },
    {
        title: "05/06/2016",
        position: { lat: 8.11402, lng: -80.96288 }
    },
    {
        title: "05/07/2016",
        position: { lat: 8.51419, lng: -80.35048 }
    },
    {
        title: "05/08/2016",
        position: { lat: 8.57957, lng: -79.88423 },
    },
    {
        title: "05/09/2016",
        position: { lat: 8.99704, lng: -79.59095 },
    },
    {
        title: "09/18/2016 - 09/20/2016",
        position: { lat: 6.20360, lng: -75.66637 },
    },
    {
        title: "09/21/2016",
        position: { lat: 6.05230, lng: -75.62904 },
    },
    {
        title: "09/22/2016",
        position: { lat: 5.46990, lng: -75.57996 },
    },
    {
        title: "09/23/2016",
        position: { lat: 5.42044, lng: -75.70414 },
    },
    {
        title: "09/24/2016",
        position: { lat: 4.91670, lng: -75.90400 },
    },
    {
        title: "09/25/2016",
        position: { lat: 4.31803, lng: -76.07366 },
    },
    {
        title: "09/26/2016",
        position: { lat: 3.43774, lng: -76.54094 },
    },
    {
        title: "09/27/2016",
        position: { lat: 3.43774, lng: -76.54094 },
    },
    {
        title: "09/28/2016",
        position: { lat: 3.43775, lng: -76.54093 },
    },
    {
        title: "09/30/2016",
        position: { lat: 2.63886, lng: -76.53104 },
    },
    {
        title: "10/1/2016",
        position: { lat: 2.44334, lng: -76.60393 },
    },
    {
        title: "10/2/2016",
        position: { lat: 1.21702, lng: -77.29621 },
    },
    {
        title: "10/3/2016",
        position: { lat: 1.02180, lng: -77.47596 },
    },
    {
        title: "10/4/2016",
        position: { lat: 0.81440, lng: -77.66336 },
    },
    {
        title: "10/5/2016",
        position: { lat: 0.43440, lng: -77.96838 },
    },
    {
        title: "10/6/2016",
        position: { lat: 0.23073, lng: -78.26048 },
    },
    {
        title: "10/7/2016",
        position: { lat: -0.00102, lng: -78.17644 },
    },
    {
        title: "10/8/2016",
        position: { lat: -0.17627, lng: -78.35873 },
    },
    {
        title: "10/9/2016",
        position: { lat: -0.20928, lng: -78.40691 },
    },
    {
        title: "10/10/2016",
        position: { lat: -0.20946, lng: -78.40677 },
    },
    {
        title: "10/11/2016",
        position: { lat: -0.34015, lng: -78.45004 },
    },
    {
        title: "10/12/2016",
        position: { lat: -0.24903, lng: -79.16359 },
    },
    {
        title: "10/13/2016 - 10/16/2016",
        position: { lat: -0.69507, lng: -79.37087 },
    },
    {
        title: "10/17/2016",
        position: { lat: -1.30904, lng: -79.85315 }
    },
    {
        title: "10/18/2016 - 10/19/2016",
        position: { lat: -2.12247, lng: -79.96655 }
    },
    {
        title: "10/20/2016 - 10/21/2016",
        position: { lat: -2.67584, lng: -79.61711 }
    },
    {
        title: "10/22/2016",
        position: { lat: -3.24694, lng: -79.96586 }
    },
    {
        title: "10/23/2016",
        position: { lat: -3.24708, lng: -79.96580 }
    },
    {
        title: "10/24/2016",
        position: { lat: -3.56631, lng: -79.8531 }
    },
    {
        title: "10/25/2016 - 10/30/2016",
        position: { lat: -4.09785, lng: -81.05047 }
    },
    {
        title: "10/31/2016",
        position: { lat: -4.47522, lng: -81.20659 }
    },
    {
        title: "11/01/2016",
        position: { lat: -5.19077, lng: -80.62672 }
    },
    {
        title: "11/02/2016",
        position: { lat: -6.70049, lng: -79.90408 }
    },
    {
        title: "11/03/2016",
        position: { lat: -7.24791, lng: -79.46643 }
    },
    {
        title: "11/04/2016 - 11/05/2016",
        position: { lat: -8.10093, lng: -79.05000 }
    },
    {
        title: "11/06/2016 - 11/07/2016",
        position: { lat: -8.08333, lng: -79.12286 }
    },
    {
        title: "11/08/2016",
        position: { lat: -8.08294, lng: -78.884567 }
    },
    {
        title: "11/09/2016",
        position: { lat: -8.67758, lng: -78.35984 }
    },
    {
        title: "11/10/2016",
        position: { lat: -8.73873, lng: -77.90308 }
    },
    {
        title: "11/11/2016",
        position: { lat: -9.04828, lng: -77.80922 }
    },
    {
        title: "11/12/2016",
        position: { lat: -9.52286, lng: -77.52373 }
    },
    {
        title: "11/13/2016",
        position: { lat: -9.52288, lng: -77.52375 }
    },
    {
        title: "11/14/2016",
        position: { lat: -9.80437, lng: -77.43020 }
    },
    {
        title: "11/15/2016",
        position: { lat: -10.48794, lng: -77.74929 }
    },
    {
        title: "11/16/2016",
        position: { lat: -11.12008, lng: -77.61204 }
    },
    {
        title: "11/17/2016 - 11/25/2016",
        position: { lat: -12.12020, lng: -77.03620 },
    },
    {
        title: "11/26/2016",
        position: { lat: -13.83427, lng: -76.25009 }
    },
    {
        title: "11/27/2016",
        position: { lat: -14.44454, lng: -75.47533 }
    },
    {
        title: "11/28/2016",
        position: { lat: -14.82960, lng: -74.69683 }
    },
    {
        title: "11/29/2016",
        position: { lat: -14.82960, lng: -74.69683 }
    },
    {
        title: "11/30/2016",
        position: { lat: -14.69555, lng: -74.12920 }
    },
    {
        title: "12/01/2016",
        position: { lat: -14.41638, lng: -73.20370 }
    },
    {
        title: "12/02/2016",
        position: { lat: -13.63424, lng: -72.88599 }
    },
    {
        title: "12/02/2016",
        position: { lat: -13.63424, lng: -72.88599 }
    },
    {
        title: "12/03/2016 - 12/07/2016",
        position: { lat: -13.58850, lng: -72.84221 }
    },
    {
        title: "12/08/2016",
        position: { lat: -13.68758, lng: -71.62605 }
    },
    {
        title: "12/09/2016",
        position: { lat: -14.26992, lng: -71.22778 }
    },
    {
        title: "12/10/2016",
        position: { lat: -14.27031, lng: -71.22775 }
    },
    {
        title: "12/11/2016",
        position: { lat: -14.88134, lng: -70.59065 }
    },
    {
        title: "12/12/2016 - 01/05/2017",
        position: { lat: -15.26711, lng: -70.30609 }
    },
    {
        title: "01/05/2017",
        position: { lat: -16.08635, lng: -69.63976 }
    },
    {
        title: "01/06/2017",
        position: { lat: -16.16582, lng: -69.08885 }
    },
    {
        title: "01/07/2017",
        position: { lat: -16.02991, lng: -69.16217 }
    },
    {
        title: "01/08/2017",
        position: { lat: -16.16565, lng: -69.08716 }
    },
    {
        title: "01/09/2017 - 01/10/2017",
        position: { lat: -16.19760, lng: -68.59956 }
    },
    {
        title: "01/11/2017",
        position: { lat: -17.37639, lng: -67.67427 }
    },
    {
        title: "01/12/2017",
        position: { lat: -17.96191, lng: -67.10452 }
    },
    {
        title: "01/13/2017 - 01/18/2017",
        position: { lat: -20.46395, lng: -66.82455 }
    },
    {
        title: "01/19/2017",
        position: { lat: -21.44486, lng: -65.71701 }
    },
    {
        title: "01/20/2017",
        position: { lat: -22.08359, lng: -65.59605 }
    },
    {
        title: "01/21/2017",
        position: { lat: -22.89452, lng: -65.61289 }
    },
    {
        title: "01/22/2017 - 02/02/2017",
        position: { lat: -24.19520, lng: -65.32012 }
    },
    {
        title: "02/03/2017",
        position: { lat: -24.70386, lng: -65.40556 }
    },
    {
        title: "02/04/2017",
        position: { lat: -25.13120, lng: -65.48391 }
    },
    {
        title: "02/05/2017",
        position: { lat: -25.46750, lng: -65.56264 }
    },
    {
        title: "02/06/2017",
        position: { lat: -26.07412, lng: -65.97799 }
    },
    {
        title: "02/07/2017",
        position: { lat: -26.72489, lng: -66.06647 }
    },
    {
        title: "02/08/2017",
        position: { lat: -27.21873, lng: -66.83272 }
    },
    {
        title: "02/09/2017",
        position: { lat: -27.72075, lng: -67.16074 }
    },
    {
        title: "02/10/2017",
        position: { lat: -29.30064, lng: -67.50553 }
    },
    {
        title: "02/11/2017",
        position: { lat: -30.40808, lng: -68.69201 }
    },
    {
        title: "02/12/2017",
        position: { lat: -32.91439, lng: -68.70357 }
    },
    {
        title: "02/13/2017",
        position: { lat: -33.91665, lng: -64.68513 }
    },
    {
        title: "02/14/2017",
        position: { lat: -34.83596, lng: -61.54922 }
    },
    {
        title: "02/15/2017",
        position: { lat: -32.91421, lng: -68.70364 }
    },
    {
        title: "02/16/2017",
        position: { lat: -34.60569, lng: -68.32671 }
    },
    {
        title: "02/17/2017",
        position: { lat: -39.05442, lng: -68.66660 }
    },
    {
        title: "02/18/2017",
        position: { lat: -39.00137, lng: -70.08891 }
    },
    {
        title: "02/19/2017",
        position: { lat: -39.94068, lng: -71.07520 }
    },
    {
        title: "02/20/2017",
        position: { lat: -40.19854, lng: -71.36044 }
    },
    {
        title: "02/21/2017",
        position: { lat: -40.64571, lng: -71.70235 }
    },
    {
        title: "02/22/2017",
        position: { lat: -41.13810, lng: -71.32579 }
    },
    {
        title: "02/23/2017",
        position: { lat: -41.13165, lng: -71.39156 }
    },
    {
        title: "02/24/2017",
        position: { lat: -41.43765, lng: -71.48548 }
    },
    {
        title: "02/25/2017",
        position: { lat: -41.99715, lng: -71.52751 }
    },
    {
        title: "02/26/2017",
        position: { lat: -42.40785, lng: -71.10862 }
    },
    {
        title: "02/27/2017",
        position: { lat: -42.91946, lng: -71.33575 }
    },
    {
        title: "02/28/2017",
        position: { lat: -43.20260, lng: -71.56146 }
    },
    {
        title: "03/01/2017",
        position: { lat: -43.27312, lng: -71.95953 }
    },
    {
        title: "03/02/2017",
        position: { lat: -43.72436, lng: -72.34573 }
    },
    {
        title: "03/03/2017",
        position: { lat: -44.33841, lng: -72.56072 }
    },
    {
        title: "03/04/2017",
        position: { lat: -44.70580, lng: -72.22560 }
    },
    {
        title: "03/05/2017",
        position: { lat: -45.27834, lng: -72.30424 }
    },
    {
        title: "03/06/2017",
        position: { lat: -30.40808, lng: -72.05567 }
    },
    {
        title: "03/07/2017",
        position: { lat: -47.25477, lng: -72.57682 }
    },
    {
        title: "03/08/2017",
        position: { lat: -47.70250, lng: -73.10445 }
    },
    {
        title: "03/09/2017",
        position: { lat: -48.12896, lng: -72.83647 }
    },
    {
        title: "03/10/2017",
        position: { lat: -30.40808, lng: -72.55888 }
    },
    {
        title: "03/11/2017",
        position: { lat: -48.99893, lng: -72.83968 }
    },
    {
        title: "03/12/2017",
        position: { lat: -49.32240, lng: -72.89406 }
    },
    {
        title: "03/13/2017",
        position: { lat: -49.32228, lng: -72.89620 }
    },
    {
        title: "03/14/2017",
        position: { lat: -49.59135, lng: -72.26531 }
    },
    {
        title: "03/15/2017",
        position: { lat: -50.34145, lng: -72.28905 }
    },
    {
        title: "03/16/2017",
        position: { lat: -50.34256, lng: -72.28754 }
    },
    {
        title: "03/17/2017",
        position: { lat: -50.34115, lng: -72.28880 }
    },
    {
        title: "03/18/2017",
        position: { lat: -50.32697, lng: -72.19948 }
    },
    {
        title: "03/19/2017",
        position: { lat: -50.61836, lng: -71.36998 }
    },
    {
        title: "03/20/2017",
        position: { lat: -51.12921, lng: -71.92298 }
    },
    {
        title: "03/21/2017",
        position: { lat: -51.25916, lng: -72.34366 }
    },
    {
        title: "03/22/2017",
        position: { lat: -51.80743, lng: -72.16517 }
    },
    {
        title: "03/23/2017",
        position: { lat: -52.28055, lng: -71.34726 }
    },
    {
        title: "03/24/2017",
        position: { lat: -52.94803, lng: -70.84437 }
    },
    {
        title: "03/25/2017",
        position: { lat: -53.15985, lng: -70.89317 }
    },
    {
        title: "03/26/2017",
        position: { lat: -53.15998, lng: -70.89337 }
    },
    {
        title: "03/27/2017",
        position: { lat: -53.42151, lng: -70.01919 }
    },
    {
        title: "03/28/2017",
        position: { lat: -53.78148, lng: -67.71733 }
    },
    {
        title: "03/29/2017",
        position: { lat: -54.51546, lng: -67.20488 }
    },
    {
        title: "03/30/2017",
        position: { lat: -54.51019, lng: -67.19761 }
    },
    {
        title: "03/31/2017",
        position: { lat: -54.79376, lng: -68.23167 }
    },
    {
        title: "04/01/2017",
        show: true,
        position: { lat: -54.79371, lng: -68.23172 }
    }
];

var bounds = new google.maps.LatLngBounds ();

map.mapTypes.set(customMapTypeId, customMapType);
map.setMapTypeId(customMapTypeId);

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

bounds.extend(new google.maps.LatLng(61.2167, -149.9000));
bounds.extend(new google.maps.LatLng(-54.51019, -67.19761));
map.fitBounds(bounds);
