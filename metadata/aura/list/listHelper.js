({
    update: function(component) {
        var gen_class = "";
        var type = component.get("v.type") || null;
        var direction = component.get("v.direction") || null;
        gen_class += type ? " slds-list--"+ type : "";
        gen_class += direction ? " slds-list--"+ direction : "";
        component.set("v.gen_class", gen_class);      
    }
})