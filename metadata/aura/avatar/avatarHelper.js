({
    update: function(component) {
		var size = component.get("v.size") || null;
        var type = component.get("v.type") || null;
        var clas = component.get("v.class") || null;
        var avatarClass = "avatar";
        
        avatarClass += type ? " avatar--" + type : "";
        avatarClass += size ? " avatar--" + size : "";
        avatarClass += clas ? " " + clas : "";

        component.set("v.avatarClass", avatarClass);
	}
})