({
    update: function(component) {
        var listClass = component.get("v.listClass") || null;
        if (listClass) {
            component.set("v.gen_class", listClass);
            
        } else {
            
            var ordered = component.get("v.orderd") || null;
            /*
             * 
             * 
             * WORK STOPPED HERE
             * 
             * 
             * 
             * 
          	 */ 
            var description = component.get("v.type") || null;
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