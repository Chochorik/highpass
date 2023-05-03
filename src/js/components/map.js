ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.76489194743541,37.6196440777071],
            zoom: 13.5,
            controls: []
        });

        var myPlacemark = new ymaps.Placemark([55.76819062649713,37.64008357147216], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/svg/map-point.svg',
          iconImageSize: [12, 12],
      });

      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');

}

