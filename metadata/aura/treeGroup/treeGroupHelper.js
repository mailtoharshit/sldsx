({
    update: function(component) {
        console.warn("treeGroupHelper.update");
        var treeGroupClass = component.get("v.treeGroupClass") || null;
        if (treeGroupClass) {
            component.set("v.gen_class", treeGroupClass);
            
        } else {
            
           	var expanded = component.get("v.expanded") || false;
            console.warn("--------------- expanded: ", expanded);
           	var nested = component.get("v.nested") || false;
            var role = component.get("v.role") || null;
            var clas = component.get("v.class") || null;
            
            var gen_class = role === "tree" ? "tree" : "tree__group";
            
         	gen_class += nested ? " nested" : "";
         	gen_class += expanded ? " is-expanded" : " is-collapsed";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})