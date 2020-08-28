var playing = false;
var score 
var action;
var timeremaining;
var correctAnswer;
document.getElementById("start").onclick=
    function (){
		if(playing == true){
       		locatiion.reload(); 
    }else{
		playing = true;
        score = 0;
		
document.getElementById("scorevalue").innerHTML = score;
		
		
show("time");
        timeremaining = 60;
		document.getElementById("timevalue").innerHTML = timeremaining;
		hide("gameover");
		document.getElementById("start").innerHTML = "reset game";
		
		
		startcountdown();
		generateQa();
    }
}
 //
for(i=1; i<5; i++){
	document.getElementById("box"+i).onclick = function(){
		if(playing== true)
			{
				if(this.innerHTML == correctAnswer){
					score++;
					
					document.getElementById("scorevalue").innerHTML = score;
					
					hide("incorrect");
					show("correct");
					setTimeout(function(){
						hide("correct");
					}, 1000);
					
					generateQa();
				}else{
					hide("correct");
					show("wrong");setTimeout(function(){
						hide("correct");
					}, 1000);
				}
			}
	}
}











function startcountdown() {
	action = setInterval(function(){
		timeremaining -=1 ;
		
		document.getElementById("timevalue").innerHTML = timeremaining;
		if(timeremaining == 0){
			stopcountdown();
			
			show("gameover");
			document.getElementById("gameover").innerHTML = "<p> Game over!</p><p>Your score is "+ score+ ".</p>";
			hide("time");
			hide("correct");
			hide("incorrect");
			playing = false;
			document.getElementById("start").innerHTML = "start";
			
		}
		}, 1000);
}
function stopcountdown(){
	clearInterval(action);
}
function hide(ID){
	document.getElementById(ID).style.display = "none";
}
function show(ID){
	document.getElementById(ID).style.display = "block";
}
function generateQa(){
	var x =1+Math.round(19*Math.random());
	var y =1+Math.round(19*Math.random());
 correctAnswer = x*y; 
	document.getElementById("question").innerHTML = x+"x" +y;
	var correctPosition = 1+Math.round(3*Math.random());
	document.getElementById("box"+ correctPosition).innerHTML = correctAnswer;
	var answers = [correctAnswer];
	for(i=1; i<5; i++){
		if(i != correctPosition){
			var wrongAnswer;
			do{
				wrongAnswer = (1+Math.round(19*Math.random()))*(1+Math.round(19*Math.random()));
			}while(answers.indexOf(wrongAnswer)>-1)
			document.getElementById("box"+i).innerHTML = wrongAnswer;
			answers.push(wrongAnswer);
		}
	}
}