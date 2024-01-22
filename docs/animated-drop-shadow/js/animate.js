$(document).ready(function() {
	
	let colors = ['#ff0000', '#a52a2a', '#d2b48c', '#ffa500', '#ffff00', '#32cd32', '#808000', '#0000ff', '#800080', '#ffc0cb', '#808080'];
	
	setTimeout(rotateColors, 200);
	
	function rotateColors() {
	
		// Pick up the first color to be used as the text color
		firstColor = colors.shift();
		
		let dropshadowCSS      = "";
		let thickness          = 4;
		let thicknessIncrement = 4;
		
		for (let index in colors) {
			
			// Build a string of CSS drop shadow definitions
			dropshadowCSS += colors[index] + " " + thickness + "px " + thickness + "px 0px,"; 		
			thickness     += thicknessIncrement;
			
		}
		
		// Remove the trailing comma
		dropshadowCSS = dropshadowCSS.substring(0, dropshadowCSS.length - 1);

		// Set the CSS for the drop shadows and text color
		$('h1').css("text-shadow", dropshadowCSS);
		$('h1').css("color", firstColor);

		// Put the current text color to the back of the list
		colors.push(firstColor);
	
		setTimeout(rotateColors, 200);
		
	}

});
