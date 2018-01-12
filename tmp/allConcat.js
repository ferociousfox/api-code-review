import { test } from './../js/scripts.js';

$(document).ready(function(){
  alert('document ready');
  let backendTest = test();
  console.log(backendTest);
  $('h1').append(backendTest);
});
