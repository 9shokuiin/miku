$(function () {
    $(".hoppe_on").on("click", function () {
      $(".miku").toggleClass("change");
    });
  });

  function audio(){
    if (document.getElementById('bunko').muted == false) {
      document.getElementById('bunko').currentTime = 0;  //連続クリックに対応
      document.getElementById('bunko').play(); //クリックしたら音を再生
    }
    else{
      document.getElementById('unko').currentTime = 0;  //連続クリックに対応
      document.getElementById('unko').play(); //クリックしたら音を再生
    }
}  

function change() {
  if (document.getElementById('bunko').muted) {
      document.getElementById('bunko').muted = false;
  } 
  else {
      document.getElementById('bunko').muted = true;
  }
}

// muteの切り替え
/*function change() {
  if (document.getElementById('bunko').muted) {
      document.getElementById('bunko').muted = false;
  } 
  else {
      document.getElementById('bunko').muted = true;
  }
}*/


/*window.onload = function audio() {
    document.getElementById('.bunko').currentTime = 0;  //連続クリックに対応
    document.getElementById('.bunko').play(); //クリックしたら音を再生
};*/

//https://kakechimaru.com/btn_audio/