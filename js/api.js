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
      results.forEach(function(i){
        doctorsArray.push(i.profile.last_name);
      });
    callback(doctorsArray);
    }
    request.open("get", url, true);
    request.send();
  };
}

export function getInfo(hollerback, doctorInput) {
  const infoArray = [];
  const dr = doctorInput;
  console.log(doctorInput);
  let request = new XMLHttpRequest();
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${dr}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`;
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      let results = response.data;
      infoArray.push(results[0].profile.first_name);
      infoArray.push(results[0].profile.last_name);
      infoArray.push(results[0].profile.bio);
      infoArray.push(results[0].practices[0].accepts_new_patients);
      infoArray.push(results[0].practices[0].visit_address.street);
      infoArray.push(results[0].practices[0].visit_address.city);
      infoArray.push(results[0].practices[0].visit_address.state);
      infoArray.push(results[0].practices[0].visit_address.zip);
      infoArray.push(results[0].practices[0].phones[0].number);
      hollerback(infoArray);
    }
  };
  request.open("get", url, true);
  request.send();
}
