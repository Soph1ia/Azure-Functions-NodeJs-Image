const sharp = require("sharp");

function image_processing() {
    const image = sharp('image.jpg');
    image.resize({height: 1000, width: 1024});
    return image;
}

module.exports = {
    image_processing:image_processing
}

// image_processing()