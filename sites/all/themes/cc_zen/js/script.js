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

      $('.page-civicrm-contribute-transact .contribution_amount-section input[value=0]').next('label').text('Other');
      $('.page-civicrm-contribute-transact .other_amount-section').hide();
      $('.page-civicrm-contribute-transact .contribution_amount-content .price-set-row').click(function() {
        $(this).addClass('selected-amount').siblings().removeClass('selected-amount');
        if ($(this).find('input[value=0]').length > 0) {
          $('.page-civicrm-contribute-transact .other_amount-section').show();
        }
        else {
          $('.page-civicrm-contribute-transact .other_amount-section').hide();
        }
      });
      
      $('.page-civicrm-contribute-transact .premiums_select-group input[value=no_thanks]').parent().parent().insertBefore('.page-civicrm-contribute-transact .premiums_select-group tr:first');
      if (!$('.page-civicrm-contribute-transact .premiums_select-group input').is(':checked')) {
        $('.page-civicrm-contribute-transact .premiums_select-group input[value=no_thanks]').attr('checked', 'checked');
	$('.page-civicrm-contribute-transact .custom_pre_profile-group').hide();
      }
      $('.page-civicrm-contribute-transact .premiums_select-group input').click( function() {
	if ($(this).val() == 'no_thanks') {
	  $('.page-civicrm-contribute-transact .custom_pre_profile-group').hide();
	}
	else {
	  $('.page-civicrm-contribute-transact .custom_pre_profile-group').show();
	  $('.page-civicrm-contribute-transact .custom_pre_profile-group label').each( function() {
	    if ($(this).find('*').length == 0) {
	      $(this).append('<span class="crm-marker" title="This field is required."> *</span>');
	    }
	  });
	}	  
      });

      $('.page-civicrm-contribute-transact .form-submit').val('Process Contribution');
      $('.page-civicrm-contribute-transact .is_recur-section input[value=1]').next('label').text('I want to contribute this amount monthly.');
      $('.page-civicrm-contribute-transact .is_recur-section .content p strong').contents().filter(function() {
        return this.nodeType === 3;
      }).remove();

      $("table.selector.crm-profile-tagsandgroups input[type=checkbox]").each(function(idx,obj){
        $(obj).attr('checked','checked') ;
      });
    }
  };

})(jQuery, Drupal, this, this.document);
