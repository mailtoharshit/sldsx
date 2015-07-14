({
    update: function(component, event, helper) {
        console.warn("update");
        helper.update(component);
    },
    
    handlePress: function(component, event, helper) {
        //$A.util.addClass(component.getElement(), "is-hovered");
       	console.warn("handlePress");
        var expanded = component.get("v.expanded");
        console.warn("expanded: ", expanded);
        component.set("v.expanded", !expanded);
        helper.update(component);
    },
    
    handleMouseOver: function(component, event, helper) {
        $A.util.addClass(component.getElement(), "is-hovered");
    },
    
    handleMouseOut: function(component, event, helper) {
        $A.util.removeClass(component.getElement(), "is-hovered");
    },
    
    handleOnFocus: function(component, event, helper) {
        $A.util.removeClass(component.getElement(), "not-selected");
        $A.util.addClass(component.getElement(), "is-selected");
    },
    
    handleOnBlur: function(component, event, helper) {
        $A.util.addClass(component.getElement(), "not-selected");
        $A.util.removeClass(component.getElement(), "is-selected");
    }
    
})