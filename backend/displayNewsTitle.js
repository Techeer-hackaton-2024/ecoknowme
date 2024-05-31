const fetchAndParsePage = require('./gettext');  // gettext.js에서 함수 불러오기

async function displayNewsTitle() {
  const title = await fetchAndParsePage();  // fetchAndParsePage 함수를 호출하고 결과를 받습니다
  console.log("Fetched News Title:", title);  // 콘솔에 뉴스 제목 출력
}

displayNewsTitle();  // 함수 실행
