<?php

/**
 * This file contains common configuration items used in all Drupal and 
 * CiviCRM websites for determining which environment a site is running
 * in and setting appropriate defaults based on that.
 */
$settings_dir = __DIR__;
$settings_path = "{$settings_dir}/settings.local.php";
$drupal_root = dirname(dirname($settings_dir));
// Set the CIVICRM_SITE_KEY default.
$civicrm_site_key = NULL;
// If the environment variables are not set, set the default environment to 
// 'dev' and the default name to the site's root directory name.
$app_env = getenv('APP_ENV');
if ($app_env === FALSE) {
  $app_env = 'dev';
}
$app_name = getenv('APP_NAME');
if ($app_name === FALSE) {
  $app_name = strtolower(basename($drupal_root));
  $app_name = preg_replace('/[^a-zA-Z0-9\-]+/', '_', $app_name);
}
// Set the default database settings. The password should be set separately in
// a settings.local.php file.
$database_name = "{$app_name}_{$app_env}";
$database_settings = array(
  'database' => $database_name,
  'username' => $database_name,
  'password' => '',
  'host' => 'localhost',
  'port' => '',
  'driver' => 'mysql',
  'prefix' => '',
);
// Environment Indicator settings
$indicator_enabled = TRUE;
if ($app_env == 'prod') {
  $indicator_enabled = FALSE;
}
$indicator_name = strtoupper($app_env);
if ($indicator_name == 'STAG') {
  $indicator_name = 'STAGING';
}
$conf['environment_indicator_overwrite'] = $indicator_enabled;
$conf['environment_indicator_overwritten_name'] = "{$indicator_name} SERVER";
$conf['environment_indicator_overwritten_color'] = '#770000';
// Set the CiviCRM root path
$civicrm_root_path = "{$drupal_root}/sites/all/modules/civicrm";
// Include the settings.local.php file.
if (file_exists($settings_path)) {
  require($settings_path);
}
