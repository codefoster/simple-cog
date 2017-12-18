import { computerVision, academicKnowledge } from 'cognitive-services';
require('dotnet').config();

let client = new computerVision({
    apiKey: process.env.VISION_API_KEY,
    endpoint: process.env.VISION_ENDPOINT
});

client.analyzeImage({
    parameters: {
        "visualFeatures": "ImageType,Faces,Adult,Categories,Color,Tags,Description",
        "details": "Celebrities"
    },
    headers: { 'Content-Type': 'application/json' },
    body: { "url": 'http://az616578.vo.msecnd.net/files/2016/10/09/636115830685164048-686058602_friends.jpg' }
}).then((response) => {
    response.description.captions.forEach(c => console.log(c.text));
});