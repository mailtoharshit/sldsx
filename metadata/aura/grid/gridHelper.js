({
    update: function(component) {
        var gridClass = component.get("v.gridClass") || null;
        if (gridClass) {
            component.set("v.gen_class", gridClass);
            
        } else {
            
            var overflow = component.get("v.overflow") || false;
            var wrap = component.get("v.wrap") || false;
            var align = component.get("v.align") || null;
            var clas = component.get("v.class") || null;
            
            var gen_class = "slds-grid";
            
            gen_class += overflow ? " slds-grid--overflow" : "";
            gen_class += align ? " slds-grid--align-" + align : "";
            gen_class += wrap ? " slds-wrap" : "";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})