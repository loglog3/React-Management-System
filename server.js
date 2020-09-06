const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([ 
        {
            'id': 1,
            'image': 'https://placeimg.com/64/63/any', // 랜덤으로 이미지 뿌려주는 사이트
            'name': '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/62/any', // 랜덤으로 이미지 뿌려주는 사이트
            'name': '홍길순',
            'birthday': '921212',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/61/any', // 랜덤으로 이미지 뿌려주는 사이트
            'name': '홍덕순',
            'birthday': '930221',
            'gender': '남자',
            'job': '간호사'
        }
    ])


});

app.listen(port, () => console.log(`Listening on port ${port}`));
