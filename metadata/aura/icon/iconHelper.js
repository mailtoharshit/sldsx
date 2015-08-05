({
    update: function(component) {


        var category = component.get("v.category") || null;
        var name = component.get("v.name") || null;
        var label = component.get("v.label") || null;
        var size = component.get("v.size") || null;
        var container = component.get("v.container") || null;

        var xlinkHref = component.get("v.xlinkHref");
        if (xlinkHref) {
	        component.set("v.xlink_href", xlinkHref);
        } else {
            var xlink_href = component.get("v.resourceUrl");
            xlink_href += "/assets/icons/" + category + "-sprite/svg/symbols.svg#" + name;
            component.set("v.xlink_href", xlink_href);
        }
        
        var gen_class = "slds-icon";

        var iconClass = component.get("v.iconClass") || null;
        if (iconClass) {
            component.set("v.gen_class", iconClass);
        } else {

            var clas = component.get("v.class") || null;
            
            if (typeof container !== "undefined" && container !== null) {
                var gen_container_class = "slds-icon__container";
                gen_container_class += container === "default" ? "" : " slds-icon__container--" + container;
                gen_container_class += " slds-icon-" + category + "-" + name;
                gen_container_class += " slds-icon__svg--default";
                
                component.set("v.gen_container_class", gen_container_class);
            } else {
                // Only add this if the container is not present            
                gen_class += " slds-icon-" + category + "-" + name;
                gen_class += " slds-icon__svg--default";
            }
            
            gen_class += size !== "medium" ? " slds-icon--" + size : "";
            gen_class += clas ? " " + clas : "";

            component.set("v.gen_class", gen_class);
        }
        
        var color = component.get("v.color") || null;
        var style = component.get("v.style") || null;

        var gen_style = "";
      	gen_style += style ? style : "";
        gen_style += color ? " background-color: " + color : "";
        //iconStyle + (v.color != null ? ' background: ' + v.color : '')


        component.set("v.gen_style", gen_style);

/*
        var baseClass = component.get("v.baseClass");
        var category = component.get("v.category");
        var name = component.get("v.name");
        var label = component.get("v.label");
        var size = component.get("v.size");
        var clas = component.get("v.class");
		var container = component.get("v.container");
        
        var iconClass = baseClass;
        
        var xlinkHref = component.get("v.resourceUrl");
        xlinkHref += "/assets/icons/" + category + "-sprite/svg/symbols.svg#" + name;
        if (!component.get("v.xlinkHref")) {
	        component.set("v.xlinkHref", xlinkHref);
        }
        
        if (typeof container !== "undefined" && container !== null) {
            // icon__container icon__container--circle icon-action-description
	        var containerClass = "icon__container";
            containerClass += container === "default" ? "" : " icon__container--" + container;
            containerClass += " icon-" + category + "-" + name;
			containerClass += " icon__svg--default";

        	component.set("v.containerClass", containerClass);
        } else {
			// Only add this if the container is not present            
	       	iconClass += " icon-" + category + "-" + name;
	        iconClass += " icon__svg--default";
        }

        iconClass += size !== "medium" ? " icon--" + size : "";
        iconClass += clas ? " " + clas : "";

        if (!component.get("v.iconClass")) {
	        component.set("v.iconClass", iconClass);
        }
*/        
    },
    
    setup: function(component) {
        // Replace the CDATA block with svg element
        // Workaround for bug in Aura Framework
        
        var svg = component.find("svg_content");
        var value = svg.getElement().innerText;
        value = value.replace("", "");
        svg.getElement().innerHTML = value;
	}

})