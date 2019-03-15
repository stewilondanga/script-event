var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

function changeFruit() {
  var selectedFruit = document.getElementById("myFruit").value;
  document.getElementById("selectedFruit").innerHTML = selectedFruit;
}

/*function clickButton() {
  document.getElementById('box').classList.toggle('rotatedBox');
}

function showSecretMessage() {
  alert('I am the secret message');
}

function getKeyCode(e) {

  document.getElementById("getKeyCode").innerHTML = e.keyCode+" ";

}
