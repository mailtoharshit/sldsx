({
    update: function(component) {
        var pillClass = component.get("v.pillClass") || null;
        if (pillClass) {
            component.set("v.gen_class", pillClass);
            
        } else {
            
            var clas = component.get("v.class") || null;
            
            var gen_class = "slds-pill";
            
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})