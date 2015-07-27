<aura:application >
  <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>
  <div class="slds">
    <sdsx:container size="large" align="center">
      <sdsx:container class="demo-container" size="large" align="center">
        <h2 class="slds-text-heading--large slds-m-bottom--small"><span>Tabs: Base</span></h2>
        <sdsx:tabs >
          <sdsx:tab title="Item One">
            Item One Content
          </sdsx:tab>
          <sdsx:tab title="Item Two">
            Item Two Content
          </sdsx:tab>
          <sdsx:tab title="Item Three">
            Item Three Content
          </sdsx:tab>
        </sdsx:tabs>
      	<br/>
    	<br/>  
    	Code:
    	<sdsx:code >
         &lt;sdsx:tabs&gt;
          &lt;sdsx:tab title=&quot;Item One&quot;&gt;
            Item One Content
          &lt;/sdsx:tab&gt;
          &lt;sdsx:tab title=&quot;Item Two&quot;&gt;
            Item Two Content
          &lt;/sdsx:tab&gt;
          &lt;sdsx:tab title=&quot;Item Three&quot;&gt;
            Item Three Content
          &lt;/sdsx:tab&gt;
        &lt;/sdsx:tabs&gt; 
        </sdsx:code>
      </sdsx:container>
      <sdsx:container class="demo-container" size="large" align="center">
        <h2 class="slds-text-heading--medium slds-m-bottom--large">Tabs: Scoped</h2>
        <sdsx:tabs type="scoped">
          <sdsx:tab title="Item One">
            Item One Content
          </sdsx:tab>
          <sdsx:tab title="Item Two">
            Item Two Content
          </sdsx:tab>
          <sdsx:tab title="Item Three">
            Item Three Content
          </sdsx:tab>
        </sdsx:tabs>
      	<br/>
    	<br/>  
    	Code:
    	<sdsx:code >
         &lt;sdsx:tabs type=&quot;scoped&quot;&gt;
          &lt;sdsx:tab title=&quot;Item One&quot;&gt;
            Item One Content
          &lt;/sdsx:tab&gt;
          &lt;sdsx:tab title=&quot;Item Two&quot;&gt;
            Item Two Content
          &lt;/sdsx:tab&gt;
          &lt;sdsx:tab title=&quot;Item Three&quot;&gt;
            Item Three Content
          &lt;/sdsx:tab&gt;
        &lt;/sdsx:tabs&gt; 
        </sdsx:code>
      </sdsx:container>
    </sdsx:container>
  </div>
</aura:application>