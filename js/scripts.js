const DELAY_THRESHOLD = 1000
var t9 = true
var startTime, endTime
var lastPressed=10
var numOfSamePresses=0
var activeTyping=false
var timeout
var highlight

this.addEventListener('keydown', (event) => {
    if (event.keyCode == 97) { 						//1
        clicked_7()
    }else if (event.keyCode == 98) { 				//2
        clicked_8()
    }else if (event.keyCode == 99) { 				//3
        clicked_9()
    }else if (event.keyCode == 100) { 				//4
        clicked_4()
    }else if (event.keyCode == 101) { 				//5
        clicked_5()
    }else if (event.keyCode == 102) { 				//6
        clicked_6()
    }else if (event.keyCode == 103) { 				//7
        clicked_1()
    }else if (event.keyCode == 104) { 				//8
        clicked_2()
    }else if (event.keyCode == 105) { 				//9
        clicked_3()
    }else if (event.keyCode == 8) { 				//delete
        clicked_del()
    }else if (event.keyCode == 13 || event.keyCode == 32) { 				//delete
        clicked_sharp()
    }
	
})
function addSpace(){
	clearUnderline()
    var text = document.getElementById("text").innerHTML
	text=text+"‸"
	document.getElementById("text").innerHTML=text
}
function clearSpace(){
	clearUnderline()
    var text = document.getElementById("text").innerHTML
	text=text.replace("‸","")
	document.getElementById("text").innerHTML=text
}

function setUnderline() {
	clearUnderline()
    var text = document.getElementById("text").innerHTML
	text = text.slice(0,-1) + "<u>" + text.slice(-1,text.length)+"</u>"
    document.getElementById("text").innerHTML = text
}
function clearUnderline(){
	var text = document.getElementById("text").innerHTML
	text=text.replace("<u>","")
	text=text.replace("</u>","")
	document.getElementById("text").innerHTML=text
}

function startTime() {
	startTime = new Date()
	if(t9){
		document.getElementById("buttont9").style.backgroundColor = "#8cf442"
	}else{
		document.getElementById("buttont9").style.backgroundColor = "#FFFFFF"
	}
}
function highlightButton(but){
	if(but == "sharp"){
		document.getElementsByClassName("button#")[0].style.border  = "2px solid #1bc4fc"
		timeout=setTimeout(function(){
			clearHighlight("button#")
		}, DELAY_THRESHOLD/4)
	}else{
		document.getElementsByClassName("button"+but.toString())[0].style.border  = "2px solid #1bc4fc"
		timeout=setTimeout(function(){
			clearHighlight("button"+but.toString())
		}, DELAY_THRESHOLD/4)
	}
	
}
function clearHighlight(but){
	document.getElementsByClassName(but)[0].style.border = "2px solid #000000"
}
function clicked_del(){
	clearSpace()
	clearTimeout(timeout)
	clearUnderline()
	var str = document.getElementById("text").innerHTML
	if (str.length > 0){
		str = str.slice(0,-1)	
		document.getElementById("text").innerHTML = str
	}
	addSpace()
}
function clicked_t9(){
	t9=!t9
	if(t9){
		document.getElementById("buttont9").style.backgroundColor = "#8cf442"
	}else{
		document.getElementById("buttont9").style.backgroundColor = "#FFFFFF"
	}
}

function clicked_1(){	
	highlightButton(1)
	clearSpace()
	lastPressed = 1
	str = document.getElementById("text").innerHTML
	document.getElementById("text").innerHTML = str+"."
	activeTyping=true
	timeout=setTimeout(function(){
		activeTyping=false
		addSpace()
	}, DELAY_THRESHOLD)
}
function clicked_2(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(2)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 2 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"a"
			numOfSamePresses=0
		}else if(lastPressed==2 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"b"
		}else if(lastPressed==2 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"c"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"a"
		}
		startTime = new Date()
		lastPressed = 2
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		
	}	
}
function clicked_3(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(3)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 3 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"d"
			numOfSamePresses=0
		}else if(lastPressed==3 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"e"
		}else if(lastPressed==3 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"f"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"d"
		}
		startTime = new Date()
		lastPressed = 3
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		
	}
	
}
function clicked_4(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(4)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 4 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"g"
			numOfSamePresses=0
		}else if(lastPressed==4 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"h"
		}else if(lastPressed==4 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"i"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"g"
		}
		startTime = new Date()
		lastPressed = 4
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		
	}
	
}
function clicked_5(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(5)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 5 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"j"
			numOfSamePresses=0
		}else if(lastPressed==5 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"k"
		}else if(lastPressed==5 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"l"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"j"
		}
		startTime = new Date()
		lastPressed = 5
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		
	}
}
function clicked_6(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(6)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 6 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"m"
			numOfSamePresses=0
		}else if(lastPressed==6 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"n"
		}else if(lastPressed==6 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"o"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"m"
		}
		startTime = new Date()
		lastPressed = 6
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		
	}
}
function clicked_7(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(7)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 7 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"p"
			numOfSamePresses=0
		}else if(lastPressed==7 && numOfSamePresses%4 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"q"
		}else if(lastPressed==7 && numOfSamePresses%4 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"r"
		}else if(lastPressed==7 && numOfSamePresses%4 == 3){					//fast press and fourth letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"s"	
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"p"
		}
		startTime = new Date()
		lastPressed = 7
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		
	}
}
function clicked_8(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(8)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 8 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"t"
			numOfSamePresses=0
		}else if(lastPressed==8 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"u"
		}else if(lastPressed==8 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"v"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"t"
		}
		startTime = new Date()
		lastPressed = 8
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		
	}
}
function clicked_9(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(9)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 9 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"w"
			numOfSamePresses=0
		}else if(lastPressed==9 && numOfSamePresses%4 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"x"
		}else if(lastPressed==9 && numOfSamePresses%4 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"y"
		}else if(lastPressed==9 && numOfSamePresses%4 == 3){					//fast press and fourth letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"z"	
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"w"
		}
		startTime = new Date()
		lastPressed = 9
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		
	}
}
function clicked_star(){
	
}
function clicked_0(){
		clearSpace()
		clearTimeout(timeout)
		highlightButton(0)
		clearUnderline()
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	
}
function clicked_sharp(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton("sharp")
	clearUnderline()
	var str = document.getElementById("text").innerHTML
	document.getElementById("text").innerHTML = str + " "
	addSpace()
	activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
		}, DELAY_THRESHOLD)
	clearUnderline()	
}

window.onload = startTime