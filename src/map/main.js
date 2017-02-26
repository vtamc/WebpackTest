
import $ from 'jquery';
import ol from 'openlayers';

require('./style.css');
require('openlayers/css/ol.css');

$(() => {

	let map = new ol.Map({
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target: 'map',
		view: new ol.View({
			center: [0, 0],
			zoom: 2
		})
	});
})