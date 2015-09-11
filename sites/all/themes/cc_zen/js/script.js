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

      $('.page-civicrm-contribute-transact .email-5-section').insertAfter('.last_name-section');
      $('.page-civicrm-contribute-transact label[for=CIVICRM_QFID_0_16]').text('Other');
      $('.page-civicrm-contribute-transact .contribution_amount-content .price-set-row').click(function() {
        $(this).addClass('selected-amount').siblings().removeClass('selected-amount');
      });
      $('.page-civicrm-contribute-transact .form-submit').val('Process Contribution');
      $('.page-civicrm-contribute-transact label[for=CIVICRM_QFID_1_20]').text('I want to contribute this amount monthly.');
      $('.page-civicrm-contribute-transact .is_recur-section .content p strong').contents().filter(function() {
        return this.nodeType === 3;
      }).remove();

      $("table.selector.crm-profile-tagsandgroups input[type=checkbox]").each(function(idx,obj){
        $(obj).attr('checked','checked') ;
      }) ;
    }
  };

})(jQuery, Drupal, this, this.document);
