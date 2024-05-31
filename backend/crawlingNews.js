// 필요한 모듈을 불러옵니다.
const axios = require('axios');
const cheerio = require('cheerio');


// 웹 페이지의 HTML을 가져오고 파싱하는 함수
async function fetchAndParsePage() {
  try {
    // 크롤링할 웹 페이지 URL을 설정합니다. (예: 뉴스 기사)
    const url = 'https://n.news.naver.com/mnews/article/005/0001700237';
    // HTTP 요청을 통해 웹 페이지의 HTML을 가져옵니다.
    const response = await axios.get(url);
    const html = response.data;

    // cheerio를 사용하여 HTML을 로드합니다.
    const $ = cheerio.load(html);

    // 원하는 데이터를 선택하여 추출합니다.
    // 예: 첫 번째 'h1' 태그의 텍스트를 가져옵니다.
    const pageTitle = $('#dic_area').text();

    // 결과를 콘솔에 출력합니다.
    return pageTitle
  } catch (error) {
    console.error("Error fetching or parsing the page:", error.message);
  }
}

module.exports = fetchAndParsePage; // 함수 내보내기
