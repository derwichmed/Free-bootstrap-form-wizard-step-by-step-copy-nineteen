$(function (){
   steps_image_seting = [
       {
           imginit: 'img/user-male-outline_icon-icons.com_56873.png',
           imgactive: 'img/user-male-outline_icon-icons.com_56873_02.png'
       },
       {
           'imginit': 'img/1492617364-13-setting-configure-repair-support-optimization-google_83447.png',
           'imgactive': 'img/1492617364-13-setting-configure-repair-support-optimization-google_83447_02.png'
       },
       {
           'imginit': 'img/internetmailarrobasignoutline_81111.png',
           'imgactive': 'img/internetmailarrobasignoutline_81111_02.png'
       }
   ];
   countStep = $('.form_wizard section .form_item').length;
   nbr_step = 0;
   $('.form_wizard header .progress .progress-bar')
           .css('width',100/countStep+'%');
   
    
    $('.btn_nxt').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        $('.form_wizard header .progress .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
        
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step - 1).find('img')
            .attr('src',steps_image_seting[nbr_step - 1].imgactive);
    
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step).find('img')
            .attr('src',steps_image_seting[nbr_step].imginit);    
    
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step - 1).removeClass('loding');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step - 1).addClass('active');
        
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).removeClass('disable');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).addClass('loding');
        
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
    
    $('.btn_pre').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
        $('.form_wizard header .progress .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
   
   
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step + 1).find('img')
            .attr('src',steps_image_seting[nbr_step + 1].imgactive);
    
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step).find('img')
            .attr('src',steps_image_seting[nbr_step].imginit); 
            
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step + 1).removeClass('loding');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step + 1).addClass('disable');
        
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).removeClass('active');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).addClass('loding');
           
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
});