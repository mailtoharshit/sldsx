({
	update: function(component, event, helper) {
		helper.update(component);
	},
    
    handleMouseOver: function(component, event, helper) {
        $A.util.addClass(component.getElement(), "slds-is-hovered");
        component.set("v.hovered", true);
        helper.update(component);
    },
    
    handleMouseOut: function(component, event, helper) {
        $A.util.removeClass(component.getElement(), "slds-is-hovered");
        component.set("v.hovered", false);
        helper.update(component);
    },

    handleMouseDown: function(component, event, helper) {
        var stateful = component.get("v.stateful");
        if (stateful === true) {
            var selected = component.get("v.selected");
            component.set("v.selected", !selected);
            helper.update(component);
        }
    },
    
    handleOnBlur: function(component, event, helper) {
        component.set("v.focused", false);
        helper.update(component);
    },
    
    handleOnFocus: function(component, event, helper) {
        component.set("v.focused", true);
        helper.update(component);
    }    
})