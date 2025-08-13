var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SalinandariDataTitikBanjir2025_1 = new ol.format.GeoJSON();
var features_SalinandariDataTitikBanjir2025_1 = format_SalinandariDataTitikBanjir2025_1.readFeatures(json_SalinandariDataTitikBanjir2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SalinandariDataTitikBanjir2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SalinandariDataTitikBanjir2025_1.addFeatures(features_SalinandariDataTitikBanjir2025_1);
var lyr_SalinandariDataTitikBanjir2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SalinandariDataTitikBanjir2025_1, 
                style: style_SalinandariDataTitikBanjir2025_1,
                popuplayertitle: 'Salinan dari Data Titik Banjir - 2025',
                interactive: true,
                title: '<img src="styles/legend/SalinandariDataTitikBanjir2025_1.png" /> Salinan dari Data Titik Banjir - 2025'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SalinandariDataTitikBanjir2025_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SalinandariDataTitikBanjir2025_1];
lyr_SalinandariDataTitikBanjir2025_1.set('fieldAliases', {'id': 'id', 'unnamed': 'unnamed', 'desa': 'desa', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'tahun - bulan - tanggal': 'tahun - bulan - tanggal', 'Link': 'Link', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Longitude_Clean': 'Longitude_Clean', 'Latitude_Clean': 'Latitude_Clean', });
lyr_SalinandariDataTitikBanjir2025_1.set('fieldImages', {'id': '', 'unnamed': '', 'desa': '', 'kecamatan': '', 'kabupaten': '', 'tahun - bulan - tanggal': '', 'Link': '', 'Longitude': '', 'Latitude': '', 'Longitude_Clean': '', 'Latitude_Clean': '', });
lyr_SalinandariDataTitikBanjir2025_1.set('fieldLabels', {'id': 'no label', 'unnamed': 'no label', 'desa': 'no label', 'kecamatan': 'no label', 'kabupaten': 'no label', 'tahun - bulan - tanggal': 'no label', 'Link': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Longitude_Clean': 'no label', 'Latitude_Clean': 'no label', });
lyr_SalinandariDataTitikBanjir2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});