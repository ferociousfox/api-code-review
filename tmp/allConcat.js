import { getDoctor, getInfo } from './../js/api.js';

$(document).ready(function(){
  $('#symptom').click(function(event){
    const symptomInput = $('#symptom-query').val();
    console.log(symptomInput);
    getDoctor(callback, symptomInput);
  });
  function callback(doctorsArray){
    console.log(doctorsArray);
    doctorsArray.forEach(function(doc){
      $('#doc-for-symptom').append('<li> Dr. ' + doc + '</li>');

    });
  }
  $('#doctor').click(function(event){
    const doctorInput = $('#doctor-query').val();
    console.log(doctorInput);
    getInfo(hollerback, doctorInput);
  });
  function hollerback(infoArray){
    console.log(infoArray);
    infoArray.forEach(function(i){
      if (i === true) {
        $('#doc-info').append('<li>' + 'accepting new patients' + '</li>');
      }else if( i === false) {
        $('#doc-info').append('<li> not accepting new patients </li>');
      }else {
          $('#doc-info').append('<li>' + i + '</li>');
      }

    });
  }
});
