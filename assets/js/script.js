

function unhidePopup(popupID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById("popup-background").classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id
	document.getElementById(popupID).classList.remove("hidden");
}


//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 
document.getElementById("row1").onclick = unhidePopup;
/**
 * Calls unhideLightbox with the id of the first lightbox
 */	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
function unhidePopup1() {

	unhidePopup("box1");
}

document.getElementById("pic2").onclick = unhidePopup1;

function unhidePopup2() {

	unhidePopup("box2");
}

document.getElementById("pic3").onclick = unhidePopup2;

function unhidePopup3() {

	unhidePopup("box3");
}

document.getElementById("pic4").onclick = unhidePopup3;

function unhidePopup4() {

	unhidePopup("box4");
}

document.getElementById("pic5").onclick = unhidePopup4;

function unhidePopup5() {

	unhidePopup("box5");
}

document.getElementById("pic6").onclick = unhidePopup5;

function unhidePopup6() {

	unhidePopup("box6");
}

document.getElementById("pic7").onclick = unhidePopup6;

function unhidePopup7() {

	unhidePopup("box7");
}

document.getElementById("pic8").onclick = unhidePopup7;

function unhidePopup8() {

	unhidePopup("box8");
}

document.getElementById("pic9").onclick = unhidePopup8;

// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closePopup(popupID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById("popup-background").classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id
	document.getElementById(popupID).classList.add("hidden");
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllPopupboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var popupElements = document.getElementsByClassName("popup");

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < popupElements.length; i++) {
		// get id of this particular .lightbox div
		var id = popupElements[i].id;
		// call closeLightbox for this id
		closePopup(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementById("popup-background").onclick = closeAllPopupboxes;