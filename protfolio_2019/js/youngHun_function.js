// 바둑에서 쓸 현재 흰색돌(검은돌) 주변에 남은 
// 좌표배열 중복 제거후 length 및 기타 리턴
function returnUniqeLength(array) {
  var temp = [];
  var final = [];

  // 2차배열을 문자열 배열(1차)로 만들어줌
  for (var i = 0; i < array.length; i++) {
    temp = temp.concat(array[i].join());
    for (var j = 0; j < array[i].length; j++) {

    } //for
  } //for

  // 중복값 제거
  final = temp.filter(function (item, index) {
    return temp.indexOf(item) === index;
  });

  return {
    orign: temp,
    orign_length: temp.length,
    unique: final,
    unique_length: final.length
  };
}


// 원하는 숫자 랜덤하게 뽑기 처음은 원래배열을 썩는것이다. 피셔에이치 셔플
// total: 총뽑을 개수 
// option: 옵션붙으면 옵션개수만큼나옴
// 0붙이면 총뽑을개수 나옴
// fromZero: true면 0부터 false면 1부터
function randomPull(total, optionLen, fromZero) {
  optionLen ? optionLen = optionLen : optionLen = 0;
  var 후보군 = Array(total)
    .fill() // undefined로 채운다
    .map(function (요소, 인덱스) { // 1대1로 짝지어줌
      // return 인덱스 + 1;  // 1부터 뽑으면 +1, 0부터 뽑으면 인덱스     
      if (fromZero) {
        return 인덱스;
      } else {
        return 인덱스 + 1;
      }
    });

  var 셔플 = [];

  if (total - optionLen >= 0) {
    while (후보군.length > total - optionLen) {
      var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
      셔플.push(이동값);
    }
  } else {
    return 셔플; // total - optionLen 음수일때
  }

  return 셔플; // 만들어진 배열 리턴
}


// 현재 브라우저의 종류
// 익스인지, 크롬인지, 사파리인지 알려준다
function checkCurrentBrowser() {
  if (document.querySelector('body')) {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
      // alert('Opera');
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      if (window.navigator.userAgent.indexOf("Edge") > -1) {
        // alert('Edge');
        document.querySelector('body').classList.add('ie');
      } else {
        // alert('Chrome');
        document.querySelector('body').classList.add('chrome');

      }

    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      document.querySelector('body').classList.add('safari');
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      // alert('Firefox');
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
      // alert('IE');
      document.querySelector('body').classList.add('ie');
    } else {
      // alert('unknown');
    }
  }

}
checkCurrentBrowser();



// 현재 접속한 기기가 모바일인지 테스크탑인지 모바일 데스크탑
// 핸드폰인지 데스크탑인지 판별
var isMobile = null;

// 모바일인지 데스크탑인지 확인
var filter = "win16|win32|win64|mac|macintel";
if (navigator.platform) {
  if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
    // mobile
    // alert('mobile 접속');
    isMobile = true;
    document.querySelector('body').classList.add('mobile');
  } else {
    // pc
    // alert('pc 접속');
    isMobile = false;
  }
}




// safari audio delay , 사파리에서 오디오 딜레이 
setTimeout(function () {
  if ($('body').hasClass('ie')) {

  } else {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
  }
}, 0);
// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();