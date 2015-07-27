({
    update: function(component) {
        var colClass = component.get("v.colClass") || null;
        if (colClass) {
            component.set("v.gen_class", colClass);
            
        } else {
            var size = component.get("v.size") || null;
            var mdSize = component.get("v.mdSize") || null;
            var lgSize = component.get("v.lgSize") || null;
            var order = component.get("v.order") || null;
            var smOrder = component.get("v.smOrder") || null;
            var mdOrder = component.get("v.mdOrder") || null;
            var lgOrder = component.get("v.lgOrder") || null;             
            var smCount = component.get("v.smCount") || null;
            var mdCount = component.get("v.mdCount") || null;
            var lgCount = component.get("v.lgCount") || null;
            var padded = component.get("v.padded") || null;
            var align = component.get("v.align") || null;
            var clas = component.get("v.class") || null;
            
            var gen_class = "slds-col";
            gen_class += size ? " slds-size--" + size : "";
            gen_class += mdSize ? " slds-medium-size--" + mdSize : "";
            gen_class += lgSize ? " slds-large-size--" + lgSize : "";
 
            gen_class += order ? " slds-order--" + order : "";
            gen_class += smOrder ? " slds-small-order--" + smOrder : "";
            gen_class += mdOrder ? " slds-medium-order--" + mdOrder : "";
            gen_class += lgOrder ? " slds-large-order--" + lgOrder : "";
            
            gen_class += align ? " slds-align-" + align : "";
            gen_class += padded ? " slds-col--padded" : "";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})