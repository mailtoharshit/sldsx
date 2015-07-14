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
            
            var gen_class = "grid";
            
            gen_class += overflow ? " grid--overflow" : "";
            gen_class += align ? " grid--align-" + align : "";
            gen_class += wrap ? " wrap" : "";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})