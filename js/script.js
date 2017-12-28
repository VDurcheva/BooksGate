	function myFunction() {
		var x = document.getElementById("nav-primary");
		if (x.className === "nav-primary") {
			x.className += " responsive";
		} else {
			x.className = "nav-primary";
		}
    }