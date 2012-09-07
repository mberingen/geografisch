---
published: true
layout: article
title: Making maps with Leaflet
abstract: How to make a simple but beautiful map with Leaflet
author_twitter: geo_grafisch
author: Marc Beringen
categories:
- articles
---

# Making maps with Leaflet

Leaflet is a modern open-source JavaScript library for mobile-friendly interactive maps. 

Leaflet is built from the ground up to work efficiently on both desktop and mobile platforms like iOS and Android, taking advantage of HTML5 and CSS3 on modern browsers. The focus is on usability, performance, small size, A-grade browser support and a simple API with convention over configuration. The OOP-based code of the library is designed to be modular, extensible and very easy to understand.

Most people seem to think maps on the internet consist entirely of a Google Map with some markers on it. Leaflet provides an easy to use alternative that is capable of doing much more.

Let's start with a simple example and build from there.

## Preparing your page

Before writing any code for the map, you need to do the following preparation steps on your page:

* Include Leaflet CSS files in the head section of your document:

    `<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.css" />    
    <!--[if lte IE 8]>    
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.ie.css" />
    <![endif]-->`

* Include Leaflet JavaScript file:

    `<script src="http://cdn.leafletjs.com/leaflet-0.4/leaflet.js"></script>`

* Put a div element with a certain id where you want your map to be:

    `<div id="map"></div>`

* Make sure the map container has a defined height, for example by setting it in CSS:

	#map { height: 180px; }

Now you’re ready to initialize the map and do some stuff with it.