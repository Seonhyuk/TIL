### webpack

모듈을 통합관리해주는 라이브러리

```
$ npm i -D webpack webpack-cli
```

번들링

```node
$ node_modules/.bin/webpack --mode development ./src/app.js ./dist/main.js
```

`webpack.config.js` 써서 config 파일 만들고 빌드 스크립트 추가해서 쉽게 사용 가능
