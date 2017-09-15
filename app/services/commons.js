(function() {
  'use strict';

  app.factory('Commons', Commons);

  Commons.$inject = ['$location','toaster'];

  function Commons($location,toaster) {

    /**
    * fnShowHeadFoot let the user know if in this section
    * must show header and footer
    * currently only hides when we are in register or login
    */
    function fnShowHeadFoot() {
      var mostrar=true;
      var patt = new RegExp("^\/[login|register]([\/]*[a-zA-Z\-_0-9]*)*$");
      // show or not the header
      if( patt.test( $location.path() ) ){
        mostrar=false;
      }
      return mostrar;
    }

    /**
    * fnPrepareLoginRegister prepares the inputs to start to fall with animation
    * for login and register keeping a DRY code between both controllers
    */
    function fnPrepareLoginRegister(location){
      var neonLocation={};
      neonLocation.$body = $(".login-page");
      neonLocation.$container = (location=='login')?$("#form_login"):$("#form_register");
      if(neonLocation.$body.hasClass('login-form-fall'))
      {
        var focus_set = false;

        setTimeout(function(){
          neonLocation.$body.addClass('login-form-fall-init');

          setTimeout(function()
          {
            if( !focus_set)
            {
              neonLocation.$container.find('input:first').focus();
              focus_set = true;
            }

          }, 550);

        }, 0);
      }
      else
      {
        neonLocation.$container.find('input:first').focus();
      }

      // Focus Class
      neonLocation.$container.find('.form-control').each(function(i, el)
      {
        var $this = $(el),
          $group = $this.closest('.input-group');

        $this.prev('.input-group-addon').click(function()
        {
          $this.focus();
        });

        $this.on({
          focus: function()
          {
            $group.addClass('focused');
          },

          blur: function()
          {
            $group.removeClass('focused');
          }
        });
      });
    }

    /**
    * fnSetProgressBar will set the width and value of the progress bar
    * for the register and login page
    */
    function fnSetProgressBar(pct,callback,location){
      // neonLocation.setPercentage = function(pct, callback){
        pct = parseInt(pct / 100 * 100, 10) + '%';
        var o, neonLocation = {};
        neonLocation.$body = $(".login-page");
        neonLocation.$login_progressbar_indicator = $(".login-progressbar-indicator h3");
        neonLocation.$login_progressbar = neonLocation.$body.find(".login-progressbar div");
        if(location==='login'){
          $(".login-progressbar-indicator span").html('logging in...');
        }else{
          $(".login-progressbar-indicator span").html('registrating...');
        }

        // Normal Login
        neonLocation.$login_progressbar_indicator.html(pct);
        neonLocation.$login_progressbar.width(pct);

        o = {
          pct: parseInt(neonLocation.$login_progressbar.width() / neonLocation.$login_progressbar.parent().width() * 100, 10)
        };

        TweenMax.to(o, 0.7, {
          pct: parseInt(pct, 10),
          roundProps: ["pct"],
          ease: Sine.easeOut,
          onUpdate: function()
          {
            neonLocation.$login_progressbar_indicator.html(o.pct + '%');
          },
          onComplete: callback
        });
      // };
    }

    /**
    * fnResetProgressBar will reset the width and position of the login bar
    */
    function fnResetProgressBar(display_errors,location){
      // neonLocation.resetProgressBar = function(display_errors){
        var neonLocation={};
        neonLocation.$container = (location==='login')?$("#form_login"):$("#form_register");
        neonLocation.$body = $(".login-page");
        neonLocation.$login_progressbar_indicator = $(".login-progressbar-indicator h3");
        neonLocation.$login_progressbar = neonLocation.$body.find(".login-progressbar div");

        TweenMax.set(neonLocation.$container, {css: {opacity: 0}});

        setTimeout(function()
        {
          TweenMax.to(neonLocation.$container, 0.6, {css: {opacity: 1}, onComplete: function()
          {
            neonLocation.$container.attr('style', '');
          }});

          neonLocation.$login_progressbar_indicator.html('0%');
          neonLocation.$login_progressbar.width(0);

          if(display_errors)
          {
            var $errors_container = $(".form-login-error");
            if(location==='login'){
              $(".form-login-error").children('h3').html('Invalid login');
              $(".form-login-error").children('p').html('Enter demo/demo as login and password.');
            }else{
              $(".form-login-error").children('h3').html('Invalid register');
              $(".form-login-error").children('p').html('An error occured please try again');
            }
            $errors_container.show();
            var height = $errors_container.outerHeight();

            $errors_container.css({
              height: 0
            });

            TweenMax.to($errors_container, 0.45, {css: {height: height}, onComplete: function()
            {
              $errors_container.css({height: 'auto'});
            }});

            // Reset password fields
            if(location==='login'){
              neonLocation.$container.find('input[type="password"]').val('');
            }
            neonLocation.$body.removeClass('logging-in');

          }

        }, 800);
      // };
    }

    /*
    * fnAlerts will triggered the toaster notifications across the site
    */
    function fnAlerts(typeAlert, title, text){
      toaster.pop({
        type:typeAlert,
        title:title,
        body:text,
        timeout:3000
      });
      // $('html, body').animate({ scrollTop: 0 }, '600');
    }

    return {
      fnShowHeadFoot: fnShowHeadFoot,
      fnPrepareLoginRegister: fnPrepareLoginRegister,
      fnSetProgressBar: fnSetProgressBar,
      fnResetProgressBar: fnResetProgressBar,
      fnAlerts: fnAlerts
    };

  }

})();
