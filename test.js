// test.js olé
// Load the pre-built package to test it.
import { LayerGenerator, StyleGenerator, VectorLayerModifier } from "./dest/ole";

let props = {
    'config' : {
	fullExtent : { xmin : 0,
		       xmax : 0,
		       ymin : 0,
		       ymax : 0 },
	tileServers : null, tileInfo : null,
	spatialReference : { wkid : '3857' },
	units : 'm',
	copyrightText : 'Copyright 1993 Wildsong'
    },
    'url'    : 'https://cc-gis.clatsop.co.clatsop.or.us/arcgis/rest/services/Assessment_and_Taxation/Taxlots_3857/FeatureServer/1'
};
let lg = new LayerGenerator(props);
console.log('layergenerator: ', lg);

let stylish = new StyleGenerator();
console.log('stylegenerator: ', stylish);

// FIXME Looks this stuff comes from an esri json object.
let layerInfo = null;
let layer = null;
let mapProjection = null;
//VectorLayerModifier.modifyLayer(layerInfo, layer, mapProjection);

console.log("test.js loaded");
