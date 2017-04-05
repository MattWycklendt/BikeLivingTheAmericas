var map = new google.maps.Map(document.getElementById("map"), {
});

var stops = [
    {
        "city": "Aguas Verdes",
        "position": {
            "lat": -3.482122154444,
            "lng": -80.246779808557
        },
        "ids": [
            "10158083203440029",
            "10158083198440029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Contralmirante Villar",
        "position": {
            "lat": -3.68028,
            "lng": -80.6842
        },
        "ids": [
            "10158084531105029",
            "10158084533765029",
            "10158084531845029",
            "10158084528065029",
            "10158084532360029",
            "10158084524135029",
            "10158084534820029",
            "10158084520780029",
            "10158084535300029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "M\u00e1ncora",
        "position": {
            "lat": -4.10417,
            "lng": -81.0458
        },
        "ids": [
            "10158084529180029",
            "10158084525740029",
            "10158084526135029",
            "10158084524780029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Los \u00d3rganos",
        "position": {
            "lat": -4.17946109017,
            "lng": -81.1286121752
        },
        "ids": [
            "10158084526740029",
            "10158084536785029",
            "10158084536475029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "La Brea",
        "position": {
            "lat": -4.26083,
            "lng": -80.8875
        },
        "ids": [
            "10158084551410029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Barrio Castilla",
        "position": {
            "lat": -4.44306,
            "lng": -81.2672
        },
        "ids": [
            "10158084556930029",
            "10158084550155029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Trujillo",
        "position": {
            "lat": -8.112,
            "lng": -79.0288
        },
        "ids": [
            "10158084561640029",
            "10158084558235029",
            "10158084557985029",
            "10158084558395029",
            "10158084561990029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Caraz",
        "position": {
            "lat": -9.06667,
            "lng": -77.8167
        },
        "ids": [
            "10158080593835029",
            "10158080596045029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Puente de Chao",
        "position": {
            "lat": -8.53333,
            "lng": -78.6667
        },
        "ids": [
            "10158084562350029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Vinzos",
        "position": {
            "lat": -8.8,
            "lng": -78.5667
        },
        "ids": [
            "10158080614555029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Macate",
        "position": {
            "lat": -8.76667,
            "lng": -78.0833
        },
        "ids": [
            "10158084565100029",
            "10158084563425029",
            "10158084564000029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Yuramarca",
        "position": {
            "lat": -8.75,
            "lng": -77.9
        },
        "ids": [
            "10158080582310029",
            "10158080582790029",
            "10158080583965029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "La Pampa",
        "position": {
            "lat": -8.65,
            "lng": -77.9
        },
        "ids": [
            "10158080578165029",
            "10158080580905029",
            "10158080581555029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Huallanca",
        "position": {
            "lat": -8.81667,
            "lng": -77.8667
        },
        "ids": [
            "10158080585210029",
            "10158080590090029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Huata",
        "position": {
            "lat": -9.01667,
            "lng": -77.85
        },
        "ids": [
            "10158080591540029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Yungay",
        "position": {
            "lat": -9.15,
            "lng": -77.7333
        },
        "ids": [
            "10158080597785029",
            "10158080599775029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Mancos",
        "position": {
            "lat": -9.18333,
            "lng": -77.7167
        },
        "ids": [
            "10158080601740029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Carhuaz",
        "position": {
            "lat": -9.26667,
            "lng": -77.6333
        },
        "ids": [
            "10158080605260029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Yungar",
        "position": {
            "lat": -9.36667,
            "lng": -77.6
        },
        "ids": [
            "10158080607355029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Jangas",
        "position": {
            "lat": -9.38333,
            "lng": -77.5833
        },
        "ids": [
            "10158080611275029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Huaraz",
        "position": {
            "lat": -9.5333333333333,
            "lng": -77.533333333333
        },
        "ids": [
            "10158080662095029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Independencia",
        "position": {
            "lat": -9.471997726169,
            "lng": -77.483870789697
        },
        "ids": [
            "10158080629515029",
            "10158080630715029",
            "10158080632145029",
            "10158080632705029",
            "10158084961425029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Catac",
        "position": {
            "lat": -9.8,
            "lng": -77.4333
        },
        "ids": [
            "10158080642110029",
            "10158080672815029",
            "10158080646365029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Cajacay",
        "position": {
            "lat": -10.1667,
            "lng": -77.4333
        },
        "ids": [
            "10158080650365029"
        ],
        "album": "BikeLiving_Peru"
    },
    {
        "city": "Ipiales",
        "position": {
            "lat": 0.830278,
            "lng": -77.6444
        },
        "ids": [
            "10157787244810029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Tulc\u00e1n",
        "position": {
            "lat": 0.8,
            "lng": -77.7167
        },
        "ids": [
            "10157787296620029",
            "10157786936765029",
            "10157787506005029",
            "10157787297050029",
            "10157787296355029",
            "10157786749615029",
            "10157786934335029",
            "10157787244935029",
            "10157785148320029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Machachi",
        "position": {
            "lat": -0.5,
            "lng": -78.5667
        },
        "ids": [
            "10157786623450029",
            "10157786623785029",
            "10157786624450029",
            "10157787297320029",
            "10157787505760029",
            "10157786934380029",
            "10157786747480029",
            "10157786935430029",
            "10157786933500029",
            "10157787500175029",
            "10157787297090029",
            "10157788078490029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Cayambe",
        "position": {
            "lat": 0.05,
            "lng": -78.1333
        },
        "ids": [
            "10157786626455029",
            "10157787296180029",
            "10157786748155029",
            "10157786749415029",
            "10157786624995029",
            "10157786626195029",
            "10157786748365029",
            "10157786748830029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Quito",
        "position": {
            "lat": -0.25,
            "lng": -78.5833
        },
        "ids": [
            "10157787245155029",
            "10157787507845029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Fajardo",
        "position": {
            "lat": -0.333333,
            "lng": -78.4667
        },
        "ids": [
            "10157787506270029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Ibarra",
        "position": {
            "lat": 0.3627,
            "lng": -78.1307
        },
        "ids": [
            "10157786935210029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Los R\u00edos",
        "position": {
            "lat": -1.7666694444444,
            "lng": -79.45
        },
        "ids": [
            "10157788075195029",
            "10157788075855029",
            "10157788076345029",
            "10157788076555029",
            "10157788076850029",
            "10157788077855029",
            "10157788078040029",
            "10157787297460029",
            "10157787500110029",
            "10157788074860029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Guayaquil",
        "position": {
            "lat": -2.1833,
            "lng": -79.8833
        },
        "ids": [
            "10158085646050029",
            "10157800572065029",
            "10157800370580029",
            "10157800499910029",
            "10158085645780029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Guayas",
        "position": {
            "lat": -2.2,
            "lng": -79.9667
        },
        "ids": [
            "10158085645445029"
        ],
        "album": "BikeLiving_Ecuador"
    },
    {
        "city": "Cartagena",
        "position": {
            "lat": 10.4,
            "lng": -75.5
        },
        "ids": [
            "10158079636490029",
            "10158079603495029",
            "10158079637095029",
            "10158079662425029",
            "10158079638185029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Bar\u00fa",
        "position": {
            "lat": 10.15,
            "lng": -75.6833
        },
        "ids": [
            "10158079798100029",
            "10158079835990029",
            "10158079851820029",
            "10157782988715029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Caldas",
        "position": {
            "lat": 6.0886111111111,
            "lng": -75.636111111111
        },
        "ids": [
            "10157778412390029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Itag\u00fc\u00ed",
        "position": {
            "lat": 6.1667,
            "lng": -75.6167
        },
        "ids": [
            "10157778962285029",
            "10157782972780029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Santiago de Cali",
        "position": {
            "lat": 10.9689,
            "lng": -74.7814
        },
        "ids": [
            "10157782971220029",
            "10157782988980029",
            "10157782989730029",
            "10157785148100029",
            "10157778879695029",
            "10157785149460029",
            "10157754439210029",
            "10157778301685029",
            "10157778882440029",
            "10157782972010029",
            "10157782988055029",
            "10157785147220029",
            "10157782988455029",
            "10157785147010029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Medell\u00edn",
        "position": {
            "lat": 6.2359,
            "lng": -75.5751
        },
        "ids": [
            "10157782988005029",
            "10157782973720029",
            "10158083337785029",
            "10158083423800029",
            "10158083447620029",
            "10158083387615029",
            "10158083406770029",
            "10157778965065029",
            "10158083627645029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Sup\u00eda",
        "position": {
            "lat": 5.4505555555556,
            "lng": -75.651388888889
        },
        "ids": [
            "10157754881675029",
            "10157778413205029",
            "10157778881750029",
            "10157778882090029",
            "10157782973500029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Santa B\u00e1rbara",
        "position": {
            "lat": 5.8746128764843,
            "lng": -75.568173281736
        },
        "ids": [
            "10157785147320029",
            "10157751112615029",
            "10157778878830029",
            "10157778881030029",
            "10157778881375029",
            "10157778882735029",
            "10157778903470029",
            "10157778905130029",
            "10157778964285029",
            "10157782972915029",
            "10157785145230029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "La Pintada",
        "position": {
            "lat": 5.75,
            "lng": -75.6
        },
        "ids": [
            "10157778300850029",
            "10157782974275029",
            "10157782971355029",
            "10157785146170029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "P\u00e1cora",
        "position": {
            "lat": 5.5258333333333,
            "lng": -75.458888888889
        },
        "ids": [
            "10157778404255029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Pasto",
        "position": {
            "lat": 1.1667,
            "lng": -77.2667
        },
        "ids": [
            "10157778879310029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Riosucio",
        "position": {
            "lat": 5.4208333333333,
            "lng": -75.702777777778
        },
        "ids": [
            "10157785123625029",
            "10157782990040029",
            "10157778904120029",
            "10157778965955029",
            "10157785147605029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Iles",
        "position": {
            "lat": 0.97055555555556,
            "lng": -77.520833333333
        },
        "ids": [
            "10157778901110029",
            "10157782989345029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Cajib\u00edo",
        "position": {
            "lat": 2.62556,
            "lng": -76.6261
        },
        "ids": [
            "10157778966465029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Caloto",
        "position": {
            "lat": 3.0355555555556,
            "lng": -76.407777777778
        },
        "ids": [
            "10157782990505029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Belalc\u00e1zar",
        "position": {
            "lat": 4.99528,
            "lng": -75.8128
        },
        "ids": [
            "10157785123330029"
        ],
        "album": "BikeLiving_Colombia"
    },
    {
        "city": "Huehuetenango",
        "position": {
            "lat": 15.3197,
            "lng": -91.4708
        },
        "ids": [
            "10157295457675029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "La Mesilla",
        "position": {
            "lat": 15.6167,
            "lng": -91.9833
        },
        "ids": [
            "10157295452945029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "La Demacracia",
        "position": {
            "lat": 15.6333,
            "lng": -91.8667
        },
        "ids": [
            "10157295453610029",
            "10157295453940029",
            "10157295454470029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "La Libertad",
        "position": {
            "lat": 15.5,
            "lng": -91.8333
        },
        "ids": [
            "10157295458370029",
            "10157295457880029",
            "10157295460210029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Camojallito",
        "position": {
            "lat": 15.55,
            "lng": -91.85
        },
        "ids": [
            "10157295439485029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Pitzal",
        "position": {
            "lat": 15.0575,
            "lng": -91.4936
        },
        "ids": [
            "10157295455545029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Paxixil",
        "position": {
            "lat": 14.9333,
            "lng": -91.4333
        },
        "ids": [
            "10157295458105029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Quiacquix",
        "position": {
            "lat": 14.85,
            "lng": -91.3833
        },
        "ids": [
            "10157295455910029",
            "10157295457595029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "San Juan La Laguna",
        "position": {
            "lat": 14.7,
            "lng": -91.2833
        },
        "ids": [
            "10157295446965029",
            "10157295456820029",
            "10157295442115029",
            "10157295445995029",
            "10157295442770029",
            "10157295446285029",
            "10157295443205029",
            "10157295446465029",
            "10157295443095029",
            "10157295442235029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "San Pedro La Laguna",
        "position": {
            "lat": 14.6833,
            "lng": -91.2667
        },
        "ids": [
            "10157295446600029",
            "10157295447300029",
            "10157295447050029",
            "10157295447450029",
            "10157295448090029",
            "10157295448800029",
            "10157295449550029",
            "10157295449270029",
            "10157295449970029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Santa Ana",
        "position": {
            "lat": 14.5473889998,
            "lng": -90.7260360001
        },
        "ids": [
            "10157295439955029",
            "10157295440455029",
            "10157295440110029",
            "10157295439660029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Santa Cruz",
        "position": {
            "lat": 14.0167,
            "lng": -89.8833
        },
        "ids": [
            "10157295520620029",
            "10157295520955029",
            "10157295520460029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Ahuachap\u00e1n",
        "position": {
            "lat": 13.9214,
            "lng": -89.845
        },
        "ids": [
            "10157295518670029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Juay\u00faa",
        "position": {
            "lat": 13.8429507551,
            "lng": -89.7467669528
        },
        "ids": [
            "10157295493850029",
            "10157295519215029",
            "10157295518955029",
            "10157295519350029",
            "10157295518685029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Sonsonate",
        "position": {
            "lat": 13.716666666667,
            "lng": -89.716666666667
        },
        "ids": [
            "10157295492815029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Chirilagua",
        "position": {
            "lat": 13.216666666667,
            "lng": -88.133333333333
        },
        "ids": [
            "10157295487000029",
            "10157295487765029",
            "10157295489415029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Playas Negras",
        "position": {
            "lat": 13.1658,
            "lng": -87.9444
        },
        "ids": [
            "10157295489090029",
            "10157295488710029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Le\u00f3n",
        "position": {
            "lat": 12.433333333333,
            "lng": -86.883333333333
        },
        "ids": [
            "10157295593710029",
            "10157295592110029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Nindir\u00ed",
        "position": {
            "lat": 12.002383,
            "lng": -86.122341
        },
        "ids": [
            "10157295591955029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Granada",
        "position": {
            "lat": 11.9333,
            "lng": -85.95
        },
        "ids": [
            "10157295591555029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Gigante",
        "position": {
            "lat": 11.3833,
            "lng": -86.0333
        },
        "ids": [
            "10157295590845029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "El Lim\u00f3n",
        "position": {
            "lat": 11.35,
            "lng": -85.7333
        },
        "ids": [
            "10157295590050029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "La Mona",
        "position": {
            "lat": 9.65,
            "lng": -84.6333
        },
        "ids": [
            "10157295749190029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Uvita",
        "position": {
            "lat": 9.15,
            "lng": -83.75
        },
        "ids": [
            "10157295745245029"
        ],
        "album": "BikeLiving_Central_America"
    },
    {
        "city": "Mazatl\u00e1n",
        "position": {
            "lat": 23.2167,
            "lng": -106.417
        },
        "ids": [
            "10157291800845029",
            "10157291838100029",
            "10157291838295029"
        ],
        "album": "BikeLiving_Baja_California"
    },
    {
        "city": "La Paz",
        "position": {
            "lat": 24.1405,
            "lng": -110.312
        },
        "ids": [
            "10157291799750029",
            "10157291802720029"
        ],
        "album": "BikeLiving_Baja_California"
    },
    {
        "city": "Zapopan",
        "position": {
            "lat": 20.7167,
            "lng": -103.4
        },
        "ids": [
            "10157291802065029",
            "10157291843180029"
        ],
        "album": "BikeLiving_Baja_California"
    },
    {
        "city": "Santa Mar\u00eda del Oro",
        "position": {
            "lat": 21.3333736207,
            "lng": -104.587124049
        },
        "ids": [
            "10157291839810029",
            "10157291839925029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Zapotlanejo",
        "position": {
            "lat": 20.624032,
            "lng": -103.066527
        },
        "ids": [
            "10157291853410029",
            "10157291851385029",
            "10157291853470029",
            "10157291844810029",
            "10157291855805029",
            "10157291853085029",
            "10157291844155029",
            "10157291854965029",
            "10157291844000029",
            "10157291855415029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Rosamorada",
        "position": {
            "lat": 22.123055555556,
            "lng": -105.20416666667
        },
        "ids": [
            "10157291838360029",
            "10157291838880029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Tepic",
        "position": {
            "lat": 21.5083,
            "lng": -104.893
        },
        "ids": [
            "10157291839475029",
            "10157291839610029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Tigre",
        "position": {
            "lat": 21.7333,
            "lng": -105.067
        },
        "ids": [
            "10157291839370029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "El Arenal",
        "position": {
            "lat": 20.7833,
            "lng": -103.7
        },
        "ids": [
            "10157291842745029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Ixtl\u00e1n del R\u00edo",
        "position": {
            "lat": 21.0355373293,
            "lng": -104.370991225
        },
        "ids": [
            "10157291840255029",
            "10157291840365029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Hostotipaquillo",
        "position": {
            "lat": 21.0667,
            "lng": -104.067
        },
        "ids": [
            "10157291849150029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Tequila",
        "position": {
            "lat": 20.879444444444,
            "lng": -103.83555555556
        },
        "ids": [
            "10157291840655029",
            "10157291840840029",
            "10157291841580029",
            "10157291841680029",
            "10157291849515029",
            "10157291842050029",
            "10157291842225029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Amatit\u00e1n",
        "position": {
            "lat": 20.7,
            "lng": -103.617
        },
        "ids": [
            "10157291843935029",
            "10157291842390029",
            "10157291842600029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Guadalajara",
        "position": {
            "lat": 20.6667,
            "lng": -103.35
        },
        "ids": [
            "10157291844580029",
            "10157291844665029",
            "10157291844720029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Acambay",
        "position": {
            "lat": 19.954338888889,
            "lng": -99.844113888889
        },
        "ids": [
            "10157291861880029",
            "10157291861715029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Tlajomulco de Z\u00fa\u00f1iga",
        "position": {
            "lat": 20.473611111111,
            "lng": -103.44305555556
        },
        "ids": [
            "10157291843790029",
            "10157291844385029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Platanal",
        "position": {
            "lat": 19.9,
            "lng": -102.217
        },
        "ids": [
            "10157291844985029",
            "10157291845360029",
            "10157291846070029",
            "10157291849110029",
            "10157291857065029",
            "10157291846965029",
            "10157291847170029",
            "10157291849070029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Cuitzeo",
        "position": {
            "lat": 19.9833,
            "lng": -101.15
        },
        "ids": [
            "10157291856345029",
            "10157291854425029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Cop\u00e1ndaro de Galeana",
        "position": {
            "lat": 19.8833,
            "lng": -101.217
        },
        "ids": [
            "10157291856500029",
            "10157291862085029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Coeneo",
        "position": {
            "lat": 19.8167,
            "lng": -101.583
        },
        "ids": [
            "10157291851835029"
        ],
        "album": "BikeLiving_Mainland_Mexico"
    },
    {
        "city": "Bellingham",
        "position": {
            "lat": 48.7502,
            "lng": -122.475
        },
        "ids": [
            "10157281028475029",
            "10157281025800029",
            "10157281028980029",
            "10157281031260029",
            "10157281029550029",
            "10157281029295029"
        ],
        "album": "BikeLiving_West_Coast_USA"
    },
    {
        "city": "Northway Junction",
        "position": {
            "lat": 63.0064,
            "lng": -141.778
        },
        "ids": [
            "10157128966535029",
            "10157129590770029",
            "10157128585565029"
        ],
        "album": "BikeLiving_Yukon_Territory"
    },
    {
        "city": "Alcan",
        "position": {
            "lat": 62.7231,
            "lng": -141.188
        },
        "ids": [
            "10156231046895029",
            "10156231040150029",
            "10156231037230029",
            "10156231038775029",
            "10156230614450029"
        ],
        "album": "BikeLiving_Yukon_Territory"
    },
    {
        "city": "Snag",
        "position": {
            "lat": 62.3833,
            "lng": -140.367
        },
        "ids": [
            "10157129552940029"
        ],
        "album": "BikeLiving_Yukon_Territory"
    },
    {
        "city": "Destruction Bay",
        "position": {
            "lat": 61.251756279408,
            "lng": -138.80514746676
        },
        "ids": [
            "10156231039800029",
            "10156231042845029",
            "10156231046030029",
            "10156231046185029"
        ],
        "album": "BikeLiving_Yukon_Territory"
    },
    {
        "city": "Whitehorse",
        "position": {
            "lat": 60.7167,
            "lng": -135.05
        },
        "ids": [
            "10156231039200029",
            "10157128607850029",
            "10156231041115029",
            "10156231039935029",
            "10157128821515029",
            "10156231040895029",
            "10157128605155029",
            "10156231038365029",
            "10156231045210029",
            "10156231043485029"
        ],
        "album": "BikeLiving_Yukon_Territory"
    },
    {
        "city": "Tagish",
        "position": {
            "lat": 60.3,
            "lng": -134.266667
        },
        "ids": [
            "10156231046685029"
        ],
        "album": "BikeLiving_Yukon_Territory"
    },
    {
        "city": "Teslin",
        "position": {
            "lat": 60.16764621574,
            "lng": -132.70790246297
        },
        "ids": [
            "10156231037945029",
            "10156231039440029",
            "10156231046225029"
        ],
        "album": "BikeLiving_Yukon_Territory"
    },
    {
        "city": "Watson Lake",
        "position": {
            "lat": 60.1167,
            "lng": -128.8
        },
        "ids": [
            "10156231041295029",
            "10156231040745029",
            "10156231044310029",
            "10157128829230029",
            "10157130019220029"
        ],
        "album": "BikeLiving_Yukon_Territory"
    },
    {
        "city": "Lower Post",
        "position": {
            "lat": 59.9167,
            "lng": -128.5
        },
        "ids": [
            "10157293968635029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Galbraith",
        "position": {
            "lat": 59.5333,
            "lng": -132.083
        },
        "ids": [
            "10157129910870029",
            "10157129555460029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Centreville",
        "position": {
            "lat": 59.2667,
            "lng": -129.417
        },
        "ids": [
            "10157129854965029",
            "10157129854860029",
            "10157129824310029",
            "10157129861465029",
            "10157128831725029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Dease Lake",
        "position": {
            "lat": 58.45,
            "lng": -130.033
        },
        "ids": [
            "10157129930630029",
            "10157128838155029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Alice Arm",
        "position": {
            "lat": 55.45,
            "lng": -129.483
        },
        "ids": [
            "10157128861580029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "New Aiyansh",
        "position": {
            "lat": 55.25,
            "lng": -129.083
        },
        "ids": [
            "10157129301330029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Moricetown",
        "position": {
            "lat": 55.0333,
            "lng": -127.333
        },
        "ids": [
            "10157129256245029",
            "10157129841125029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "New Hazelton",
        "position": {
            "lat": 55.25,
            "lng": -127.583
        },
        "ids": [
            "10157129512880029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Hazelton",
        "position": {
            "lat": 55.25,
            "lng": -127.667
        },
        "ids": [
            "10157129587940029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Kitwanga",
        "position": {
            "lat": 55.1,
            "lng": -128.067
        },
        "ids": [
            "10157129441655029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Smithers",
        "position": {
            "lat": 54.7667,
            "lng": -127.167
        },
        "ids": [
            "10157128967585029",
            "10157129849580029",
            "10157129446665029",
            "10157129553745029",
            "10157129449610029",
            "10157129448925029",
            "10157130024945029",
            "10157128868260029",
            "10157129509535029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Topley",
        "position": {
            "lat": 54.5167,
            "lng": -126.3
        },
        "ids": [
            "10157129729895029",
            "10157129723760029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "108 Mile Ranch",
        "position": {
            "lat": 51.7503,
            "lng": -121.345
        },
        "ids": [
            "10157129613745029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Houston",
        "position": {
            "lat": 54.3988,
            "lng": -126.644
        },
        "ids": [
            "10157129256180029",
            "10157129818695029",
            "10157129823415029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Vanderhoof",
        "position": {
            "lat": 54.0143,
            "lng": -124.009
        },
        "ids": [
            "10157129599490029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Quesnel",
        "position": {
            "lat": 52.9833,
            "lng": -122.483
        },
        "ids": [
            "10157129612885029",
            "10157129832820029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Williams Lake",
        "position": {
            "lat": 52.1167,
            "lng": -122.15
        },
        "ids": [
            "10157129469740029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Lillooet",
        "position": {
            "lat": 50.6833,
            "lng": -121.933
        },
        "ids": [
            "10157129909200029",
            "10157130019060029",
            "10157129816160029",
            "10157129807500029",
            "10157129731830029",
            "10157129476195029",
            "10157129808345029",
            "10157129299805029",
            "10157129750185029",
            "10157129626680029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Seton Portage",
        "position": {
            "lat": 50.7,
            "lng": -122.3
        },
        "ids": [
            "10157129759705029",
            "10157129738070029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Birken",
        "position": {
            "lat": 50.4833,
            "lng": -122.6
        },
        "ids": [
            "10157129807080029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Squamish",
        "position": {
            "lat": 49.701722222222,
            "lng": -123.15875
        },
        "ids": [
            "10157128855995029",
            "10157129484420029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "West Vancouver",
        "position": {
            "lat": 49.3667,
            "lng": -123.167
        },
        "ids": [
            "10157129491810029",
            "10157128855695029",
            "10157129485910029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Vancouver",
        "position": {
            "lat": 49.25,
            "lng": -123.1
        },
        "ids": [
            "10157129480950029",
            "10157129485620029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Richmond",
        "position": {
            "lat": 49.1667,
            "lng": -122.967
        },
        "ids": [
            "10157129486950029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Surrey",
        "position": {
            "lat": 49.1364,
            "lng": -122.821
        },
        "ids": [
            "10157129484730029"
        ],
        "album": "BikeLiving_British_Columbia"
    },
    {
        "city": "Seattle",
        "position": {
            "lat": 47.6064,
            "lng": -122.331
        },
        "ids": [
            "10156230618725029"
        ],
        "album": "BikeLiving_Alaska"
    },
    {
        "city": "Anchorage",
        "position": {
            "lat": 61.2183,
            "lng": -149.899
        },
        "ids": [
            "10156230619035029",
            "10156230609425029",
            "10156230612620029",
            "10156230604570029",
            "10156230603360029",
            "10156230606060029",
            "10156230615925029"
        ],
        "album": "BikeLiving_Alaska"
    },
    {
        "city": "Palmer",
        "position": {
            "lat": 61.6019,
            "lng": -149.117
        },
        "ids": [
            "10156230601900029",
            "10156230613860029",
            "10156230606135029",
            "10156230620195029",
            "10156230613735029"
        ],
        "album": "BikeLiving_Alaska"
    },
    {
        "city": "Chistochina",
        "position": {
            "lat": 62.5777,
            "lng": -144.67
        },
        "ids": [
            "10156230602300029",
            "10156230607145029",
            "10156230607275029",
            "10156230607345029",
            "10156230609190029",
            "10156230617535029",
            "10156230619790029"
        ],
        "album": "BikeLiving_Alaska"
    },
    {
        "city": "Gakona",
        "position": {
            "lat": 62.3048,
            "lng": -145.273
        },
        "ids": [
            "10156230602875029",
            "10156230605210029",
            "10156230610050029",
            "10156230612845029",
            "10156230615675029",
            "10156230620670029",
            "10156230611820029",
            "10156230638685029"
        ],
        "album": "BikeLiving_Alaska"
    },
    {
        "city": "Tetlin Junction",
        "position": {
            "lat": 63.3122,
            "lng": -142.602
        },
        "ids": [
            "10156230603595029",
            "10156230604595029"
        ],
        "album": "BikeLiving_Alaska"
    },
    {
        "city": "Northway",
        "position": {
            "lat": 62.9693,
            "lng": -141.905
        },
        "ids": [
            "10156230608425029",
            "10156230608495029",
            "10156230606290029",
            "10156230617385029"
        ],
        "album": "BikeLiving_Alaska"
    },
    {
        "city": "Glennallen",
        "position": {
            "lat": 62.1096,
            "lng": -145.557
        },
        "ids": [
            "10156230609370029",
            "10156230608185029",
            "10156230614680029",
            "10156230604000029",
            "10156230602425029",
            "10156230618070029",
            "10156230616255029",
            "10156230619695029",
            "10156230620040029",
            "10156230618165029"
        ],
        "album": "BikeLiving_Alaska"
    }
];


var bounds = new google.maps.LatLngBounds ();
for (var k = 0; k < stops.length; k++) {
    var p = new google.maps.LatLng(stops[k].position.lat, stops[k].position.lng);
    var imgs = ''
    for (var i= 0; i < stops[k]['ids'].length; i++) {
        imgs = (imgs + '<span><img style="width:30vw" src=/img/' +
                       stops[k].album + '/' + stops[k]['ids'][i] + '.jpg></span>')
    }

    var marker = new google.maps.Marker({
        position: stops[k].position,
        map: map,
        icon: '/img/camera.png',
        city: stops[k].city,
        imgs: imgs
    });

    marker.addListener('click', function() {
        var infowindow = new google.maps.InfoWindow({
            content: '<span>' + this.city  + '</span><br>' + this.imgs
        });
        infowindow.open(map, this);
    });

    bounds.extend(p);
}

map.fitBounds(bounds);
