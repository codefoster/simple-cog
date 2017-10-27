import { computerVision } from 'cognitive-services';

let client = new computerVision({
    apiKey: "<key>",
    endpoint: "<endpoint>"
});

client.analyzeImage({
    parameters: {
        "visualFeatures": "ImageType,Faces,Adult,Categories,Color,Tags,Description",
        "details": "Celebrities,Landmarks"
    },
    headers: { 'Content-Type': 'application/json' },
    body: { "url": 'http://az616578.vo.msecnd.net/files/2016/10/09/636115830685164048-686058602_friends.jpg' }
}).then((response) => {
    response.description.captions.forEach(c => console.log(c.text));
});
