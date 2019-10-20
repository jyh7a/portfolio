(function() {
  // 리사이즈 실행 빈도 낮추기
  var resizeTimer = null;
  // 현재 화면 높이
  var currenWindowHeight = window.innerHeight;
  addPopupHeight(currenWindowHeight);

  $(window).on("resize", function() {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function() {
      currenWindowHeight = window.innerHeight;
      addPopupHeight(currenWindowHeight);
    }, 100);
  });

  $('.popup .fa-close').on('click', function(){
     $('.popup').hide();
  })

   $('.popup-01').on('click', function(){
      $('.popup').show();
   })  
})();

function addPopupHeight(h) {
  $(".popup").css("height", h);
}
