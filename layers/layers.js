var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lake_2 = new ol.format.GeoJSON();
var features_Lake_2 = format_Lake_2.readFeatures(json_Lake_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lake_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lake_2.addFeatures(features_Lake_2);
var lyr_Lake_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lake_2, 
                style: style_Lake_2,
                popuplayertitle: 'Lake',
                interactive: true,
                title: '<img src="styles/legend/Lake_2.png" /> Lake'
            });
var format_WetlandsLocation_3 = new ol.format.GeoJSON();
var features_WetlandsLocation_3 = format_WetlandsLocation_3.readFeatures(json_WetlandsLocation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WetlandsLocation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WetlandsLocation_3.addFeatures(features_WetlandsLocation_3);
var lyr_WetlandsLocation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WetlandsLocation_3, 
                style: style_WetlandsLocation_3,
                popuplayertitle: 'Wetlands Location',
                interactive: true,
                title: '<img src="styles/legend/WetlandsLocation_3.png" /> Wetlands Location'
            });
var format_StateBoundary_4 = new ol.format.GeoJSON();
var features_StateBoundary_4 = format_StateBoundary_4.readFeatures(json_StateBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_4.addFeatures(features_StateBoundary_4);
var lyr_StateBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundary_4, 
                style: style_StateBoundary_4,
                popuplayertitle: 'State Boundary',
                interactive: true,
                title: '<img src="styles/legend/StateBoundary_4.png" /> State Boundary'
            });
var format_DistrictBoundary_5 = new ol.format.GeoJSON();
var features_DistrictBoundary_5 = format_DistrictBoundary_5.readFeatures(json_DistrictBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundary_5.addFeatures(features_DistrictBoundary_5);
var lyr_DistrictBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundary_5, 
                style: style_DistrictBoundary_5,
                popuplayertitle: 'District Boundary',
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundary_5.png" /> District Boundary'
            });
var group_AdministrativeBoundary = new ol.layer.Group({
                                layers: [lyr_StateBoundary_4,lyr_DistrictBoundary_5,],
                                fold: "open",
                                title: 'Administrative Boundary'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Lake_2.setVisible(true);lyr_WetlandsLocation_3.setVisible(true);lyr_StateBoundary_4.setVisible(true);lyr_DistrictBoundary_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Lake_2,lyr_WetlandsLocation_3,group_AdministrativeBoundary];
lyr_Lake_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WetlandsLocation_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'S_No': 'S_No', 'Wetland_Na': 'Wetland_Na', 'Y': 'Y', 'X': 'X', 'S_No_1': 'Sl No.', 'Wetland_Name': 'Wetland Name', 'Geographical_Coordinates__Latitude_and_Longitude_of_the_centre_o': 'Geographical Coordinates', 'District__s__in_which_the_Wetland_is_located': 'District (s)', 'Village': 'Village', 'Wetlands_Type__Inland_or_Coastal_': 'Wetlands Type (Inland or Coastal)', 'Wetlands_Sub_Type__Natural_or_Human__made_': 'Wetlands Sub-Type (Natural or Human- made)', 'Area_in__ha_': 'Area(HA)', 'Khasra_No__Areas': 'Khasra No./Areas', 'Whether_falls_within_category_of_regulated_wetlands_as_per_Wetla': 'Whether_falls_within_category_of_regulated_wetlands_as_per_Wetla', 'Land_owner_ships': 'Land Ownerships', 'Remarks': 'Remarks', 'Status': 'Status', });
lyr_StateBoundary_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'Area': 'Area(SQ.KM)', 'Population': 'Population(2021)', });
lyr_DistrictBoundary_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'shapeName': 'District (s)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Area': 'Area(SQ.KM)', });
lyr_Lake_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WetlandsLocation_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'S_No': 'TextEdit', 'Wetland_Na': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'S_No_1': 'TextEdit', 'Wetland_Name': 'TextEdit', 'Geographical_Coordinates__Latitude_and_Longitude_of_the_centre_o': 'TextEdit', 'District__s__in_which_the_Wetland_is_located': 'TextEdit', 'Village': 'TextEdit', 'Wetlands_Type__Inland_or_Coastal_': 'TextEdit', 'Wetlands_Sub_Type__Natural_or_Human__made_': 'TextEdit', 'Area_in__ha_': 'TextEdit', 'Khasra_No__Areas': 'TextEdit', 'Whether_falls_within_category_of_regulated_wetlands_as_per_Wetla': 'TextEdit', 'Land_owner_ships': 'TextEdit', 'Remarks': 'TextEdit', 'Status': 'TextEdit', });
lyr_StateBoundary_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': '', 'Area': '', 'Population': '', });
lyr_DistrictBoundary_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'shapeName': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_Lake_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_WetlandsLocation_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'S_No': 'hidden field', 'Wetland_Na': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'S_No_1': 'inline label - visible with data', 'Wetland_Name': 'inline label - visible with data', 'Geographical_Coordinates__Latitude_and_Longitude_of_the_centre_o': 'inline label - visible with data', 'District__s__in_which_the_Wetland_is_located': 'inline label - visible with data', 'Village': 'inline label - visible with data', 'Wetlands_Type__Inland_or_Coastal_': 'inline label - visible with data', 'Wetlands_Sub_Type__Natural_or_Human__made_': 'inline label - visible with data', 'Area_in__ha_': 'inline label - visible with data', 'Khasra_No__Areas': 'inline label - visible with data', 'Whether_falls_within_category_of_regulated_wetlands_as_per_Wetla': 'inline label - visible with data', 'Land_owner_ships': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_StateBoundary_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Population': 'inline label - visible with data', });
lyr_DistrictBoundary_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'shapeName': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Area': 'inline label - visible with data', });
lyr_DistrictBoundary_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});