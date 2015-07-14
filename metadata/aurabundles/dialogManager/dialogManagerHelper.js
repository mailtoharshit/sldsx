({
    openDialog: function(component, dialog) {
       	$A.util.addClass(dialog.getElement(), "visible");
        dialog.set("v.active", true);
    },

   	closeDialog: function(component, dialog) {
       	$A.util.removeClass(dialog.getElement(), "visible");
        dialog.set("v.active", false);
    },
})