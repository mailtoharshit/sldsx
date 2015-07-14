({
    update: function(component) {
        //var t1 = performance.now();
        var gen_class = "button";
        var clas = component.get("v.class");
        var type = component.get("v.type");
        
        var iconCategory = component.get("v.iconCategory") || null;
        var iconName = component.get("v.iconName") || null;
        var iconType = component.get("v.iconType") || null;
        var iconSize = component.get("v.iconSize") || null;
        var iconPosition = component.get("v.iconPosition") || null;
        var iconClass = component.get("v.iconClass") || null;

        var stateful = component.get("v.stateful");
        var selected = component.get("v.selected");
        var focused = component.get("v.focused");
        var hovered = component.get("v.hovered");
        
        if (stateful) {
            gen_class += selected === true ? " is-selected" : " not-selected";
            gen_class += hovered === true ? " is-hovered" : "";
        }
            
		gen_class += focused === true ? " is-focused" : "";
            
        // "medium" is the default, no style needed
       	
        var hasIcon = iconCategory !== null && iconName !== null;
        
        if (hasIcon) {
            gen_class += iconType ? " button--icon-" + iconType : "";
            /*
            // NOTE INCONSISTENCY!
            gen_class += iconSize ? " button__icon--" + iconSize : "";
            gen_class += type ? " button--icon-" + type : "";
            */
        }
        
        // Only use the button type if it's not an icon?
        gen_class += type ? " button--" + type : "";
        
        gen_class += clas || "";
        //console.warn("gen_class: ", gen_class);
        component.set("v.gen_class", gen_class);
        
        if (hasIcon) {            
            var xlinkHref = component.get("v.resourceUrl");
            var gen_icon_class = stateful === true ? "button__icon--stateful" : "button__icon";
            var gen_icon_text_class = "";
            if (stateful === true) {
                gen_icon_text_class = "text";
                gen_icon_text_class += selected === true ? "-selected" : "-not-selected";
                if (selected === true) {
                    // BUGGY!!!!
                    // Is this really focus or hover
	                //gen_icon_text_class += focused === true ? "-focus" : "";
                    //iconName = focused === true ? "close" : "check";
	                gen_icon_text_class += selected === true ? "-focus" : "";
                    iconName = hovered === true ? "close" : "check"
                } else {
                    iconName = "add";
                }
            }
            
            xlinkHref += "/assets/icons/" + iconCategory + "-sprite/svg/symbols.svg#" + iconName;
            
            component.set("v.iconHref", xlinkHref);

			// Can't use the attribute in the SVG, due to CDATA replacement in setup?
			try {
                var cmpEl = component.getElement();
                var useEl = cmpEl.getElementsByTagName("use")[0];
                useEl.setAttribute("xlink:href", xlinkHref);
            } catch (e) {
                //console.warn("exception: ", e);
            }
            
            // Generate icon classes
            gen_icon_class += iconPosition ? " button__icon--" + iconPosition : "";
            gen_icon_class += iconClass ? " button__icon--" + iconClass : "";
            gen_icon_class += iconSize ? " button__icon--" + iconSize : "";

            gen_icon_class += type ? " button--icon-" + type : "";
            
            component.set("v.gen_icon_class", gen_icon_class);
            component.set("v.gen_icon_text_class", gen_icon_text_class);
        }
        //var t2 = performance.now();
        //console.warn("buttonHelper.update time: ", (t2 - t1).toFixed(4) + " ms");
    },
    
  	setup: function(component) {
        // Replace the CDATA block with svg element
        // Workaround for bug in Aura Framework
        
        var svg = component.find("svg_content");
        if (svg) {
            var value = svg.getElement().innerText;
            value = value.replace("", "");
            svg.getElement().innerHTML = value;
        }
	}
})