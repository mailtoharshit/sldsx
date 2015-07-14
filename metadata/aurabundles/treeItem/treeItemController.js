({
    update: function(component, event, helper) {
        helper.update(component);
    },
    
    toggleExpanded: function(component, event, helper) {
        var expanded = component.get("v.expanded");
        if (expanded) {
            $A.util.removeClass(component.getElement(), "is-closed");
            $A.util.addClass(component.getElement(), "is-open");
        } else {
            $A.util.removeClass(component.getElement(), "is-open");
            $A.util.addClass(component.getElement(), "is-closed");
        }
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