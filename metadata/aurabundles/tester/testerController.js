({
    init: function(component, event, helper) {
        helper.createData(component);
    },
    
    test: function(component, event, helper) {
        console.warn("test: ", component, event);
    },
    
    toggleDialog: function(component, event, helper) {
        var dialog = component.find("dialog");
        var evt = dialog.get("v.active") === true ? $A.getEvt("sdsx:closeDialog") : $A.getEvt("sdsx:openDialog");      
        evt.setParams({dialog: dialog});
        evt.fire();
    },
    
    dynamicDialog: function(component, event, helper) {
        $A.createComponent("sdsx:anchor", {label:"Test", heading:"Testing 1234"}, function(anchor) {
            console.warn("anchor: ", anchor);
	        $A.createComponent("sdsx:dialog", {heading:"Dynamically Created Dialog"}, function(dialog) {
	            console.warn("dialog: ", dialog);
                dialog.set("v.body", anchor);
                var evt = $A.getEvt("sdsx:openDialog");      
                evt.setParams({dialog: dialog});
                evt.fire();
            });
        });
    }
    
})