({
		 doInit : function(component, event, helper) {      
			//Fetch the expense list from the Apex controller   
	        helper.getAccountList(component);
	    },
        myButtonHandler: function(component, event, helper) {
            //Get data via "data-data" attribute
            alert(event.target.getAttribute("data-data") + " was passed");
        }
	})