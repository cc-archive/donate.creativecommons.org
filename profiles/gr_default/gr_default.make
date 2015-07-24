; Drush Make API version
api = 2

; Core drupal version
core = 7.x

defaults[projects][subdir] = "contrib"

; Modules
projects[admin_menu][version] = 3.x-dev
projects[admin_views][subdir] = contrib
projects[advanced_help][subdir] = contrib
projects[backup_migrate][subdir] = contrib
projects[block_class][version] = 2.x-dev
projects[ctools][subdir] = contrib
projects[devel][subdir] = contrib
projects[diff][subdir] = contrib
projects[entity][subdir] = contrib
projects[entity_view_mode][version] = 1.x-dev
projects[environment_indicator][subdir] = contrib
projects[field_group][subdir] = contrib
projects[file_entity][version] = 2.x-dev
projects[giantrabbit][type] = module
projects[giantrabbit][subdir] = custom
projects[giantrabbit][download][type] = git
projects[giantrabbit][download][url] = "ssh://git@git.giantrabbit.com/allgr/giantrabbit.git"
projects[globalredirect][version] = 1.x-dev
projects[google_analytics][subdir] = contrib
projects[gr_tpl_tweaks][type] = module
projects[gr_tpl_tweaks][subdir] = custom
projects[gr_tpl_tweaks][download][type] = git
projects[gr_tpl_tweaks][download][url] = "ssh://git@git.giantrabbit.com/allgr/gr_tpl_tweaks.git"
projects[gr_tpl_tweaks][download][branch] = 7.x-1.x-dev
projects[jquery_update][subdir] = contrib
projects[link][subdir] = contrib
projects[linkit][version] = 3.x-dev
projects[logintoboggan][subdir] = contrib
projects[media][version] = 2.x-dev
projects[media_browser_plus][version] = 3.x-dev
projects[metatag][version] = 1.x-dev
projects[module_filter][version] = 2.x-dev
projects[multiform][version] = 2.x-dev
projects[pathauto][version] = 1.x-dev
projects[pathologic][version] = 3.x-dev
projects[redirect][version] = 1.x-dev
projects[search_api][subdir] = contrib
projects[search_api_db][subdir] = contrib
projects[token][subdir] = contrib
projects[views][subdir] = contrib
projects[views_bulk_operations][version] = 3.x-dev
projects[views_tree][version] = 2.x-dev
projects[wysiwyg][version] = 2.x-dev
projects[xautoload][subdir] = contrib
projects[xmlsitemap][subdir] = contrib

; Themes
projects[zen][version] = 6.x-dev

; Libraries
libraries[ckeditor][download][type] = get
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%204.4.7/ckeditor_4.4.7_full.tar.gz"
libraries[ckeditor][destination] = libraries
libraries[ckeditor][directory_name] = ckeditor
libraries[s3_php5_curl][download][type] = git
libraries[s3_php5_curl][download][url] = "ssh://git@git.giantrabbit.com/allgr/s3-php5-curl.git"
libraries[s3_php5_curl][destination] = libraries
libraries[s3_php5_curl][directory_name] = s3-php5-curl

; Patches
projects[media_browser_plus][patch][2215183] =
https://www.drupal.org/files/issues/media_browser_plus-folder-save-2215183-5.patch
; projects[media_browser_plus][patch][2387943] =
https://www.drupal.org/files/issues/2387943-subfolder-search-12.patch
