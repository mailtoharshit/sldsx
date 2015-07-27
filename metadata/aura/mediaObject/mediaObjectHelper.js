({
    update: function(component) {
        var gen_class = "slds-media";
        var reverse = component.get("v.reverse") || null;
        var center = component.get("v.center") || null;
        var double = component.get("v.double") || null;

        gen_class += reverse ? " slds-media--reverse" : "";
        gen_class += center ? " slds-media--center" : "";
         gen_class += double ? " slds-media--double" : "";
       
        component.set("v.gen_class", gen_class);      
    }
})