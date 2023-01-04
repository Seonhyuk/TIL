## JS 개발환경 구축 + ES6+ 공부용 repo

`.vscode` : 저장시 자동으로 lint 적용되도록 설정되어있다.
`.husky` : git hooks 등 husky 관련 shell script 폴더

lint랑 git hook 연결을 위해 lint 파일을 root에 만들어뒀는데,
이러면 하위 폴더에서 lint가 제대로 동작하지 않는다.
