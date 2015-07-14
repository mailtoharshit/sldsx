({
    update: function(component) {
		var size = component.get("v.size") || null;
        var align = component.get("v.align") || null;
        var clas = component.get("v.class") || null;
        var containerClass = "container";
        
        containerClass += size ? " container--" + size : "";
        containerClass += align ? " container--" + align : "";
        containerClass += clas ? " " + clas : "";

        component.set("v.containerClass", containerClass);
	}
})