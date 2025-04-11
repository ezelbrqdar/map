var wms_layers = [];

var format_IRQ_adm1_0 = new ol.format.GeoJSON();
var features_IRQ_adm1_0 = format_IRQ_adm1_0.readFeatures(json_IRQ_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRQ_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRQ_adm1_0.addFeatures(features_IRQ_adm1_0);
var lyr_IRQ_adm1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRQ_adm1_0, 
                style: style_IRQ_adm1_0,
                popuplayertitle: 'IRQ_adm1',
                interactive: true,
    title: 'IRQ_adm1<br />\
    <img src="styles/legend/IRQ_adm1_0_0.png" /> <br />\
    <img src="styles/legend/IRQ_adm1_0_1.png" /> Al-Anbar<br />\
    <img src="styles/legend/IRQ_adm1_0_2.png" /> Al-Basrah<br />\
    <img src="styles/legend/IRQ_adm1_0_3.png" /> Al-Muthannia<br />\
    <img src="styles/legend/IRQ_adm1_0_4.png" /> Al-Qadisiyah<br />\
    <img src="styles/legend/IRQ_adm1_0_5.png" /> An-Najaf<br />\
    <img src="styles/legend/IRQ_adm1_0_6.png" /> Arbil<br />\
    <img src="styles/legend/IRQ_adm1_0_7.png" /> As-Sulaymaniyah<br />\
    <img src="styles/legend/IRQ_adm1_0_8.png" /> At-Ta\'mim<br />\
    <img src="styles/legend/IRQ_adm1_0_9.png" /> Babil<br />\
    <img src="styles/legend/IRQ_adm1_0_10.png" /> Baghdad<br />\
    <img src="styles/legend/IRQ_adm1_0_11.png" /> Dhi-Qar<br />\
    <img src="styles/legend/IRQ_adm1_0_12.png" /> Dihok<br />\
    <img src="styles/legend/IRQ_adm1_0_13.png" /> Diyala<br />\
    <img src="styles/legend/IRQ_adm1_0_14.png" /> Karbala\'<br />\
    <img src="styles/legend/IRQ_adm1_0_15.png" /> Maysan<br />\
    <img src="styles/legend/IRQ_adm1_0_16.png" /> Ninawa<br />\
    <img src="styles/legend/IRQ_adm1_0_17.png" /> Sala ad-Din<br />\
    <img src="styles/legend/IRQ_adm1_0_18.png" /> Wasit<br />' });

lyr_IRQ_adm1_0.setVisible(true);
var layersList = [lyr_IRQ_adm1_0];
lyr_IRQ_adm1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_IRQ_adm1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_IRQ_adm1_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'header label - always visible', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_IRQ_adm1_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});