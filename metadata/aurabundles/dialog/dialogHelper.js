({
    update: function(component) {
        var dialogClass = component.get("v.dialogClass") || null;
        if (dialogClass) {
            component.set("v.gen_class", dialogClass);
            
        } else {
            
            var clas = component.get("v.class") || null;
            
            var gen_class = "dialog";
            
            //gen_class += active ? " show" : " hide";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})