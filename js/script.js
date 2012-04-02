/* Author:

*/

$(document).ready(function(){

    // AddThis Promo
    function eventHandler(evt) { 
        var i = 0,
            url = "#",
            title = "title",
            altText = "This is my alt text",
            imageUrl = "images/Thinkfinity_Community_Share-Ideas.jpg";

        if(evt.type === "addthis.menu.open") {
            $('#at15s_inner').append('<a class="promo" href="'+url+'" title="'+title+'" ><img src="'+imageUrl+'" alt="'+altText+'" /></a>');
        };
        if(evt.type === "addthis.menu.close") {
            $('#at15s_inner .promo').remove();
        };
    };
    addthis.addEventListener('addthis.menu.open', eventHandler);
    addthis.addEventListener('addthis.menu.close', eventHandler);

    // Paginate - Tips and Modifications
    $('.paginate').pajinate({
        items_per_page : 1,
        num_page_links_to_display: 1,
        nav_panel_id : '.paginate-navigation',
        nav_info_id: '.paginate-info',
        item_container_id : '.paginate-content',
        show_first_last: false,
        nav_label_prev: '◀',
        nav_label_next: '▶',
        nav_label_info: '{1} of {2}'
    });

    // Tool Tip
    $(".tipHelp").bt(
        {
        closeWhenOthersOpen: true,
        fill: "rgb(255, 255, 255)",
        strokeWidth: 3,
        strokeStyle: "rgba(0,78,123,1)",
        cornerRadius: 0,
        shadow: true,
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowBlur: 8,
        shadowColor: 'rgba(0,0,0,1)',
        spikeLength: 4,
        spikeGirth: 6,
        closeWhenOthersOpen: true,
        hoverIntentOpts: {
          interval: 50,
          timeout: 3000
        }
    });
    $(".icons-tipHelp").bt(
        {
        contentSelector: "$('.tipHelp-content').html()", 
        closeWhenOthersOpen: true,
        width: 350,
        fill: "rgb(255, 255, 255)",
        strokeWidth: 3,
        strokeStyle: "rgba(0,78,123,1)",
        cornerRadius: 0,
        shadow: true,
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowBlur: 8,
        shadowColor: 'rgba(0,0,0,1)',
        spikeLength: 4,
        spikeGirth: 6,
        closeWhenOthersOpen: true,
        hoverIntentOpts: {
          interval: 50,
          timeout: 3000
        }
    });

    // Tabs
    $('#main-content .tabs').accessibleTabs({
        tabhead:'h2',
        fx:'fadeIn'
        //syncheights:true
    });
    $('#related-content .tabs').accessibleTabs({
        tabhead:'h4',
        fx:'fadeIn'
        //syncheights:true
    });

    // Accordions
    $('.accordion, .accordion-item').accordion({autoHeight: false, collapsible: true});
    $('.accordion-note, .accordion-unitlist, .accordion-close').accordion({ active: false, collapsible: true, autoHeight: false });
    // Accessible tag cloud
    $(".tagcloud").tagcloud();

    // Horrizontal Accordion Menu
    $('#change-page-view').hAccordionMenu();

    // Activity Filtering
    $('#activity-filter li a').each(function(index){
        var $this = $(this),
            $index = $('.activity-'+( index + 1));
        $this.toggle(function (){
            // Add deactivate to link
            $this.addClass('deactivate');
            // Add deactivate to all activites of #index
            $index.addClass('deactivate');
            // Disable accordion functionality 
            $index.children('.block-content').removeClass('ui-state-active').hide();
        },
        function (){
            $this.removeClass('deactivate');
            $index.removeClass('deactivate');
            $index.children('.block-content').addClass('ui-state-active').show();
            $index.children('.block-header').addClass('ui-state-active')
        });
    });

    // Table Sorter
    var table = $('table'); // Cache Table
    $('th').wrapInner('<span title="sort this column"/>').each(function(){
        var th = $(this),
            thIndex = th.index(),
            inverse = false,
            arrow;
        th.append('<span class="right">▼</span>');

        th.click(function(){

            arrow = th.find('.right').text();
            if ( arrow === '▲') {
                th.find('.right').text('▼');
            }
            else {
                th.find('.right').text('▲');
            }
                                    
            table.find('td').filter(function(){

                return $(this).index() === thIndex;
            }).sortElements(function(a, b){
                
                return $.text([a]) > $.text([b]) ?
                    inverse ? -1 : 1
                    : inverse ? 1 : -1;
            }, function(){
                // parentNode is the element we want to move
                return this.parentNode;  
            });
            inverse = !inverse;
        }); 
    });
});