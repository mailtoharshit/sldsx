<image src="https://login.salesforce.com/img/logo190.png"/>


#SDSX - SDS For Lightning Components
SDSX is an open-source project to provide a set of common Lightning Components that conform and wrap [Salesforce Design System's (SDS)](http://salesforce-design-system.herokuapp.com) CSS framework. This is to help you not worry about SDS specific CSS and markup for basic components. And also to provide JS support so you don't have to implement them.

Note: All sdsx components use `sdsx` namespace.

#Installation
SDSX is distributed as an unmanaged package. The package has all the components, and latest version of SDS framework (CSS, fonts, icons etc). To use it, simply install the package, load SDS static resource and use individual components in your app.

1. Install this [unmanaged package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000Dvec). 
2. Load SDS static resource

	 ```    
	 <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-design-system-sds.css"/>
	  ```
3. Use the component

```
<sdsx:button press="{!c.handlePress}" type="bare" iconCategory="utility" iconName="close" iconType="bare" iconSize="small"/>

```

#Usage
Once you install the unmanaged package, you can go to `{yourOrg}//sdsx/sdsTest.app` to see a kitchen sink Lightning application that shows how to use all the components.

#Distribution
If you are distributing a component that's built using SDSX, then need to package your component and SDSX. This is to ensure that your component uses proper version of SDS.

#Contribution
You can fork this repo and contribute newer SDSX components or bug fixes. When you submit a new component, make sure it is in metadata/aura folder `metadata/aura/{yourcomponent}` 
In addition also provide an example usage of your component by editing `{yourOrg}//sdsx/sdsTest.app` and adding your component at the bottom of the app.

#License
Please see the details in the `LICENSE` file above.



#Support
This project is built as a 'labs' project and while a small team within Salesforce will try to maintain it, it is so not officially supported.
