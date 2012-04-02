(function($){

    // Declare pluging
    $.fn.hAccordionMenu = function(){ 
        // id = change-page-view
        //a>abbr>span
        var $this = $(this),
            $kids = $this.children('a'),
            $width = [];

        // Get width
        $kids.each(function(index){
            $width.push($(this).find('span').width());
        });

        // Init
        $kids.siblings().find('span').css({ 
            width: '0px',
            opacity: 0
        });
        $this.children('a:first').find('span').css({
            width: 'auto',
            opacity: 1
        });

        $kids.each(function(index){
            $(this).hover(function(){
                // convert Obj to string
                width = JSON.stringify($width[index]);

                // Hid all siblings 
                $kids.siblings().find('span').stop()
                        .animate({ 
                            width: '0px',
                            opacity: 0
                        }, 500);
                // Show current Item and apply width
                $(this).find('span').stop()
                        .animate({ 
                            width: width,
                            opacity: 1
                        }, 500);
            });
        });
    };
})(jQuery);
