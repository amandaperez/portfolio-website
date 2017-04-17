$('.mobile-menu').on('click', function( event ){
 	event.preventDefault();
 	$('.navigation').slideToggle(function(){

        if (this.style.display == 'none') {

            this.style.display = '';
        }
    
    console.log (this.style.display);

  });
});

 

 $(document).ready(function(){

            $("#theTarget").skippr();

}); 

 