var clickedTime; var createdTime; var reactionTime;

        function reappear(){

        	// randomize color
        	var colors = ["red", "blue", "green", "yellow", "purple", "black"];
        	var index = Math.random();
        	index = index * 5;
        	index = Math.floor(index);
        	document.getElementById("redBox").style.backgroundColor = colors[index];

        	// get randomized numbers for positioning
    		document.getElementById("redBox").style.top = Math.random() * 600 + "px";
    		document.getElementById("redBox").style.left = Math.random() * 1700 + "px";

        	// get time box was created--used to calculate reaction time
        	createdTime = Date.now();

        	// sometimes make a circle
        	if (Math.random() > 0.5){
        		document.getElementById("redBox").style.borderRadius = "100px";
        	}

        	// display box
    		setTimeout(function(){
    			document.getElementById("redBox").style.display = "block";
    		}, (Math.random())*4000);
    	}


    	document.getElementById("redBox").onclick=function(){
    		clickedTime = Date.now();
    		reactionTime = (clickedTime - createdTime) / 1000;
    		document.getElementById("time").innerHTML = reactionTime;
    		this.style.display = "none";
    		reappear();
    	}

    	reappear();