ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                popuplayertitle: "Municipios",
                interactive: true,
                title: '<img src="styles/legend/Municipios_1.png" /> Municipios'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Municipios_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Municipios_1];
lyr_Municipios_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MUNICIPIO': 'MUNICIPIO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA1': 'AREA1', 'AREA2': 'AREA2', });
lyr_Municipios_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA1': 'TextEdit', 'AREA2': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'OBJECTID': 'no label', 'MUNICIPIO': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label - always visible', 'AREA1': 'no label', 'AREA2': 'no label', });
lyr_Municipios_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});