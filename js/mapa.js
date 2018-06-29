function getColor(val) {
    var col = 'rgba(247,247,247,0.8)';
    if (typeof data[val] != 'undefined') {
        if (data[val]['sucho'] > 0.8) {
            col = 'rgba(215,25,28,0.8)';
        } else if (data[val]['sucho'] >= 0.6) {
            col = 'rgba(253,174,97,0.8)';
        } else if (data[val]['sucho'] >= 0.4) {
            col = 'rgba(255,255,191,0.8)';
        } else if (data[val]['sucho'] >= 0.2) {
            col = 'rgba(171,217,233,0.8)';
        } else if (data[val]['sucho'] < 0.2) {
            col = 'rgba(44,123,182,0.8)';
        }
    }
    
    var style = new ol.style.Style({
        stroke: new ol.style.Stroke({
        color: "lightgray",
        width: 0.7
        }),
        fill: new ol.style.Fill({
        color: col
        })
    });
    return style;
};


function makeTooltip(evt) {
    var cint = 'Katastrální územi ' + evt['Nazev'] + ', okres ' + evt['nazvy_OKRES'] + '<br>'
        + 'Výrazné sucho zde letos bylo v ' + Math.round(data[evt['Kod']]['sucho'] * 1000)/10 + ' % času.'
    document.getElementById('tooltip').innerHTML = cint
};

var tilegrid = ol.tilegrid.createXYZ({tileSize: 512, maxZoom: 12});

var background = new ol.layer.Tile({
  source: new ol.source.TileImage({
    url: 'https://interaktivni.rozhlas.cz/tiles/ton_b1/{z}/{x}/{y}.png',
    attributions: [
      new ol.Attribution({ html: 'obrazový podkres <a target="_blank" href="http://stamen.com">Stamen</a>, ' 
      + '<a target="_blank" href="https://samizdat.cz">Samizdat</a>, ' 
      + 'mapa KÚ <a target="_blank"href="https://www.cuzk.cz/ruian/RUIAN.aspx">ČÚZK</a>'
      + ', data <a target="_blank" href="http://intersucho.cz">'
    })
    ]
  })
})

var labels = new ol.layer.Tile({
  source: new ol.source.TileImage({
    url: 'https://interaktivni.rozhlas.cz/tiles/ton_l1/{z}/{x}/{y}.png',
    maxZoom: 15
   })
})

var layer = new ol.layer.VectorTile({
source: new ol.source.VectorTile({
    format: new ol.format.MVT(),
    tileGrid: tilegrid,
    tilePixelRatio: 8,
    url: 'http://data.irozhlas.cz/intersucho-map/tiles/{z}/{x}/{y}.pbf'
}),
    style: function(feature) {
        return getColor(feature.get('Kod'))
    }
});

var initZoom;

if (window.innerWidth < 768) {
initZoom = 6;
document.getElementById('tooltip').innerHTML = 'Kliknutím vyberte obec.'
} else {
initZoom = 7;
}

var map = new ol.Map({
interactions: ol.interaction.defaults({mouseWheelZoom:false}),
target: 'map',
view: new ol.View({
    center: ol.proj.transform([15.3350758, 49.7417517], 'EPSG:4326', 'EPSG:3857'), //Číhošť
    zoom: initZoom,
    minZoom: 6,
    maxZoom: 11
})
});

map.addLayer(background);
map.addLayer(layer);
map.addLayer(labels);

map.on('pointermove', function(evt) {
if (evt.dragging) {
    return;
}
var pixel = map.getEventPixel(evt.originalEvent);
if (map.hasFeatureAtPixel(pixel)){
    map.forEachFeatureAtPixel(pixel, function(feature, layer) {
        makeTooltip(feature.c);
    });
} else {
    document.getElementById('tooltip').innerHTML = 'Najetím vyberte obec.'
}
});

//mobil
map.on('singleclick', function(evt) {
var pixel = map.getEventPixel(evt.originalEvent);
if (map.hasFeatureAtPixel(pixel)){
    map.forEachFeatureAtPixel(pixel, function(feature, layer) {
        makeTooltip(feature.c);
    });
} else {
    document.getElementById('tooltip').innerHTML = 'Kliknutím vyberte obec.'
}
});

var form = document.getElementById("frm-geocode");
var geocoder = null;
var geocodeMarker = null;
form.onsubmit = function(event) {
event.preventDefault();
var text = document.getElementById("inp-geocode").value;
if (text == '') {
map.getView().setCenter(ol.proj.transform([15.3350758, 49.7417517], 'EPSG:4326', 'EPSG:3857'))
map.getView().setZoom(8)
} else {
$.get( "https://api.mapy.cz/geocode?query=" + text, function(data) {
    if (typeof $(data).find('item').attr('x') == 'undefined') {
        alert("Bohužel, danou adresu nebylo možné najít");
        return;
    }
        var x = parseFloat($(data).find('item').attr('x'))
        var y = parseFloat($(data).find('item').attr('y'))
        map.getView().setCenter(ol.proj.transform([x, y], 'EPSG:4326', 'EPSG:3857'))
        map.getView().setZoom(12)
}, 'xml');
} 
};