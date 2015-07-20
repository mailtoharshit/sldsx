({
    testData: {
        heading: "My Data",
        sobjects: [
            {
                label: "Accounts",
             	data: [
            		{name: "Burlington", id: "1234567890"},
            		{name: "Acme", id: "1234567891"}
        		]
			},
            {
                label: "Contacts",
                data: [
                    {name: "John Doe", id: "1234567810"},
                    {name: "Jane Smith", id: "1234567811"}
                ]
            }
        ]
    },
    
    createData: function(component) {
        component.set("v.testData", this.testData);	
    }
})