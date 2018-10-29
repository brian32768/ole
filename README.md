# Olé

This is a FORK of the Boundless project, the original code is at
boundlessgeo/ole on github.

Integration of OpenLayers 5 and Esri ArcGIS REST services.

Provides the following functionality:
  * translation of ArcGIS REST API styling to OpenLayers 5 styles
  * automatic configuration of tile and image layers from the ArcGIS REST API

This version is based on Parcel.

## Getting started

This will install the node packages.
    npm install

## Test in development mode

This will run in development mode with hot module replacement.
    npm test
    http://127.0.0.1:1234/

This will build into the release folder, dist/ole/
    npm run build

## Test before release

This will run in release mode.
    npm start
    http://127.0.0.1:1234/

## Publish to npmjs.com

This will publish a new release to npmjs.com

    cd dist/ole
    npm publish

## Using npm

TODO -- figure out scoping and change this to "npm install @map46/ole"
    npm install ole-brian32768

## What is supported?

### <a href="http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Symbol_Objects/02r3000000n5000000/">Symbol objects</a>
  * Simple Marker Symbol: except for xoffset and yoffset
  * Simple Line Symbol
  * Simple Fill Symbol: except for style
  * Picture Marker Symbol: except for xoffset and yoffset
  * Text Symbol: except for backgroundColor, borderLineSize, borderLineColor, haloSize, haloColor, rightToLeft, kerning

### <a href="http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Renderer_objects/02r30000019t000000/">Renderer objects</a>
  * Simple renderer: except for rotationType, rotationExpression
  * Unique value renderer: except for field2, field3, fieldDelimiter, defaultLabel, rotationType, rotationExpression
  * Class breaks renderer: except for backgroundFillSymbol, rotationType, rotationExpression

## License

Copyright 2015 Boundless Spatial, Inc.

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0

NOTICE per the Apache license, just about every file in this project has been changed by brian32768.

## CHANGELOG

2018-10-24 version 0.7.0 Ported to run under parcel and updated to openlayers 5.
