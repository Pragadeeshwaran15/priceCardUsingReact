import React from 'react'
import Free from './component/Free'
import Plus from './component/Plus'
import Pro from './component/Pro'

function App() {
  let freeData=   {
      title:"Free",
      price:["$0","/month"],
      user:"Single User",
      storage:"5GB Storage",
      projectType:"Unlimited Public Projects",
      access:"Community Access",
      projectLimite:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      Domain:"Free Subdomain",
      status:"Monthly Status Reports"
    }
    let plusData={
      title:"Plus",
      price:["$9","/month"],
      user:"5 Users",
      storage:"50GB Storage",
      projectType:"Unlimited Public Projects",
      access:"Community Access",
      projectLimite:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      Domain:"Free Subdomain",
      status:"Monthly Status Reports"
    }
    let prodata={
      title:"Pro",
      price:["$49","/month"],
      user:"Unlimited Users",
      storage:"150GB Storage",
      projectType:"Unlimited Public Projects",
      access:"Community Access",
      projectLimite:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      Domain:["Unlimited","Free Subdomain"],
      status:"Monthly Status Reports"
    }

  return <>
  {/* <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}

<section class="pricing py-5">
  <div class="container">
    <div class="row">
      {/* <!-- Free Tier --> */}
       <Free cardData={freeData}/>
        
      
      {/* <!-- Plus Tier --> */}
      <Plus cardData2={plusData}/>
      
      {/* <!-- Pro Tier --> */}
      <Pro cardData3={prodata}/>
    </div>
  </div>
</section>
  </>
}

export default App
