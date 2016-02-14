/*
<div class="patient">
  <img class="profileImg" src="./assets/images/profileReplacement.png">
  <div class="patientInfo">
    <p class="name">Huey Freeman</p>
    <p class="time">9:30 AM</p>
  </div>
</div>
<button type="logout" id="logoutButton">Logout</button>
*/

console.log("doctorinfo: " + JSON.stringify(doctorInfo));
var doctorSearch = "Michael Scott Anderson";

var dates = doctorInfo[0].dates[0];
console.log("doctorInfo: " + JSON.stringify(dates));
var date = JSON.stringify(dates.date);
date = date.substring(1, date.length - 1)
var dateHead = document.createElement("h1");
dateHead.innerHTML = "< " + date + " >";

var mainInfo = document.createElement("div");
mainInfo.id = "mainInfo";

var patients = dates.patients;

for (var i = 0; i < patients.length; i++) {
    var patient = document.createElement("div");
    patient.className = "patient";
    var para = document.createElement("p");
    var info = document.createElement("div");

    info.className = "patientInfo";
    var nameStr = JSON.stringify(patients[i].name);
    para.innerHTML = nameStr.substring(1, nameStr.length - 1);
    para.className = "name";

    var img = document.createElement("img");
    img.className = "profileImg";
    var imageURL = patients[1].image;
    imageURL = imageURL.substring(0, imageURL.length);
    console.log("imageURL: " + imageURL);
    img.src = imageURL;

    var time = document.createElement("p");
    var timeStr = JSON.stringify(patients[i].surgeryTime);
    time.innerHTML = timeStr.substring(1, timeStr.length - 1);
    time.className = "time";

    info.appendChild(para);
    info.appendChild(time);

    patient.appendChild(img);
    patient.appendChild(info);
    mainInfo.appendChild(patient);
}

var button = document.createElement("button");
button.type = "submit";
button.id = "LogoutButton";
button.innerHTML = "Logout";

mainInfo.appendChild(button);
document.getElementById("overall").appendChild(dateHead);
document.getElementById("overall").appendChild(mainInfo);
