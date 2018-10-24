import {Map, View} from "ol";
import {Tile as TileLayer, Vector as VectorLayer} from "ol/layer";
import {XYZ, Vector as VectorSource} from "ol/source";
import {EsriJSON} from "ol/format";
import VectorLayerModifier from './src/VectorLayerModifier.js';
import {tile as TileLoader} from 'ol/loadingstrategy';
import {createXYZ as tileCreateXYZ} from 'ol/tilegrid';
import {get as getProjection} from 'ol/proj';
import jquery from 'jquery/dist/jquery.min.js';

const attribution = 'Basemap tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/' + 'rest/services/World_Topo_Map/MapServer">ArcGIS</a>';

var raster = new TileLayer({
    source: new XYZ({
	attributions: [attribution],
	url: 'http://server.arcgisonline.com/ArcGIS/rest/services/' +
            'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    })
});

var map = new Map({
    layers: [raster],
    target: 'map',
    attributionOptions: {
	collapsible: false
    },
    view: new View({center: [0, 0], zoom: 2})
});

document.getElementById('connect').addEventListener('click', function() {
    var serviceUrl = document.getElementById('service-url').value;
    var layer = document.getElementById('layer-id').value;
    var esrijsonFormat = new EsriJSON();
    var vectorSource = new VectorSource({
	loader: function(extent, resolution, projection) {
            var url = serviceUrl + '/' + layer + '/query/?f=json&' +
		'returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=' +
		encodeURIComponent('{"xmin":' + extent[0] + ',"ymin":' +
				   extent[1] + ',"xmax":' + extent[2] + ',"ymax":' + extent[3] +
				   ',"spatialReference":{"wkid":102100}}') +
		'&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*' +
		'&outSR=102100';
            $.ajax({url: url, dataType: 'jsonp', success: function(response) {
		if (response.error) {
		    alert(response.error.message + '\n' +
			  response.error.details.join('\n'));
		} else {
		    // dataProjection will be read from document
		    var features = esrijsonFormat.readFeatures(response, {
			featureProjection: projection
		    });
		    if (features.length > 0) {
			vectorSource.addFeatures(features);
		    }
		}
            }});
	},
	strategy: TileLoader(tileCreateXYZ({
            tileSize: 512
	}))
    });
    var vector = new VectorLayer({
	source: vectorSource,
	attribution: 'Ziggy Stardust'
    });
    var styleUrl = serviceUrl + '/' + layer + '?f=json';
    $.ajax({url: styleUrl, dataType: 'jsonp', success: function(response) {
	if (response.error) {
            alert(response.error.message + '\n' +
		  response.error.details.join('\n'));
	} else {
            var srs = response.extent.spatialReference.wkid;
            var extent = [response.extent.xmin, response.extent.ymin, response.extent.xmax, response.extent.ymax];
            if (srs === 4267) {
		extent = getProjection('EPSG:3857').getExtent();
            }
	    map.getView().fit(extent, map.getSize());

            VectorLayerModifier.modifyLayer(response, vector, map.getView().getProjection());
            map.getLayers().forEach(function(lyr) {
		if (lyr instanceof VectorLayer) {
		    map.removeLayer(lyr);
		}
            });
            map.addLayer(vector);
	}
    }});
});

