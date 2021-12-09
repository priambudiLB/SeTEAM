

var cloudinary = require('cloudinary').v2;

cloudinary.config({
    // cloudName: process.env.NEXT_CLDNRY_cloud_name
    cloudName: process.env.NEXT_CLDNRY_cloud_name,
    apiKey: process.env.NEXT_CLDNRY_api_key,
    apiSecret: process.env.NEXT_CLDNRY_api_secret,
    secure: process.env.NEXT_CLDNRY_secure
})

const UploadVideoClD =()=> {

}

export default UploadVideoClD;