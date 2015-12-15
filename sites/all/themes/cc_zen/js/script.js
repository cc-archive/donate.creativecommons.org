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

      function selectedProductId() {
        return $('#selectProduct').val();
      }

      function noPremiumSelected() {
        return selectedProductId() == 'no_thanks';
      }

      function selectedPaymentProcessorId() {
        return $('input[name=payment_processor]:checked').val();
      }

      function payPalSelected() {
        return selectedPaymentProcessorId() == 1;
      }

      function showHideShippingFields() {
        if (noPremiumSelected() && payPalSelected()) {
	  $('.page-civicrm-contribute-transact .custom_pre_profile-group').hide();
	} else {
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

      // Email Field
      $('.page-civicrm-contribute-transact .email-5-section').once().wrap('<fieldset id="contact-information-fieldset">');
      $('#contact-information-fieldset').once().prepend('<legend>Contact Information</legend>');

      // Shipping Fields
      var premiumField = $('.page-civicrm-contribute-transact .premiums_select-group');
      showHideShippingFields();
      premiumField.click(function() {
	showHideShippingFields();
      });
      var paymentField = $('.page-civicrm-contribute-transact .payment_processor-section');
      paymentField.click(function() {
	showHideShippingFields();
      });

      $('.page-civicrm-contribute-transact .custom_pre_profile-group').find('label').each(function() {
	if ($(this).find('*').length == 0) {
	  $(this).append('<span class="crm-marker" title="This field is required."> *</span>');
	}
      });

      // Amount Fields
      var amountField = $('.page-civicrm-contribute-transact .contribution_amount-content .price-set-row');
      amountField.find('input[value=0]').next('label').text('Other');
      amountField.find('label').each(function() {
	$(this).text(function() {
	  return $(this).text().replace('.00', '');
	});
      });

      cj('.page-civicrm-contribute-transact .contribution_amount-content .price-set-row').find('label').each(function() {
        cj(this).text(function() {
          return cj(this).text().replace('.00', '');
        });
      });

      amountField.find('input:checked').parent().parent().addClass('selected-amount');
      showHideOtherAmountField();
      amountField.click(function() {
	amountField.find('input:checked').parent().parent().addClass('selected-amount').siblings().removeClass('selected-amount');
	showHideOtherAmountField();
      });
      $('.page-civicrm-contribute-transact .crm-form-submit').val('Process Contribution');
      $('#recurHelp').html('');
    }
  };
})(jQuery, Drupal, this, this.document);
