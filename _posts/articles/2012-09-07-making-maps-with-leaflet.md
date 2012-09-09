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

<pre>	
<code>&lt;link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.css" /&gt;<br />    
&lt;!--[if lte IE 8]&gt; 
&lt;link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.4/leaflet.ie.css" /&gt;
&lt;![endif]--&gt;
</code>
</pre>

* Include Leaflet JavaScript file:

    `<script src="http://cdn.leafletjs.com/leaflet-0.4/leaflet.js"></script>`

* Put a div element with a certain id where you want your map to be:

    `<div id="map"></div>`

* Make sure the map container has a defined height, for example by setting it in CSS:

    `#map { height: 180px; }`

Now you’re ready to initialize the map and do some stuff with it.

## Setting up the map

Let’s create a map of the center of London with pretty CloudMade tiles. First we’ll initialize the map and set its view to our chosen geographical coordinates and a zoom level:

    var map = L.map('map').setView([51.505, -0.09], 13);
    
By default (as we didn’t pass any options when creating the map instance), all mouse and touch interactions on the map are enabled, and it has zoom and attribution controls.

Note that setView call also returns the map object — most Leaflet methods act like this when they don’t return an explicit value, which allows convenient jQuery-like method chaining.

Next we’ll add a tile layer to add to our map, in this case it’s a CloudMade tile layer with Fresh style. Creating a tile layer usually involves setting the URL template for the tile images (get yours at CloudMade), the attribution text and the maximum zoom level of the layer:

    L.tileLayer('http://{s}.tile.cloudmade.com/API-key/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);
    
Make sure all the code is called after the div and leaflet.js inclusion. That’s it! You have a working Leaflet map now.

![leaflet map](../static/img/media/leaflet-map.png)

It’s worth noting that Leaflet is provider-agnostic, meaning that it doesn’t enforce a particular choice of providers for tiles, and it doesn’t even contain a single provider-specific line of code, so you’re free to use other providers if you need to (we’d recommend CloudMade though, it looks beautiful).