$(function(){
  
  var default_text = $('#text-type').text(),
      text_counter_1 = 0,
      text_counter_2 = 0;
  
  // This function is not debounced, but instead bound directly to the event.
  function text_1() {
    var val = $(this).val(),
      html = 'Not-debounced AJAX request executed: ' + text_counter_1++ + ' times.'
      + ( val ? ' Text: ' + val : '' );
    
    $('#text-type-1').html( html );
  };
  
  // This function is debounced, and the new, debounced, function is bound to
  // the event. Note that in jQuery 1.4+ a reference to either the original or
  // debounced function can be passed to .unbind to unbind the function.
  function text_2() {
    var val = $(this).val(),
      html = 'Debounced AJAX request executed: ' + text_counter_2++ + ' times.'
      + ( val ? ' Text: ' + val : '' );
    
    $('#text-type-2').html( html );
  };
  
  // Bind the not-at-all debounced handler to the keyup event.
  $('input.text').keyup( text_1 );
  
  // Bind the debounced handler to the keyup event.
  $('input.text').keyup( $.debounce( 250, text_2 ) ); // This is the line you want!
  
  // Trigger the callbacks once to show some initial (zero) values.
  text_1();
  text_2();
});
