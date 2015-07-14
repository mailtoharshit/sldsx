({
    openDialog: function(component, event, helper) {
        var params = event.getParams();
        var dialog = params.dialog;
        var dialogs = component.get("v.dialogs") || [];
        var match = false;
        for (var i = 0; i < dialogs.length; i++) {
            if (dialog === dialogs[i]) {
                match = true;
            }
        }
        if (!match) {
            dialogs.push(dialog);
        }
        component.set("v.dialogs", dialog);
       	helper.openDialog(component, dialog);
    },

   	closeDialog: function(component, event, helper) {
        var params = event.getParams();
        var dialog = params.dialog;
        var dialogs = component.get("v.dialogs") || [];
        var match = false;
        for (var i = 0; i < dialogs.length; i++) {
            if (dialog === dialogs[i]) {
                match = true;
            }
        }
        if (!match) {
            dialogs.push(dialog);
        }
        component.set("v.dialogs", dialog);
       	helper.closeDialog(component, dialog);
    },
})