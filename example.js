jQuery(document).on( 'wbk_on_form_rendered', function(){
    wbk_reset_children_count();
    jQuery('.wbk-book-quantity').change( function(){
        wbk_reset_children_count();
    });    
});
function wbk_reset_children_count(){
    if( jQuery('#child_number').length == 0 ){
        return;
    }
    const total_cnt = parseInt( jQuery('.wbk-book-quantity').val() );
    var html = '';
  	for( var i = 0; i < total_cnt; i++ ){
        html += '<option value="' + i + '">' + i + '</option>';    
    }
  	jQuery('#child_number').html( html );
}
