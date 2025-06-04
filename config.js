var config = {
    style: 'mapbox://styles/albavillamil/cmavkfycg003t01s9ecg7akzl',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWxiYXZpbGxhbWlsIiwiYSI6ImNrOWFiMGoxeDAwOXUzZ3FreG5ldjFxZWwifQ.tzVgwsxtZkO8lkLWFc5wQQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    //title: 'Reservas naturales de Asturias',
    //subtitle: 'Storymaps de reservas naturales',
    //byline: 'By a I.M. Amapper',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Parque natural de Redes (Caso, Sobrescobio)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/BosqueRedes.jpg',
            description: '<br><b>Declaración:</b> 1996 <br><b>Superficie:</b> 37.803 hectáreas <br><b>Flora:</b> Bosque de hayedos <br><b>Fauna:</b> Urogallo cantábrico, rebeco, corzo, venado, aves rapaces',
            location: {
                center: [-5.350468493315776, 43.14513286967205],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                //{
                //layer: 'layer-name',
                // opacity: 1,
                // duration: 5000
                //}
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Reserva natural integral de Muniellos (Cangas del Narcea, Ibias)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Reserva_Natural_Integral_de_Muniellos_%28Asturias%2C_Espa%C3%B1a%29_10.JPG',
            description: '<br><b>Declaración:</b> 2002 <br> <b>Superficie:</b> 5.488 hectáreas<br><b>Flora:</b> Hayedos, robledales <br> <b>Fauna:</b> Urogallo cantábrico, oso pardo',
            location: {
                center: [-6.701222278402741, 43.01396285589504],
                zoom: 10,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Parque natural Las Ubiñas - La Mesa (Teverga, Quirós, Lena)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Cabana_Bra%C3%B1as_de_Ag%C3%BCeria.JPG',
            description: '<br><b>Declaración:</b> 2006 <br> <b>Superficie:</b> 32.630 hectáreas <br> <b>Flora:</b> Hayedos, vegetación alta montaña<br> <b>Fauna:</b> Urogallo cantábrico, oso pardo, aves rapaces',
            location: {
                center: [-5.950683974527132, 43.04621783790507],
                zoom: 10,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Parque natural de Somiedo (Somiedo)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Somiedo.jpg',
            description: '<br><b>Declaración:</b> 1988 <br><b>Superficie:</b> 29.137 hectáreas<br><b>Flora:</b> Hayedos, robledales<br><b>Fauna:</b> Urogallo cantábrico, oso pardo, corzo, rebeco, aves rapaces',
            location: {
                center: [-6.133251374312399, 43.07292031553012],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

