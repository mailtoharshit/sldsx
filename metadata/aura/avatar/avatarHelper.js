({
    update: function(component) {
		var size = component.get("v.size") || null;
        var type = component.get("v.type") || null;
        var clas = component.get("v.class") || null;
        var avatarClass = "slds-avatar";
        
        avatarClass += type ? " slds-avatar--" + type : "";
        avatarClass += size ? " slds-avatar--" + size : "";
        avatarClass += clas ? " " + clas : "";

        component.set("v.avatarClass", avatarClass);
	}
})