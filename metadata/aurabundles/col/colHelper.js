({
    update: function(component) {
        var colClass = component.get("v.colClass") || null;
        if (colClass) {
            component.set("v.gen_class", colClass);
            
        } else {
            
            var smOrder = component.get("v.smOrder") || null;
            var mdOrder = component.get("v.mdOrder") || null;
            var lgOrder = component.get("v.lgOrder") || null;
            var smIndex = component.get("v.smIndex") || null;
            var mdIndex = component.get("v.mdIndex") || null;
            var lgIndex = component.get("v.lgIndex") || null;
            var smCount = component.get("v.smCount") || null;
            var mdCount = component.get("v.mdCount") || null;
            var lgCount = component.get("v.lgCount") || null;
            var padded = component.get("v.padded") || null;
            var align = component.get("v.align") || null;
            var clas = component.get("v.class") || null;
            
            var gen_class = "col";
            
            gen_class += (smIndex && smCount) ? " size--" + smIndex + "-of-" + smCount : "";
            gen_class += (mdIndex && mdCount) ? " medium-size--" + mdIndex + "-of-" + mdCount : "";
            gen_class += (lgIndex && lgCount) ? " large-size--" + lgIndex + "-of-" + lgCount : "";
            gen_class += smOrder ? " small-order--" + smOrder : "";
            gen_class += mdOrder ? " medium-order--" + mdOrder : "";
            gen_class += lgOrder ? " large-order--" + lgOrder : "";
            
            gen_class += align ? " align-" + align : "";
            gen_class += padded ? " col--padded" : "";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})