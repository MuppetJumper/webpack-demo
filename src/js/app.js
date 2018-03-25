var $ = require('jquery');
import shout from './shout';
import '../css/main.css';

$(document).ready(function () {
  let outputParagraph = $("#outputParagraph");
  $("#outputParagraph").text(shout('Yuval'));  
});
