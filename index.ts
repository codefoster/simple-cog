import * as cognitiveServices from 'cognitive-services';

let client = new cognitiveServices.computerVision({
    apiKey: "<key>",
    endpoint: "<endpoint>"
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
