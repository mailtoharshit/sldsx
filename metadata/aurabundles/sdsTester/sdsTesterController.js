({
    init: function(component, event, helper) {
        foo = component;
   		var items = [
            {label:"Alpha",max:12},
            {label:"Beta",max:7}
		];
        component.set("v.items", items);
    },
    
	handlePress: function(component, event, helper) {
		console.warn("sdsTesterController.handlePress");
	},
    
    test:  function(component, event, helper) {
        var col = component.find("col2");
        col.set("v.mdOrder", 2);
        var col = component.find("col3");
        col.set("v.mdOrder", 3)
	}
})