
import $ from 'jquery';
import ol from 'openlayers';

require('./style.scss');
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