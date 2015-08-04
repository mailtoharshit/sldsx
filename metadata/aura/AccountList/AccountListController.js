({
	 doInit : function(component, event, helper) {      
		//Fetch the expense list from the Apex controller   
        helper.getAccountList(component);
    }
})