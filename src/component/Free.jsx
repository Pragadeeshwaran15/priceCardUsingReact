import React from 'react'

function Free(props) {
    console.log(props.cardData);
  return <div class="col-lg-4">
  <div class="card mb-5 mb-lg-0">
    <div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">{props.cardData.title}</h5>
      <h6 class="card-price text-center">{props.cardData.price[0]}<span class="period">{props.cardData.price[1]}</span></h6>
      <hr/>
      <ul class="fa-ul">
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData.user}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData.storage}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData.projectType}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData.access}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.cardData.projectLimite}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.cardData.support}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.cardData.Domain}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.cardData.status}</li>
      </ul>
      <div class="d-grid">
        <a href="#" class="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Free
