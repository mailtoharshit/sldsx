<image src="https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/sflabs.png?token=AAmOoRHwmOYSLYk7FmSx_pBZfaG629e4ks5V3LsGwA%3D%3D"/>

#SLDS Sample Components
SLDS Sample Components is an open-source project to provide a set of common Lightning Components that conform and wrap [Salesforce Lightning Design System's (SLDS)](http://getslds.com) CSS framework. This is to help you not worry about SLDS specific CSS, markup for basic components. And also to provide JS support so you don't have to implement them.

Note: These components are complementary to SLDS and not a replacement.

This tutorial is created to help you learn how to use SLDS framework in custom Lightning Components and also how to use these sample components.  

#Part 1 - Installation And Documentation
####Step 1 - Enable Lightning Components

1. Login to your Salesforce Org
2. Go to `Setup > Develop > Lightning Components`
3. Check `Enable Lightning Components`


	![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/enableLightningComponentsPic.png?token=AAmOoXNBdvBa7YlhYyoaAF7Y3rpSMB2pks5V3LWIwA%3D%3D)

4. **Register My Domain**
 
	In Winter '16 release, you may be asked to enable `My Domain` to use Lightning Components.
	 
	Follow the steps to enable it:
	
	4.1 Go to `Setup > Domain Management > My Domain`
	
	4.2 Enter a unique domain name (some string) and check for availability
	
	4.3 Agree to `Terms and Conditions`
	
	4.4 Press `Register`
	
	- You will get a notification when the registration is successful (It may take couple of minutes to 30 mins).
    - You then need to login with a new domain url, it may look like: `https://YOURDOMAIN-dev-ed.my.salesforce.com`
    
    4.5  Go back to `Setup > Domain Management > My Domain`
    
    4.6 Press `Push to users` button.

    ![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/myDomainPic.png?token=AAmOodzO9e8SilKOtMrEK3Jju5FAtZ5sks5V3LrEwA%3D%3D)
    

####Step 2 - Installation

SLDSX is distributed as an [unmanaged package](https://help.salesforce.com/apex/HTViewHelpDoc?id=sharing_apps.htm&language=en). The package has all the components, and latest version of SLDS framework (CSS, fonts, icons etc). To use it, simply install the package, load SLDS static resource and use individual components in your app.

1. Login to your Salesforce Org.
2. Install the [unmanaged package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB00000001Y7Z)  (w/ SLDS v0.8). 
3. Keep the default settings and click `Install`.

####Step 3 - Browse SLDS.app (Sample App)
SLDS app is a sample app that contains a list of all the SLDSX components and source code for each one of them. The examples are identical to what you'll find in the [Salesforce Lightning Design System's (SLDS)](http://salesforce-design-system.herokuapp.com) website.

1. Open SLDS.app by changing the url to: [{yourOrg}//{namespace}/SLDS.app](https://login.salesforce.com/c/SLDS.app) or [https://login.salesforce.com/c/SLDS.app](https://login.salesforce.com/c/SLDS.app)

	You can also open SLDS.app by following the steps below:
	1. Click on {Your Name} > Developer Console (on the top-right)
	2. In Developer Console, Click on `File > Open Lightning Components`
	3. Find `SLDS.app`in the dialog
	2. Press 'Preview' button on the right hand panel

<image src="https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/slds-app-small.png?token=AAmOoekMbrdWQ43C9FIzvFNR2f616IVMks5V3LkjwA%3D%3D"/>

####Step 4 - Browse SLDSX Docs
Lightning auto-generates documentation for all components based on the source code. Since you installed the SLDSX components package, you'll be able to browse the docs for SLDSX components along with all other components! 

1. Open `{yourOrg}/auradocs/reference.app`
2. Click on `Components > SLDSX` to see all the components in `SLDSX` namespace. 


<image src="https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/auraDocsPic.png?token=AAmOoTO4_cqHfJtcvkz4oG5OiiBasPNBks5V3LlCwA%3D%3D"/>

#Part 2 - Building A Hello World App
####Step 1 - Load SLDS Framework
`SLDS.app` itself uses a lot of SLDSX components, so you can simply see the source code to get an idea about how you can use various SLDSX components.

1. Click on {Your Name} > Developer Console (on the top-right)
2. In Developer Console, Click on `File > Open Lightning Components`
3. Find `SLDS.app`in the dialog
4. Scroll through the source.

Notice that the code loads SLDS as a static resource and also uses `slds` div parent element to CSS namespace the component so that CSS doesn't bleed into other components. This is how you load SLDS framework into your Lightning app or component.  
<image src="https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/sldsNSPic.png?token=AAmOoWs9vG13Omsxtqe5C_Zs3eTkWevAks5V3LlvwA%3D%3D"/>

Note: You don't need to load it in every component, you just need to load it in the main component or app that has all other components.

####Step 2 - Create a Standalone App
1. In Developer Console, Click on `New > Lightning Application`
2. Enter `HelloSLDSX` and press `Submit`
3. Add the following under `<Application>` tag to load SLDS framework and add a button.
	```    
	<ltng:require styles="/resource/sldsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>
	<div class="slds">
      <sldsx:button type="neutral">Button</sldsx:button>
    </div>

	```
4. Press `Preview` and you'll see:

	![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/buttonPic.png?token=AAmOoS1AZNsJZcfOB9Vfy44ScYDyspBiks5V3LmJwA%3D%3D)


####Step 3 - Change An Attribute
Every SLDSX components has multiple attributes that can have various values. Component look and feel changes based on attribute values. 

1. Let's change our button's `type` attribute to `brand`.
	```
	<sldsx:button type="brand">Button</sldsx:button>
	```

4. Press 'Preview` and you'll see:

	![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/buttonBrandPic.png?token=AAmOobdk28dFLgvk90Tl8hikyVHnzN1Aks5V3LmlwA%3D%3D)

Note: You can use  AuraDocs app (Step 3) to see list of attributes and possible values for each attribute for a given component.



####Step 4 - Add A JS Controller
Every SLDSX component has a `press` attribute that allows us to add interact with press(button click) event in JavaScript controller. 

1. Add a `press="{!c.myButtonHandler}"` to our button. 
	```
	<sldsx:button press="{!c.myButtonHandler}" type="brand">Button</sldsx:button>
	```
2. In Developer Console, click on `Controller` button on the right-side pane.
2. Replace the code with the following:

	```
	({
		myButtonHandler : function(component, event, helper) {
			alert('Button Clicked!');
		}
	})
	```
	
3. Click on the 'Preview' button or simply refresh browser.
4. Click on the button
5. You'll see `Button Clicked!` alert.

#Part 3 - Building A Responsive App (Grid System)
An App is said to be responsive if it can adapt and display its contents irrespective of the screen size (i.e. viewed from a mobile, tablet or a laptop). Since the screens on the mobile devices are literally smaller than screens in laptops and large monitors, the app needs to automatically show or hide or rearrange the content depending on the screen size. To figure out how much data to show can be tricky and that's where the `Grid System` comes in handy.

####Step 1 - Grid System

####Sizes
Grid system helps arrange the content in grids of 1 cell (container) upto 12 cells in a given row. You can specify how many cells you want in a row using `{cellSize}-of-{totalContainers}` format. 
For example: 
If you want just 1 cell to occupy entire space, simply use: `1-of-1`.

```
<sldsx:grid  wrap="true">
 <sldsx:col size="1-of-1">1-of-1</sldsx:col>
</sldsx:grid>
 ```
 
If you want just 1 cell to occupy 1/12 the space, simply use: `1-of-12`. This allows you to have 12 such cells in a single row.

```
<sldsx:grid  wrap="true">
      <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
            <sldsx:col size="1-of-12">1-of-12</sldsx:col>
</sldsx:grid>

```

![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/gridSystemPic.png?token=AAmOoV9r6IC9qr3Hyo7H_D1ZZ-eqor_Vks5V3LnCwA%3D%3D)
	

Note: Notice we are also using `wrap=true` attribute. This tells the Grid System to wrap and move the cell to the next row below if there are more cells than it can fit.

![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/wrapPic.png?token=AAmOoVUN-dxPJNfyY3CiEesDbW1NcNo3ks5V3LnkwA%3D%3D)
	
####Step 2 - Multiple Sizes For Various Screensizes
In most apps you want to show different number of items depending on the screensize. 

For example, if viewed from a mobile device you may want to show just one cell/item per row, but if viewed from a medium size screen like a tablet, you may want to show 6 cells/items in a single row. And finally if viewed from a large screen, you may want to show 12 cells/items in a single row.
In Large Screen (e.g. laptops):
![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/largeScreenPic.png?token=AAmOoWOeaKZrpOTAMcKN2UIFmoKT6bI5ks5V3Ln-wA%3D%3D)

In Medium Screen (e.g. tablets):
		![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/mdScreenPic.png?token=AAmOoTq6WcjvRbvngEH7HtFm4mX2o6Drks5V3LoTwA%3D%3D)

In Small Screens (e.g. mobile phones): 		
![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/smScreenPic.png?token=AAmOoZA7wGZmJya9F54yolMM8pJpUyUXks5V3LoxwA%3D%3D)

Thankfully, Grid System offers small, medium and large size attributes that can be used in this situation.
In SLDSX components, they correspond to "size", "mdSize" and "lgSize" respectively.

1. Copy paste the below code into HelloSLDSX.app under "slds" div (You can remove the button if you want)
2. Click preview.
3. Make your browser full screen and notice, you'll see 12 items in a single row
4. Squeeze the browser's width (not the height), you'll see that at certain point,it starts to show only 6 items per row and show the remaining 6 items in the 2nd row.
5. Squeeze the browser's width (not the height) all the way to the smallest width. You'll see just 1 item per row and the remaining 11 items are displayed in different rows below.

```
<sldsx:grid  wrap="true">
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
      <sldsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sldsx:col>
</sldsx:grid>

```
#Part 4 - Building An Accounts List App
####This app shows you how to use raw SLDS markup along with SLDSX components.
![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/accountsAppPic.png?token=AAmOocLC71enF48M39WloAY23uQRdstWks5V3MvDwA%3D%3D)
SLDS framework provides a whole host of components that are not part of these sample components like: tables, headers and so on but we can use both togeather.
In this example, we will build a simple Accounts app that shows list of accounts in a table.
We'll use raw CSS instead of SLDSX components just to show that you can use it directly as well. 



####Step 1 - Create Accounts Apex Controller
1. In Developer console, Click on New > Create Apex Class
2. Enter `AccountsController` as the name of the class.
3. Paste the following code

	```
	public class AccountsController {
	  @AuraEnabled
	  public static List<Account> getAccounts() {
	    return [SELECT Id, name, industry, Type, NumberOfEmployees, TickerSymbol, Phone, BillingStreet, BillingCity, BillingState, BillingPostalCode 
	            FROM Account ORDER BY createdDate ASC];
	  }   
	}
	```
4. Save it.

####Step 2 - Create AccountList Component

1. In Developer console, Click on New > Lightning Components
2. Enter `AccountList` as the Bundle name
3. Paste the following code:

	```
<aura:component controller="AccountsController">
	  <aura:attribute name="accounts" type="List" />
	  <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
	  <!-- Use the Apex model and controller to fetch server side data -->
	  <table class="slds-table slds-table--bordered slds-table--striped">
	      <thead>
	        <tr>
	          <th scope="col"><span class="slds-truncate">ID</span></th>
	          <th scope="col"><span class="slds-truncate">Name</span></th>
	          <th scope="col"><span class="slds-truncate">Type</span></th>
	          <th scope="col"><span class="slds-truncate">Number Of Employees</span></th>
	          <th scope="col"><span class="slds-truncate">Ticker Symbol</span></th>
	          <th scope="col"><span class="slds-truncate">Phone</span></th>
	          <th scope="col"><span class="slds-truncate">Address</span></th>
	        </tr>
	      </thead>
	      <tbody>
	      <aura:iteration items="{!v.accounts}" var="account">
	       <tr>
	         <td>{!account.Id}</td>
	         <td>{!account.Name}</td>                 
	         <td>{!account.Type}</td>
	         <td>{!account.NumberOfEmployees}</td>                 
	         <td>{!account.TickerSymbol}</td>
	         <td>{!account.Phone}</td>                 
	         <td>
               <! !!! -- REPLACE THIS WITH A BUTTON COMPONENT !!!!! -->
              </td>
	       </tr>
	     </aura:iteration>
	   </tbody>
	 </table>
	</aura:component>
	```
4. Add an SLDSX button that has JavaScript handler `{!c.myButtonHandler}` that also receives data via `data` attribute. The `data` attribute is useful to pass around data for example, to know exactly which Account button was clicked.

	In the above code, replace the following line:
	
	```
	<! !!! -- REPLACE THIS WITH A BUTTON COMPONENT !!!!! -->
	```
	With:
	
	
	```
	<sldsx:button data="{!account.Id}" press="{!c.myButtonHandler}" type="brand">Details</sldsx:button>
	``` 

5. Save

####Step 3 - Create JS Controller
1. While in AccountList component, click on the `Controller` menu in the right-side panel.
2. Copy paste the below code:
	
	```
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
	```
3. Save it

####Step 4 - Create JS Helper
Helper is used to interact with the server.

1. While in AccountList component, click on the `Helper` menu in the right-side panel.
2. Copy paste the below code:
	
	```
	({
	     //Fetch the accounts from the Apex controller
	    getAccountList: function(component) {
	        var action = component.get("c.getAccounts");
	        
	        //Set up the callback
	        var self = this;
	        action.setCallback(this, function(actionResult) {
	            component.set("v.accounts", actionResult.getReturnValue());            
	        });
	        $A.enqueueAction(action);
	    }   
	})
	```

3. Save it.

####Step 5 - Update Hello SLDSX.app
1. Open `HelloSLDSX.app`
2. Copy-paste the code below:
	
	```
<aura:application >
    <ltng:require styles="/resource/sldsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>    
    <div class="slds">
        <br/>
        <sldsx:grid>     
            <sldsx:col>
                <sldsx:AccountList />
            </sldsx:col>    
        </sldsx:grid>   
    </div>
</aura:application>
	
	```
3. Save it.

4. Press `Update Preview` in the HelloSLDSX.app and you should see a table with SLDSX buttons in each row.

5. Press the `Details` button and you should see the Account Id in an alert box.
![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/accountsAppWithAccIdPic.png?token=AAmOoahZ4gIK2jx-72lVc-ipaSjw04SYks5V3M2KwA%3D%3D)

#Summary
Congratulations! You just learnt how to install SLDS framework, how to use the Sample components and also learnt how to use both SLDS framework and sample components togeather. From this point on, you can create your own SLDS component and use it in your Lightning projects.

You can also contribute to the open-source project here: [https://github.com/ForceDotComLabs/sldsx](https://github.com/ForceDotComLabs/sldsx)