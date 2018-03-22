(function lbbox(){
	var lbitv=setInterval(function(){lb()},2000);
	$(".banner").hover(
		function(){
			clearInterval(lbitv);
		},
		function(){
			lbitv=setInterval(function(){lb()},2000);
		}
	);
	$(".lb-dian").mouseenter(e=>{
		$(".xyc-bg").removeClass("xyc-bg");
		var x=$(e.target).attr("data-bg");
		var cha=x-1;
		$(".lb-img-box").css({left:-750*cha}).stop();
		$(e.target).addClass("xyc-bg");
		i=x-1;
	});
})();
var i=0;
function lb(){
	(function(){
		$(".xyc-bg").removeClass("xyc-bg");
		$(".lb-img-box").animate({left:"-=750"},500);
		i++;
		var y=i+1;
		if(y==6){
			y=1
		}
		$("[data-bg='"+y+"']").addClass("xyc-bg");
		if(i==6){
			i=0;
			$(".lb-img-box").css({left:0}).stop();
			$("[data-bg=1]").addClass("xyc-bg");
		}
	})();
}