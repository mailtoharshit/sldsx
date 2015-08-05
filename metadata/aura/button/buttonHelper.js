({
    update: function(component) {
        //var t1 = performance.now();
        var gen_class = "slds-button";
        var clas = component.get("v.class");
        var type = component.get("v.type");
        var size = component.get("v.size");
        var position = component.get("v.position");
        var hint = component.get("v.hint");
        
        var iconCategory = component.get("v.iconCategory") || null;
        var iconName = component.get("v.iconName") || null;
        var iconType = component.get("v.iconType") || null;
        var iconSize = component.get("v.iconSize") || null;
        var iconPosition = component.get("v.iconPosition") || null;
        var iconClass = component.get("v.iconClass") || null;
        var iconInverse = component.get("v.iconInverse") || null;
        var iconHint = component.get("v.iconHint") || null;
        var iconBorderSize = component.get("v.iconBorderSize") || null;

        var stateful = component.get("v.stateful");
        var selected = component.get("v.selected");
        var focused = component.get("v.focused");
        var hovered = component.get("v.hovered");
        
        if (stateful) {
            gen_class += selected === true ? " slds-is-selected" : " slds-not-selected";
            gen_class += hovered === true ? " slds-is-hovered" : "";
        }
            
        gen_class += focused === true ? " slds-is-focused" : "";
        
        if(position === "first" || position === "last") {
            gen_class +=  position === "first" ? " slds-button--first" : " slds-button--last";
        }
        
        //add size class
        gen_class += size && (size == "small" || size== "large") ? "  slds-button--"+size : "";
            
        
        var hasIcon = iconCategory !== null && iconName !== null;        
        if (hasIcon) {
            gen_class += iconType ? " slds-button--icon-" + iconType : "";
             gen_class += iconBorderSize ? " slds-button--icon-border-" + iconBorderSize : "";
            /*
            // NOTE INCONSISTENCY!
            gen_class += iconSize ? " slds-button__icon--" + iconSize : "";
            gen_class += type ? " slds-button--icon-" + type : "";
            */
        }
        
        // Only use the button type if it's not an icon?
        gen_class += type ? " slds-button--" + type : "";
   
        gen_class += hint ? "  slds-button--hint" : ""; 

        gen_class += clas || "";
        //console.warn("gen_class: ", gen_class);
        component.set("v.gen_class", gen_class);
        
        if (hasIcon) {            
            var xlinkHref = component.get("v.resourceUrl");
            //var gen_icon_class = stateful === true ? "slds-button__icon--stateful" : "slds-button__icon";
            var gen_icon_class = "slds-button__icon";
            var gen_icon_text_class = "";

            xlinkHref += "/assets/icons/" + iconCategory + "-sprite/svg/symbols.svg#" + iconName;
            //var menuIconHref = xlinkHref + "/assets/icons/utility-sprite/svg/symbols.svg#down";
            component.set("v.iconHref", xlinkHref);
            var menuIconHref = component.get("v.resourceUrl") + "/assets/icons/utility-sprite/svg/symbols.svg#down";
            component.set("v.menuIconHref", menuIconHref);

            // Can't use the attribute in the SVG, due to CDATA replacement in setup?
            try {
                var cmpEl = component.getElement();
                var useEl = cmpEl.getElementsByTagName("use")[0];
                useEl.setAttribute("xlink:href", xlinkHref);
            } catch (e) {
                //console.warn("exception: ", e);
            }
            
            // Generate icon classes
            gen_icon_class += iconPosition ? " slds-button__icon--" + iconPosition : "";
            gen_icon_class += iconClass ? " slds-button__icon--" + iconClass : "";
            gen_icon_class += iconSize ? " slds-button__icon--" + iconSize : "";

            gen_icon_class += type ? " slds-button__icon--" + type : "";
            
            gen_icon_class += iconInverse ? "  slds-button__icon--inverse" : "";
            
            gen_icon_class += iconHint ? "  slds-button__icon--hint" : ""; 
            
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
        
        // for buttons w/ dropdown menu
        var svg2 = component.find("svg_menu_content");   
        if (svg2) {
            var value = svg2.getElement().innerText;
            value = value.replace("", "");
            svg2.getElement().innerHTML = value;
        }
    }
})