({
    update: function(component) {
        var menuClass = component.get("v.menuClass") || null;
        if (menuClass) {
            component.set("v.gen_class", menuClass);
            
        } else {
            
            var search = component.get("v.search") || null;
            var nubbin = component.get("v.nubbin") || null;
            var heading = component.get("v.heading") || null;
            var size = component.get("v.size") || null;
            var position = component.get("v.position") || null;
            var clas = component.get("v.class") || null;
            
            var gen_class = "dropdown";
            
            gen_class += size ? " size--" + size : "";
            gen_class += position ? " dropdown--" + position : "";
            gen_class += search ? " dropdown--search" : " dropdown--menu";
            gen_class += heading ? " text--heading-label" : "";
            gen_class += nubbin ? " dropdown--nubbin-top" : "";
            gen_class += clas ? " " + clas : "";
            
            component.set("v.gen_class", gen_class);
        }
    }
})