// MENUボタンがクリックされたときの処理
$('#menu_btn').on('click', function(){
  SlideMenu()
});

// スライドメニュー関数
const SlideMenu = () => {
  if($('#menu').hasClass("SlideOut")){
    // スライドメニューが非表示なら表示
    $('#menu').removeClass('SlideOut');
    $('#menu').addClass('SlideIN');
  } else {
    // スライドメニューがあれば非表示
    $('#menu').removeClass('SlideIN');
    $('#menu').addClass('SlideOut');
  }
}
