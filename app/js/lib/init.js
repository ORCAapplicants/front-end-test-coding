(function($){
  $(function(){

    $('.button-collapse').sideNav();
    var d = new Date();
    d.setFullYear( d.getFullYear() - 100 );
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: true,
      format: 'yyyy-mm-dd',
      min: d,
      max: '2000-12-31',
      today: 'Hoy',
      clear: 'Cancelar',
      close: 'Ok',
      /*selectMonths: true, // Creates a dropdown to control month
      selectYears: 99, // Creates a dropdown of 15 years to control year,
      today: 'Hoy',
      clear: 'Cancelar',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
      */
    });

    $(document).ready(function() {
      $('select').material_select();
    });

    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
      }
    );

     $(document).ready(function(){
        $('.collapsible').collapsible();
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space
