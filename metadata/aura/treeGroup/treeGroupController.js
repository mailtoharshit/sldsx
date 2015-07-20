({
    update: function(component, event, helper) {
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