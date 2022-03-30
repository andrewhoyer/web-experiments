$(document).ready(function() {
	
	let colors = ['#ff0000', '#a52a2a', '#d2b48c', '#ffa500', '#ffff00', '#32cd32', '#808000', '#0000ff', '#800080', '#ffc0cb', '#808080'];
	
	setTimeout(rotateColors, 150);
	
	function rotateColors() {
	
		// Shift the color at the start to the end of the array
		firstColor = colors.shift();
		colors.push(firstColor);
		
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

		$('h1').css("text-shadow", dropshadowCSS);
	
		setTimeout(rotateColors, 150);
		
	}

});
