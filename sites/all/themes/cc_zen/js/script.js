/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      // Place your code here.

      cj('.email-5-section').insertAfter('.last_name-section');
      cj('.form-submit').val('Process Contribution');
      cj('label[for=CIVICRM_QFID_1_20]').text('I want to contribute this amount monthly.');
      cj('#frequency_unit').hide();
      cj('#recur_installments_num').hide();
      cj('.is_recur-section').parent().html(cj('.is_recur-section').parent().html().replace(/every/g, ''));

      cj('#CIVICRM_QFID_11_4').click(function(){
        var intervalID = setInterval(
        function() {
          if ($('#billingcheckbox').length > 0) {
            cj('label[for=billingcheckbox]').text('Billing Name and Address is the same as Shipping Address');
            cj('#billingcheckbox').prop('checked', true);
            clearInterval(intervalID);
          }
        },
        1000
        );
      });

    }
  };

})(jQuery, Drupal, this, this.document);
