<image src="https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/sflabs.png?token=AAmOoRHwmOYSLYk7FmSx_pBZfaG629e4ks5V3LsGwA%3D%3D"/>


#SLDS Sample Components
SLDS Sample Components is an open-source project to provide a set of common Lightning Components that conform and wrap [Salesforce Lightning Design System's (SLDS)](http://getslds.com) CSS framework. This is to help you not worry about SLDS specific CSS, markup for basic components. And also to provide JS support so you don't have to implement them.


Note: All components use `sldsx` namespace.

## Tutorial
We've created a tutorial to explain how to use it. Please go through the <a href="https://github.com/ForceDotComLabs/sldsx/blob/master/tutorial/tutorial.md" target="_blank">tutorial here</a>.
![image](https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/tutorial/accountsAppPic.png?token=AAmOocLC71enF48M39WloAY23uQRdstWks5V3MvDwA%3D%3D)

####Installation
This project is distributed as an unmanaged package. The package has all the components, and latest version of SLDS framework (CSS, fonts, icons etc). To use it, simply install the package, load SLDS static resource and use individual components in your app.

1. Install the [unmanaged package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB00000001Y7Z) (w/ SLDS v0.8). 
2. Load SLDS static resource

	```    
	<ltng:require styles="/resource/sldsx/assets/styles/salesforce-lightning-design-system-vf.css"/>

	```
	If your org has it's own namespace, for example: `ns` then, append `ns__` to the `sldsx` in the resource path to look like below:

	```    
	 <ltng:require styles="/resource/ns__sldsx/assets/styles/salesforce-lightning-design-system-vf.css"/>

	```	

3. Write SLDS component under `<div class="slds">` 

        <div class="slds">
                <sldsx:button press="{!c.handlePress}" type="bare" iconCategory="utility" iconName="close" iconType="bare" iconSize="small"/>
        </div>

Notes:
If your org already has some of the components

#### Reference App (SLDS.app)
SLDS app contains a list of all the SLDSX components and source code for each one of them. The examples are identical to what you'll find in the [Salesforce Lightning Design System's (SLDS)](http://www.getslds.com) website.

Usage: Once you install the unmanaged package, open [{yourOrg}//{namespace}/SLDS.app](https://login.salesforce.com/c/SLDS.app).

Note: All the components are in `metadata/aura/` folder.
<image src="https://raw.githubusercontent.com/ForceDotComLabs/sldsx/master/slds-app-small.png?token=AAmOoX_EdgYwpP90hsQsIUFJ6zzW3R2Yks5V3LQ_wA%3D%3D"/>



## Distribution
If you are distributing a component that's built using SLDSX, you need to package your component and SLDSX static resource. This is to ensure that your component uses proper version of SLDS.

## Contribution
You can fork this repo and contribute newer SLDSX components or bug fixes. When you submit a new component, make sure it is in `metadata/aura` folder `metadata/aura/{yourcomponent}` 
In addition also provide an example usage of your component by editing `{yourOrg}//sldsx/SLDS.app` and adding your component at the bottom of the app.

##License
Please see the details in the `LICENSE` file above.



## Support
This project is built as a 'labs' project and while a small team within Salesforce will try to maintain it, it is so not officially supported.
