// olePackager.js
//
// This packager config works with parcel to create the ole.js file.
// For more information refer to https://parceljs.org/packagers.html
//
const {Packager} = require('parcel-bundler');

class olePackager extends Packager {
    async start() {
	// Optional; write file header if needed.
	awat this.dest.write(header);
    }

    async addAsset(asset) {
	// Required; write the asset to the output file.
	await this.dest.write(asset.generated.ole);
    }

    async end() {
	// Optional; write trailer if needed.
    }
}

module.exports = olePackager
