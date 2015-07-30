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
3. Click `Next` and `Next` until it's done installing.

#Step 2 - Check Out SLDS.app (Sample App)
SLDS app is a sample app that contains a list of all the SDSX components and source code for each one of them. The examples are identical to what you'll find in the [Salesforce Lightning Design System's (SLDS)](http://salesforce-design-system.herokuapp.com) website.

1. Open SLDS.app by changing the url to: [{yourOrg}//sdsx/SLDS.app](https://login.salesforce.com/sdsx/SLDS.app)
2. Scroll down or Click on `Buttons`, `Grid System` etc to understand how the SDSX code look for various elements.

<image src="https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/slds-app-small.png?token=AAmOoUKiDyKUoD3GGVHOFaCoqGVEKXu8ks5Vv6HUwA%3D%3D"/>

#Step 3 - Check Out SDSX Documentation
Lightning auto-generates documentation based on the source code. Since you installed the SDSX components package, you'll be able to browse the docs along with all other components! 
1. Open `{yourOrg}/auradocs/reference.app`
2. Click on `Components > SDSX` to see all the components in `SDSX` namespace. 


<image src="https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/auraDocsPic.png?token=AAmOoUKiDyKUoD3GGVHOFaCoqGVEKXu8ks5Vv6HUwA%3D%3D"/>

#Step 4 - Loading SLDS Into Lightning Components
`SLDS.app` itself uses a lot of SDSX components, so you can simply see the source code to get an idea about how you can use various SDSX components.
1. Click on {Your Name} > Developer Console (on the top-right)
2. In Developer Console, Click on `File > Open Lightning Components`
3. Find `SLDS.app`in the dialog
4. Scroll through the source.

Notice that the code loads SLDS as a static resource and also uses `slds` div parent element to CSS namespace the component so that CSS doesn't bleed into other components. This is how you load SLDS framework into your Lightning app or component.  
<image src="https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/sldsNSPic.png?token=AAmOoUKiDyKUoD3GGVHOFaCoqGVEKXu8ks5Vv6HUwA%3D%3D"/>

Note: You don't need to load it in every component, you just need to load it in the main component or app that has all other components.

#Step 5 - Build A Hello World Lightning App
1. In Developer Console, Click on `New > Lightning Application`
2. Enter `HelloSDSX` and press `Submit`
3. Add the following under `<Application>` tag to load SLDS framework and add a button.
	```    
	  <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>
	  <div class="slds">
       <sdsx:button press="{!c.myButtonHandler}" type="neutral">Button</sdsx:button>
    </div>

	```

4. Press 'Preview` and you'll see:
![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/buttonPic.png?token=AAmOoUKiDyKUoD3GGVHOFaCoqGVEKXu8ks5Vv6HUwA%3D%3D)


#Step 6 - Change An Attribute
Every SDSX components has multiple attributes that can have various values. Component look and feel changes based on attribute values. 

1. Let's change our button's `type` attribute to `brand`.
	```
	<sdsx:button press="{!c.myButtonHandler}" type="brand">Button</sdsx:button>
	```

4. Press 'Preview` and you'll see:
![image](https://raw.githubusercontent.com/ForceDotComLabs/sdsx/master/tutorial/buttonBrandPic.png?token=AAmOoUKiDyKUoD3GGVHOFaCoqGVEKXu8ks5Vv6HUwA%3D%3D)

Note: You can use  AuraDocs app (Step 3) to see list of attributes and possible values for each attribute for a given component.



#Step 7 - Add A JS Controller
Every SDSX component has a `press` attribute that allows us to add a JavaScript controller. In our button, we already have that attribute `press="{!c.myButtonHandler}" ` but it doesn't do anything.
1. In Developer Console, click on `Controller` button on the rightside pane.
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

