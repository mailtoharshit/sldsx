({
    update: function(component) {
        var treeItemClass = component.get("v.treeItemClass") || null;
        if (treeItemClass) {
            component.set("v.gen_class", treeItemClass);
            
        } else {
            
           	var branch = component.get("v.branch") || false;
           	var expanded = component.get("v.expanded") || false;
            var level = component.get("v.level") || -1;
            var wrap = component.get("v.wrap") || null;
            var clas = component.get("v.class") || null;
            
            var gen_class = branch ? "tree__branch" : "tree__item";
            
           	gen_class += expanded ? " is-open" : " is-closed";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})