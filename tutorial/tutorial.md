<image src="https://login.salesforce.com/img/logo190.png"/>


#SDSX - SLDS For Lightning Components
SDSX is an open-source project to provide a set of common Lightning Components that conform and wrap [Salesforce Lightning Design System's (SLDS)](http://getslds.com) CSS framework. This is to help you not worry about SLDS specific CSS and markup for basic components. And also to provide JS support so you don't have to implement them.

Note: All SDSX components use `sdsx` namespace.

In this tutorial we'll show how to use SLDS components in a Lightning app.

#Step 0 - Enable Lightning Components
1. Login to your Salesforce Org.
2. Go to `Setup > Develop > Lightning Components`
3. Check `Enable Lightning Components`

![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/enableLightningComponentsPic.png?token=AAmOoQ83GPhZKZVL0OehGs1KF45P-UTVks5Vw5_xwA%3D%3D)

#Step 1 - Installation

SDSX is distributed as an [unmanaged package](https://help.salesforce.com/apex/HTViewHelpDoc?id=sharing_apps.htm&language=en). The package has all the components, and latest version of SLDS framework (CSS, fonts, icons etc). To use it, simply install the package, load SLDS static resource and use individual components in your app.

1. Login to your Salesforce Org.
2. Click on the: [unmanaged package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000DwlZ). 
3. Keep the default settings and click `Install`.

#Step 2 - Browse SLDS.app (Sample App)
SLDS app is a sample app that contains a list of all the SDSX components and source code for each one of them. The examples are identical to what you'll find in the [Salesforce Lightning Design System's (SLDS)](http://salesforce-design-system.herokuapp.com) website.

1. Open SLDS.app by changing the url to: [{yourOrg}//sdsx/SLDS.app](https://login.salesforce.com/sdsx/SLDS.app)
2. Scroll down or Click on `Buttons`, `Grid System` etc to understand how the SDSX code look for various elements.

<image src="https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/slds-app-small.png?token=AAmOoUKiDyKUoD3GGVHOFaCoqGVEKXu8ks5Vv6HUwA%3D%3D"/>

#Step 3 - Browse SDSX Docs
Lightning auto-generates documentation for all components based on the source code. Since you installed the SDSX components package, you'll be able to browse the docs for SDSX components along with all other components! 

1. Open `{yourOrg}/auradocs/reference.app`
2. Click on `Components > SDSX` to see all the components in `SDSX` namespace. 


<image src="https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/auraDocsPic.png?token=AAmOodKb9rVMTRPyycVSGSWLnTEA7iqZks5Vw7STwA%3D%3D"/>

#Step 4 - Loading SLDS Framework
`SLDS.app` itself uses a lot of SDSX components, so you can simply see the source code to get an idea about how you can use various SDSX components.

1. Click on {Your Name} > Developer Console (on the top-right)
2. In Developer Console, Click on `File > Open Lightning Components`
3. Find `SLDS.app`in the dialog
4. Scroll through the source.

Notice that the code loads SLDS as a static resource and also uses `slds` div parent element to CSS namespace the component so that CSS doesn't bleed into other components. This is how you load SLDS framework into your Lightning app or component.  
<image src="https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/sldsNSPic.png?token=AAmOocILl68XPbdGeJZF5VtPloyzg1EEks5Vw7TuwA%3D%3D"/>

Note: You don't need to load it in every component, you just need to load it in the main component or app that has all other components.

#Step 5 - Build A Hello World Lightning App
1. In Developer Console, Click on `New > Lightning Application`
2. Enter `HelloSDSX` and press `Submit`
3. Add the following under `<Application>` tag to load SLDS framework and add a button.
	```    
	<ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>
	<div class="slds">
      <sdsx:button type="neutral">Button</sdsx:button>
    </div>

	```
4. Press `Preview` and you'll see:

	![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/buttonPic.png?token=AAmOoSrUeJXezRvpCdsPwl6aYCd_jhXVks5Vw7VCwA%3D%3D)


##Step 5.1 - Change An Attribute
Every SDSX components has multiple attributes that can have various values. Component look and feel changes based on attribute values. 

1. Let's change our button's `type` attribute to `brand`.
	```
	<sdsx:button type="brand">Button</sdsx:button>
	```

4. Press 'Preview` and you'll see:

	![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/buttonBrandPic.png?token=AAmOodeZEuoLBMgroITMhykc5eP7GRw9ks5Vw7VNwA%3D%3D)

Note: You can use  AuraDocs app (Step 3) to see list of attributes and possible values for each attribute for a given component.



##Step 5.2 - Add A JS Controller
Every SDSX component has a `press` attribute that allows us to add interact with press(button click) event in JavaScript controller. 

1. Add a `press="{!c.myButtonHandler}"` to our button. 
	```
	<sdsx:button press="{!c.myButtonHandler}" type="brand">Button</sdsx:button>
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


#Step 6 - Build An App That's Responsive
An App is said to be responsive if it can adapt and display its contents irrespective of the screen size (i.e. viewed from a mobile, tablet or a laptop). Since the screens on the mobile devices are literally smaller than screens in laptops and large monitors, the app needs to automatically show or hide or rearrange the content depending on the screen size. To figure out how much data to show can be tricky and that's where the `Grid System` comes in handy.

## Grid System

####Sizes
Grid system helps arrange the content in grids of 1 cell (container) upto 12 cells in a given row. You can specify how many cells you want in a row using `{cellSize}-of-{totalContainers}` format. 
For example: 
If you want just 1 cell to occupy entire space, simply use: `1-of-1`.

```
<sdsx:grid  wrap="true">
 <sdsx:col size="1-of-1">1-of-1</sdsx:col>
</sdsx:grid>
 ```
 
If you want just 1 cell to occupy 1/12 the space, simply use: `1-of-12`. This allows you to have 12 such cells in a single row.

```
<sdsx:grid  wrap="true">
      <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
            <sdsx:col size="1-of-12">1-of-12</sdsx:col>
</sdsx:grid>

```

![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/gridSystemPic.png?token=AAmOoYYd25le7hvQNsgV7-qLrxIVzlxmks5VyAMawA%3D%3D)
	

Note: Notice we are also using `wrap=true` attribute. This tells the Grid System to wrap and move the cell to the next row below if there are more cells than it can fit.

![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/wrapPic.png?token=AAmOoQ_t-CEn_0eG_F71LUQHCLOgNQDOks5VyAK3wA%3D%3D)
	
#### Multiple Sizes For Various Screensizes
In most apps you want to show different number of items depending on the screensize. 

For example, if viewed from a mobile device you may want to show just one cell/item per row, but if viewed from a medium size screen like a tablet, you may want to show 6 cells/items in a single row. And finally if viewed from a large screen, you may want to show 12 cells/items in a single row.
In Large Screen (e.g. laptops):
![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/largeScreenPic.png?token=AAmOod5OPF2KCfe_XhFFXOFBxV0tinm8ks5VyANKwA%3D%3D)

In Medium Screen (e.g. tablets):
		![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/mdScreenPic.png?token=AAmOocA-UBP9st0rI2m2sFLq8dNT7BwBks5VyANrwA%3D%3D)

In Small Screens (e.g. mobile phones): 		
![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/smScreenPic.png?token=AAmOoaXkZJm2Ops8ZaKJWPUeqPVHkooTks5VyAPiwA%3D%3D)

Thankfully, Grid System offers small, medium and large size attributes that can be used in this situation.
In SDSX components, they correspond to "size", "mdSize" and "lgSize" respectively.

1. Copy paste the below code into HelloSDSX.app under "slds" div (You can remove the button if you want)
2. Click preview.
3. Make your browser full screen and notice, you'll see 12 items in a single row
4. Squeeze the browser's width (not the height), you'll see that at certain point,it starts to show only 6 items per row and show the remaining 6 items in the 2nd row.
5. Squeeze the browser's width (not the height) all the way to the smallest width. You'll see just 1 item per row and the remaining 11 items are displayed in different rows below.

```
<sdsx:grid  wrap="true">
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
      <sdsx:col size="1-of-1" mdSize="1-of-6" lgSize="1-of-12">1-of-12</sdsx:col>
</sdsx:grid>

```

#Step 7 - Using SLDS Directly In Lightning Components
In this example, we will build a simple Accounts app that shows list of accounts in a table.
We'll use raw CSS instead of SDSX components just to show that you can use it directly as well. 

![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/accountsAppPic.png?token=AAmOoSz6452ZSIiTdPkVMsouxEIrJmFJks5VyDpNwA%3D%3D)

#### Create Accounts Apex Controller
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

#### Create AccountList Component

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
	         <td>{!account.BillingStreet }<br/> {!account.BillingCity + ', '} {!account.BillingState } <br/> {!account.BillingPostalCode}</td>
	       </tr>
	     </aura:iteration>
	   </tbody>
	 </table>
	</aura:component>
	```
4. Save it.

#### Create JS Controller
1. While in AccountList component, click on the `Controller` menu in the right-side panel.
2. Copy paste the below code:
	
	```
	({
		 doInit : function(component, event, helper) {      
			//Fetch the expense list from the Apex controller   
	        helper.getAccountList(component);
	    }
	})
	```
3. Save it

#### Create JS Helper

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

#### Update Hello SDSX.app
1. Open `HelloSDSX.app`
2. Copy-paste the code below:
	
	```
<aura:application >
    <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>    
    <div class="slds">
        <br/>
        <sdsx:grid>     
            <sdsx:col>
                <sdsx:AccountList />
            </sdsx:col>    
        </sdsx:grid>   
    </div>
</aura:application>
	
	```
3. Save it.

