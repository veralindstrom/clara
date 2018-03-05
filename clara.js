$('#login').click(function() {
		window.location.href='clara2.html';
	});

var username = document.getElementById("username");
localStorage.setItem("username", username);
    // Retrieve
  document.getElementById("valkommen").innerHTML = "Välkommen " + username;

