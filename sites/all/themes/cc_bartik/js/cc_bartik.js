(function($){
  Drupal.behaviors.checkMailingLists = {
    attach: function(context, settings){
      $("table.selector.crm-profile-tagsandgroups input[type=checkbox]").each(function(idx,obj){
        $(obj).attr('checked','checked') ;
      }) ;
    }
  } ;
})(jQuery) ;