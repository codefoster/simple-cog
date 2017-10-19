import * as cognitiveServices from 'cognitive-services';
import * as dotenv from 'dotenv';

dotenv.config();

let client = new cognitiveServices.computerVision({
    apiKey: process.env.VISION_API_KEY || "",
    endpoint: process.env.VISION_ENDPOINT || ""
});

let parameters = {
    "visualFeatures": "ImageType,Faces,Adult,Categories,Color,Tags,Description",
    "details": "Celebrities,Landmarks"
};

let headers = {
    'Content-type': 'application/json'
};

var body = {
    "url": 'http://az616578.vo.msecnd.net/files/2016/10/09/636115830685164048-686058602_friends.jpg'
};

client.analyzeImage({
    parameters,
    headers,
    body
}).then((response) => {
    response.description.captions.forEach(c => console.log(c.text));
});
