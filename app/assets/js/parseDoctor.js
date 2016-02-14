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
var doctor = "Michael Scott Anderson";

for (doctor in doctorInfo) {
	console.log("doctor: " + JSON.stringify(doctorInfo.doctor));
}
