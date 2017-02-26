
	import $ from 'jquery';
	import ol from 'openlayers';
	import css from './style.css';
	import olStyle from '../node_modules/openlayers/css/ol.css';

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