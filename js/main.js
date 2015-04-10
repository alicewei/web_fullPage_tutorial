$(document).ready(function(){
	//animate
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'lastPage'],
		menu: '#menu',
		afterLoad: function(anchorLink, index){
			//#section 1
			if(index == 2){
				$('#section1').find('.title').animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');				
				$('#section1').find('.text-about').delay(250).animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');
			}
			//#section 2
			if(anchorLink == '3rdPage'){
				$('#section2').find('.title').animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');				
				$('#section2').find('.musicions-row').delay(250).animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');
			}
			//#section 3
			if(anchorLink == '4thPage'){
				$('#section3').find('.title').animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');											
				$('#section3').find('.timeline').delay(250).animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');											
			}

			//#section 4
			if(anchorLink == 'lastPage'){
				$('#section4').find('.title').animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');
				$('#section4').find('.content form').delay(250).animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');	
				$('#section4').find('footer').delay(350).animate({
					top: '0',
					opacity: '1'
				}, 800, 'easeOutExpo');								
			}			
		}
	});
});
