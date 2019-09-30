document.addEventListener("DOMContentLoaded", function() {
	window.onscroll = function() {OnScrollMovement();};
	setTimeout(function(){OnScrollMovement();},500);
});
function OnScrollMovement(){
	var LazyLoadArray = document.getElementsByClassName("lazyload");
	Array.from(LazyLoadArray).forEach((element) => {
		var ElemClass = element.className.replace("lazyload","");
		var ElemSRC = element.getAttribute("src");
		var ElemDataSRC = element.getAttribute("data-src");
		if(((ElemSRC != null && ElemSRC.length == 0) || ElemSRC == null) && (element.style.display!="none" && element.parentElement.style.display!="none") && ElemDataSRC != null&& ElemDataSRC.length > 0){
			if(element.getBoundingClientRect().top <= window.innerHeight){
				element.className = ElemClass;
				element.setAttribute("src",ElemDataSRC);
			}
		}
	});
}
setInterval(function(){ScrollWorks();},50); // set an interval for auto load on sliders
