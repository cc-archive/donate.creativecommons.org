<?php

/**
 * Collection of upgrade steps.
 */
class CRM_Stripe_Upgrader extends CRM_Stripe_Upgrader_Base {

  // By convention, functions that look like "function upgrade_NNNN()" are
  // upgrade tasks. They are executed in order (like Drupal's hook_update_N).

  /**
   * Standard: run an install sql script
   */
  public function install() {
  }

  /**
   * Standard: run an uninstall script
   */
  public function uninstall() {
  }

  /**
   * Add is_live column to civicrm_stripe_plans and civicrm_stripe_customers tables.
   *
   * @return TRUE on success
   * @throws Exception
   */
  public function upgrade_1_9_003() {
    // Add is_live column to civicrm_stripe_plans and civicrm_stripe_customers tables.
    $live_column_check = mysql_query("SHOW COLUMNS FROM `civicrm_stripe_customers` LIKE 'is_live'");
    $live_column_exists = (mysql_num_rows($live_column_check)) ? TRUE : FALSE;
    if (!$live_column_exists) {
      $this->ctx->log->info('Applying civicrm_stripe update 1903.  Adding is_live to civicrm_stripe_plans and civicrm_stripe_customers tables.');
      CRM_Core_DAO::executeQuery('ALTER TABLE civicrm_stripe_customers ADD COLUMN `is_live` tinyint(4) NOT NULL COMMENT "Whether this is a live or test transaction"');
      CRM_Core_DAO::executeQuery('ALTER TABLE civicrm_stripe_plans ADD COLUMN `is_live` tinyint(4) NOT NULL COMMENT "Whether this is a live or test transaction"');
    }
    else {
      $this->ctx->log->info('Skipped civicrm_stripe update 1903.  Column is_live already present on civicrm_stripe_plans table.');
    }

    $key_column_check = mysql_query("SHOW INDEX FROM `civicrm_stripe_customers` WHERE Key_name = 'email'");
    $key_column_exists = (mysql_num_rows($key_column_check)) ? TRUE : FALSE;
    if ($key_column_exists) {
      $this->ctx->log->info('Applying civicrm_stripe update 1903.  Setting unique key from email to id on civicrm_stripe_plans table.');
      CRM_Core_DAO::executeQuery('ALTER TABLE `civicrm_stripe_customers` DROP INDEX email');
      CRM_Core_DAO::executeQuery('ALTER TABLE `civicrm_stripe_customers` ADD UNIQUE (id)');
    }
    else {
      $this->ctx->log->info('Skipped civicrm_stripe update 1903.  Unique key already changed from email to id on civicrm_stripe_plans table.');
    }
    return TRUE;
  }
}
