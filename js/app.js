// Function to display sample code for css property
function showCodeWindow(button) {
	document.getElementById('modal').style.display = 'block';
	var result = "";
	
	if(button == 'button1') {
		result = "";
		result = "opacity: 0.2;";
	}
	else if(button == 'button2') {
		result = "";
		result = "transition: width 5s, background 5s, font 5s;";
	}
	else if(button == 'button3') {
		result = "";
		result = "background-image: linear-gradient(#e6fff9,#80ffdf,#1affc6,#00b386);";
	}
	else if(button == 'button4') {
		result = "";
		result = "background-image: radial-gradient(#e6fff9,#80ffdf,#1affc6,#00b386);";
	}
	else if(button == 'button5') {
		result = "";
		result = "border-radius: 12px;";
	}
	else if(button == 'button6') {
		result = "";
		result = "border-image: url('C:....path.../images/border.png') 2 stretch;";
	}
	else if(button == 'button7') {
		result = "";
		result = "text-shadow: 2px 2px grey;";
	}
	else if(button == 'button8') {
		result = "";
		result = "box-shadow: 5px 5px;";
	}
	else if(button == 'button9') {
		result = "";
		result = "writing-mode: vertical-rl;";
	}
	else if(button == 'button10') {
		result = "";
		result = "column-count: 3; <br/>";
		result = result + "column-gap: 5px; <br/>";
		result = result + "column-rule-style: dashed;";
	}
	else if(button == 'button11') {
		result = "";
		result = "transform: translate(60px,5px);"
	}
	else if(button == 'button12') {
		result = "";
		result = "transform: rotateX(160deg);";
	}

	document.getElementById('modal-content').innerHTML = result;
}

// Function to close modal box
function closeModal() {
	document.getElementById('modal').style.display ='none';
}

// Function to close modal box if clicked anywhere
window.onclick = function(event) {
	var modal = document.getElementById('modal');
	if (event.target == modal) {
		modal.style.display = 'none';
	}
}