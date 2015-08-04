({
    update: function(component) {
        var textClass = component.get("v.textClass") || null;
        if (textClass) {
            component.set("v.gen_class", textClass);
        } else {
            
            var size = component.get("v.size") || null;
            var type = component.get("v.type") || null;
            var clas = component.get("v.class") || null;
            
            var gen_class = "slds-text";

            gen_class += type ? "-" + type : "";        
            gen_class += size ? "--" + size : "";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }       
	}
})