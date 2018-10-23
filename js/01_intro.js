var addOne = function(number) {
  return number + 1;
};

/*

generate an HSL color with a hue as an imput 
in this format:
"hsl(20,100%,100%)"
*/

var hslColor = function(hue) {
	var color = "hsl(" + hue + ", 100%, 100%)"
	return color;
};