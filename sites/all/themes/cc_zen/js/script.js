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

      function showHideShippingFields() {
	var value = premiumField.find('input:checked').val();
	var payment = paymentField.find('input:checked').val();
	if (value == 'no_thanks' && payment != '11') {
	  $('.page-civicrm-contribute-transact .custom_pre_profile-group').hide();
	}
	else {
	  $('.page-civicrm-contribute-transact .custom_pre_profile-group').show();
	}
      }

      function showHideOtherAmountField() {
	var value = amountField.find('input:checked').val();
	if (value == '0') {
	  $('.page-civicrm-contribute-transact .other_amount-section').show();
	}
	else {
	  $('.page-civicrm-contribute-transact .other_amount-section').hide();
	}
      }

      var premiumField = $('.page-civicrm-contribute-transact .premiums_select-group');
      var amountField = $('.page-civicrm-contribute-transact .contribution_amount-content .price-set-row');
      var recurringFields = $('.page-civicrm-contribute-transact .is_recur-section');
      var paymentField = $('.page-civicrm-contribute-transact .payment_processor-section');

      // Email Field
      $('<fieldset><legend>Contact Information</legend>').insertBefore('.page-civicrm-contribute-transact .email-5-section');

      // Premium Fields
      if (premiumField.find('input:checked').length == 0) {
	premiumField.find('input[value=no_thanks]').attr('checked', 'checked');
	showHideShippingFields();
      }
      premiumField.find('input[value=no_thanks]').parent().parent().insertBefore('.page-civicrm-contribute-transact .premiums_select-group tr:first');

      // Shipping Fields
      premiumField.click(function() {
	showHideShippingFields();
      });
      paymentField.click(function() {
	showHideShippingFields();
      });

      $('.page-civicrm-contribute-transact .custom_pre_profile-group').find('label').each(function() {
	if ($(this).find('*').length == 0) {
	  $(this).append('<span class="crm-marker" title="This field is required."> *</span>');
	}
      });

      // Amount Fields
      amountField.find('input[value=0]').next('label').text('Other');
      amountField.find('input:checked').parent().parent().addClass('selected-amount');
      showHideOtherAmountField();
      amountField.click(function() {
	amountField.find('input:checked').parent().parent().addClass('selected-amount').siblings().removeClass('selected-amount');
	showHideOtherAmountField();
      });
      
      $('.page-civicrm-contribute-transact .form-submit').val('Process Contribution');

      // Recurring Fields
      recurringFields.find('input[value=1]').next('label').text('I want to contribute this amount monthly.');
      recurringFields.find('.content p strong').contents().filter(function() {
	  return this.nodeType === 3;
      }).remove();

      $('table.selector.crm-profile-tagsandgroups input[type=checkbox]').each(function(idx,obj){
	$(obj).attr('checked','checked') ;
      });
    }
  };

})(jQuery, Drupal, this, this.document);
