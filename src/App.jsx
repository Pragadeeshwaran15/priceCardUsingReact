import React from 'react'
import Card from './component/Card'

function App() {
  let Data=[   
    {
      title:"FREE",
      
      price:"$0",
      isPrice:true,
      user:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      projectType:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isCommunityAccess:true,
      projectLimite:"Unlimited Private Projects",
      isPrivateProjects:false,
      support:"Dedicated Phone Support",
      isPhoneSupport:false,
      Domain:"Free Subdomain",
      isSubDomain:false,
      status:"Monthly Status Reports",
      isReports:false
    }
    ,{
      title:"PLUS",
      price:"$9",
      isPrice:true,
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      projectType:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isCommunityAccess:true,
      projectLimite:"Unlimited Private Projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isPhoneSupport:true,
      Domain:"Free Subdomain",
      isSubDomain:true,
      status:"Monthly Status Reports",
      isReports:false
    }
    ,{
      title:"PRO",
      price:"$49",
      isPrice:true,
      user:"Unlimited User",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      projectType:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isCommunityAccess:true,
      projectLimite:"Unlimited Private Projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isPhoneSupport:true,
      Domain:"Free Subdomain",
      isSubDomain:true,
      status:"Monthly Status Reports",
      isReports:true
    }]

  return <>
  {/* <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}

<section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      {Data.map((e,i)=>{
        return <Card cardData={e} key={i}/>  // here key is used to separate the each DOM
      })}
    </div>
  </div>
</section>
  </>
}

export default App
