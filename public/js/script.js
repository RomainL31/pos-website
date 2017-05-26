$("#menu-toggle").click(function(e) {
		console.log(here);
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});