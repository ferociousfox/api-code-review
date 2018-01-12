const apiKey = require('./../.env').apiKey;


export function getDoctor(callback, input) {
  const doctorsArray = [];
  const symptomInput = input;
  console.log(symptomInput);
  let request = new XMLHttpRequest();
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomInput}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      let results = response.data;
      console.log(results);
      console.log(results[0].profile.bio);
      results.forEach(function(i){
        doctorsArray.push(i.profile.last_name);
        console.log(doctorsArray);
      })
      callback(doctorsArray);
    }
  }
  request.open("get", url, true);
  request.send();
}
