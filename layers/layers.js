var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Point_Interet_1 = new ol.format.GeoJSON();
var features_Point_Interet_1 = format_Point_Interet_1.readFeatures(json_Point_Interet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_Interet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Interet_1.addFeatures(features_Point_Interet_1);
var lyr_Point_Interet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Point_Interet_1, 
                style: style_Point_Interet_1,
                interactive: true,
                title: '<img src="styles/legend/Point_Interet_1.png" /> Point_Interet'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Point_Interet_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Point_Interet_1];
lyr_Point_Interet_1.set('fieldAliases', {'id': 'id', 'Ville': 'Ville', 'Descriptif': 'Descriptif', });
lyr_Point_Interet_1.set('fieldImages', {'id': '', 'Ville': '', 'Descriptif': '', });
lyr_Point_Interet_1.set('fieldLabels', {'id': 'no label', 'Ville': 'no label', 'Descriptif': 'no label', });
lyr_Point_Interet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});