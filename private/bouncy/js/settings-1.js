// JavaScript Document
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 900);
	});
	  var options_1 = {
                $FillMode: 2,
	            $AutoPlay: false, 
				$Idle: 4000,
				$PauseOnHover: 1,    
				$ArrowKeyNavigation: true, 
				$SlideEasing: $JssorEasing$.$EaseOutQuint,
				$SlideDuration: 800, 
				$MinDragOffsetToSlide: 20,
				//$SlideWidth: 600, 
				$SlideHeight: 480,
				$SlideSpacing: 0, 
				$Cols: 1,  
				$ParkingPosition: 0,
				$UISearchMode: 1,
				$PlayOrientation: 1,
				$DragOrientation: 1,
				$BulletNavigatorOptions: {
					$Class: $JssorBulletNavigator$, 
					$ChanceToShow: 2,                                                                               
                    $AutoCenter: 1,                                				                                                
                    $Steps: 1,                                      				                                                
                    $Rows: 1,                                      				                                                
                    $SpacingX: 8,                                  			                                                
                    $SpacingY: 8,                                   		                                                
                    $Orientation: 1,                                		                                                
                    $Scale: false                                   
                },                                                  
                    $ArrowNavigatorOptions: {                                                                               
                     $Class: $JssorArrowNavigator$,                                                                
                     $ChanceToShow: 1,                                                                               
                     $AutoCenter: 2,                                                                                 
                     $Steps: 1                                                                                       
                }	
            };
			var options_2 = {
				$FillMode: 2,
	            $AutoPlay: true, 
				$Idle: 4000,
				$PauseOnHover: 1,    
				$ArrowKeyNavigation: true, 
				$SlideEasing: $JssorEasing$.$EaseOutQuint,
				$SlideDuration: 800, 
				$MinDragOffsetToSlide: 20,
				//$SlideWidth: 600, 
				$SlideHeight: 315,
				$SlideSpacing: 0, 
				$Cols: 1,  
				$ParkingPosition: 0,
				$UISearchMode: 1,
				$PlayOrientation: 1,
				$DragOrientation: 1,
				$BulletNavigatorOptions: {
					$Class: $JssorBulletNavigator$, 
					$ChanceToShow: 2,                                                                               
                    $AutoCenter: 1,                                				                                                
                    $Steps: 1,                                      				                                                
                    $Rows: 1,                                      				                                                
                    $SpacingX: 8,                                  			                                                
                    $SpacingY: 8,                                   		                                                
                    $Orientation: 1,                                		                                                
                    $Scale: false              
				 },                                                  
                    $ArrowNavigatorOptions: {                                                                               
                     $Class: $JssorArrowNavigator$,                                                                
                     $ChanceToShow: 1,                                                                               
                     $AutoCenter: 2,                                                                                 
                     $Steps: 1                                                                                       
                }	
				
				};
			var options_3 = {	
				 $DragOrientation: 2,
				 $PlayOrientation: 2, 	
				 $BulletNavigatorOptions: {                                                                
                   $Class: $JssorBulletNavigator$,                
			       $ChanceToShow: 2,                               					                                                
                   $AutoCenter: 2,                                 					                                              
                   $Steps: 1,                                      					                                                
                   $Rows: 1,                                       					                                                
                   $SpacingX: 8,                                   				                                                
                   $SpacingY: 8,                                   			                                                
                   $Orientation: 2,                                					                                               
                   $Scale: false                                   
                },              
			};	
		var jssor_slider1 = new $JssorSlider$("slider1_container", options_1);
		  var jssor_slider2 = new $JssorSlider$("slider2_container", options_2);
			var jssor_slider3 = new $JssorSlider$("slider3_container", options_3);
						 			
            function ScaleSlider() {
                var bodyWidth = document.body.clientWidth;
				if (bodyWidth)
                    jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
                else
                    window.setTimeout(ScaleSlider, 30);
				if (bodyWidth)
                    jssor_slider2.$ScaleWidth(Math.min(bodyWidth, 1920));
                else
                    window.setTimeout(ScaleSlider, 30);
				if (bodyWidth)
                    jssor_slider3.$ScaleWidth(Math.min(bodyWidth, 1920));
                else
                    window.setTimeout(ScaleSlider, 30);	
            }
			
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
             $(window).bind("resize", ScaleSlider);
              $(window).bind("orientationchange", ScaleSlider);
           	
});

