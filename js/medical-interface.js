import { getDoctor } from './../js/api.js';

$(document).ready(function(){
  $('#symptom').click(function(event){
    const symptomInput = $('#symptom-query').val();
    console.log(symptomInput);
    getDoctor(callback, symptomInput);
  });
  function callback(doctorsArray){
    console.log(doctorsArray);
  }
});
