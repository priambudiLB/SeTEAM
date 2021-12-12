
import { Cloudinary } from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
        // cloudName: process.env.NEXT_CLDNRY_cloud_name
        cloudName: process.env.NEXT_CLDNRY_cloud_name,
        apiKey: process.env.NEXT_CLDNRY_api_key,
        apiSecret: process.env.NEXT_CLDNRY_api_secret,
        secure: process.env.NEXT_CLDNRY_secure
    }
});

export async function FetchVideo() {
     // Instantiate a CloudinaryVideo object for the video with public ID, 'elephants'.
     const myVideo = await cld.video('/samples/sea-turtle');

     // Apply the transformation.
     myVideo.resize(scale().width(800));
 
     // Get the URL of the video.
     const myURL = await myVideo.toURL();
     console.log(myURL)
     return myURL;
}