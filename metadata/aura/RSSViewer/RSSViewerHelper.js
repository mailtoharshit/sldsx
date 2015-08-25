({
	getRSS : function(component) {
        var url = component.get("v.URL");
        var numberOfEntries = component.get("v.numberOfEntries");
        var includeDate = component.get("v.includeDate");
        var includeDesc = component.get("v.includeDesc");
    	var action = component.get("c.getRSSContent");
        action.setParams({
			"url": url, 
            "numberOfEntries": numberOfEntries
		});
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var oResponse = JSON.parse(response.getReturnValue());  
                    if (oResponse.hasOwnProperty('Error')){
                        if (oResponse.Error == "XMLError"){
                        	component.set("v.eoutput", "Unable to load feed. Please contact your Salesforce Administrator.");
                        }
                        if (oResponse.Error == "GenericError"){
                        	component.set("v.eoutput", "Feed is not accessible. Please contact your Salesforce Administrator.<br/>" + response.Message);
                        }
                    } else {
                        component.set("v.feedtitle", oResponse.title);	
                        component.set("v.itemCollection", oResponse.items);	
                        component.set("v.eoutput", "");	
                    }
                } else if (state === "ERROR") {
                    component.set("v.eoutput", "Unable to load feed. Please contact your Salesforce Administrator.");
                }
            });
        $A.enqueueAction(action);   
	}
})