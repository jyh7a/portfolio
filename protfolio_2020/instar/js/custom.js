$(document).ready(function () {

   //콘솔로 아래 인스타그램의 json객체 구조를 확인후 
   //index.html에 있는 li의 형태로 DOM을 생성해보세요.
   //각각의 li안의 p 태그에는 해시태그의 갯수만큼 반복을 돌며 #해시태그 형태로 출력


   /*
   자바스크립트 - 단이쓰레드 방식
   -- 함수처리가 하나
   -- 여러개의 함수요청이 몰리면 콜스택에 함수가 쌓여서 지연이 일어남
   -- 비동기 방식 채텍 ---> 함수 여러개를 순차적으로 미리호출 --> 어떤게 먼저 실행될지 모름
   (자바는 동기방식인데 쓰레드가 여러개다)


    ajax: 비동기방식으로 서버통신(promise객체 내장 : 비동기 -> 동기)
    $.ajax({
       url: 데이터를 불러올 타겟 주소,
       dataType: 'jsonp',
       data: {queryString}
    })
    .success(function(){
       ajax가 성공적으로 데이터를 호출하면 인수 data로 받아줌
    })
    .erro(function(){
       ajax가 데이터 호출에 실패하면 해당구문 실행
    })


    * queryString : 특정 웹페이지에 데이터요청을 보낼때 옵션값을 문자열 형테로         전송하는 방식
       abc.com?token=csi&count=10
    * jsonp : 다른 웹에있는 json파일 불러올때 jsonp 로 불러옴
       p는 아마 protection

   * http://dcodelab.co.kr/wheel_scroll 해보기

   */



   var iso;
   callData(isolayOut);

   $('.filter>li>a').on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      filterLayout(target);
   })

   $('#btnSearch').on('click', function (e) {
      e.preventDefault();
      var target = '.' + $('#search').val();
      filterLayout(target);
   })

   // 데이커 를 불러고오 레이아웃을 실행해야해서 동기방식으로 불러와야한다
   // setTimeout(isolayOut, 2000);
   // isolayOut();


   function callData(callback) {
      $.ajax({
            url: 'https://api.instagram.com/v1/users/self/media/recent/',
            dataType: 'jsonp',
            data: {
               access_token: '3254209395.1677ed0.c8937f71705f4365a0c3ce87d45e3bbd',
               count: 30
            }
         })
         .success(function (item) {
            // console.log(item.data);  
            var post = item.data;
            $(post).each(function (index, data) {
               // debugger;
               var hash = '';
               var len = this.tags.length;
               for (var i = 0; i < this.tags.length; i++) {
                  if (i == len - 1) {
                     hash += '#' + this.tags[i];
                  } else {
                     hash += '#' + this.tags[i] + ', ';
                  }
               }

               $('ul.list').append(
                  $('<li>').append(
                     $('<div>').append(
                        $('<a>').attr({
                           'href': this.link,
                           'target': 'blank'
                        }).append(
                           $('<img/>').attr('src', this.images.low_resolution.url)
                        )
                     ).append(
                        $('<p>').text(hash)
                     )
                  ).addClass('item')
               )

               var tagList = this.tags;
               for (var i = 0; i < tagList.length; i++) {
                  $('.item').eq(index).addClass(tagList[i]);
               }

            });

            setTimeout(function () {
               callback();
            }, 1000);
         })
         .error(function () {
            alert('Fail to load data');
         });
   }


   // https://isotope.metafizzy.co/
   function isolayOut() {
      // var $list = $('.list')[0];
      var elem = document.querySelector('.list');
      iso = new Isotope(elem, {
         itemSelector: '.item',
         columnWidth: '.item',
         transitionDuration: '0.8s',
         percentPosition: true,
      });
   }


   function filterLayout(target) {
      iso.arrange({
         filter: target
      })
   }

});