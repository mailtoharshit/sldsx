({
	doInit : function(component, event, helper) {
     	helper.getRSS(component);
     	//component.get()
	},
	refreshContent : function(component, event, helper) {
    	document.getElementById(component.getGlobalId() + '_rssoutputcontainer').innerHTML = "Loading...";
		helper.getRSS(component);
	},
})