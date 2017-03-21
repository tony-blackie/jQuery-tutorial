
  var counter = 0;
  function addParagraph() {

      var div = document.getElementById('add');

      if (counter == 2) {
          var listParagraph = document.getElementsByTagName('p');
          for (var i = 0; i < listParagraph.length +1; i++) {
              console.log(div.firstChild);
              div.removeChild(div.firstChild);
          }

          counter = 0;
          return;
      }


      var paragraph = document.createElement('p');
      paragraph.innerHTML = 'new paragraph';
      div.appendChild(paragraph);

      counter = counter + 1;

}
