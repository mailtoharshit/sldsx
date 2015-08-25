({
    showDetails : function(component, title, body) {
        var dialog = component.find("dialog");
        var backdrop = component.find("backdrop");
        var dialogTitle = component.find("dialog_title").getElement();
        var dialogBody = component.find("dialog_body").getElement();
        dialogBody.innerHTML = component.get("v.content");
        dialogTitle.innerHTML = component.get("v.title");
        debugger;
        document.body.style.overflow = "hidden";
        $A.util.removeClass(dialog, "slds-hide");
        $A.util.removeClass(backdrop, "slds-modal-backdrop--closed");
        $A.util.addClass(backdrop, "slds-modal-backdrop--open");
    },

    hideDetails : function(component, title, body) {
        var dialog = component.find("dialog");
        var backdrop = component.find("backdrop");
        document.body.style.overflow = "";
        $A.util.addClass(dialog, "slds-hide");
        $A.util.removeClass(backdrop, "slds-modal-backdrop--open");
        $A.util.addClass(backdrop, "slds-modal-backdrop--closed");
    },

    setup : function(component) {
        var svg = component.find("svg_content");   
        if (svg) {
            var value = svg.getElement().innerText;
            value = value.replace("", "");
            svg.getElement().innerHTML = value;
        }
    }

})