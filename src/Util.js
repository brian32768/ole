// FORK of boundlessgeo/ole on github. This file has been changed.

import {METERS_PER_UNIT} from 'ol/proj';

export var utils = {
  isDefinedAndNotNull(value) {
    return (value !== undefined && value !== null);
  },
  getResolutionForScale(scale, units) {
    var dpi = 25.4 / 0.28;
    var mpu = METERS_PER_UNIT[units];
    var inchesPerMeter = 39.37;
    return parseFloat(scale) / (mpu * inchesPerMeter * dpi);
  }
};


