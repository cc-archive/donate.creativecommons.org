; Drush Make API version
api = 2

; Core drupal version
core = 7.x

; Modules
projects[admin_menu][subdir] = contrib
projects[admin_menu][version] = 3.x-dev
projects[admin_views][subdir] = contrib
projects[advanced_help][subdir] = contrib
projects[backup_migrate][subdir] = contrib
; projects[better_formats][subdir] = contrib
; projects[better_formats][version] = 1.x-dev
projects[block_class][subdir] = contrib
projects[block_class][version] = 2.x-dev
projects[ctools][subdir] = contrib
projects[devel][subdir] = contrib
projects[diff][subdir] = contrib
projects[entity][subdir] = contrib
projects[environment_indicator][subdir] = contrib
projects[file_entity][subdir] = contrib
projects[file_entity][version] = 2.x-dev
projects[google_analytics][subdir] = contrib
projects[globalredirect][subdir] = contrib
projects[globalredirect][version] = 1.x-dev
projects[gr_tpl_tweaks][type] = module
projects[gr_tpl_tweaks][subdir] = custom
projects[gr_tpl_tweaks][download][type] = git
projects[gr_tpl_tweaks][download][url] = "ssh://git@git.giantrabbit.com/allgr/gr_tpl_tweaks.git"
projects[gr_tpl_tweaks][download][branch] = 7.x-1.x-dev
projects[jquery_update][subdir] = contrib
projects[linkit][subdir] = contrib
projects[linkit][version] = 3.x-dev
projects[logintoboggan][subdir] = contrib
projects[media][subdir] = contrib
projects[media][version] = 2.x-dev
; projects[menu_block][subdir] = contrib
; projects[menu_block][version] = 2.x-dev
projects[module_filter][subdir] = contrib
projects[module_filter][version] = 2.x-dev
projects[pathauto][subdir] = contrib
projects[pathauto][version] = 1.x-dev
projects[pathologic][subdir] = contrib
projects[pathologic][version] = 3.x-dev
projects[redirect][subdir] = contrib
projects[redirect][version] = 1.x-dev
projects[token][subdir] = contrib
projects[views][subdir] = contrib
projects[views_bulk_operations][version] = 3.x-dev
projects[views_bulk_operations][subdir] = contrib
projects[wysiwyg][subdir] = contrib
projects[wysiwyg][version] = 2.x-dev

; Themes
projects[zen][version] = 6.x-dev

; Libraries
libraries[ckeditor][download][type] = get
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%204.4.6/ckeditor_4.4.6_full.tar.gz"
libraries[ckeditor][destination] = libraries
libraries[ckeditor][directory_name] = ckeditor
libraries[s3_php5_curl][download][type] = git
libraries[s3_php5_curl][download][url] = "ssh://git@git.giantrabbit.com/allgr/s3-php5-curl.git"
libraries[s3_php5_curl][destination] = libraries
libraries[s3_php5_curl][directory_name] = s3-php5-curl

