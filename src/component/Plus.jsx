import React from 'react'

function Plus(props) {
  return <div class="col-lg-4">
  <div class="card mb-5 mb-lg-0">
    <div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">{props.cardData2.title}</h5>
      <h6 class="card-price text-center">{props.cardData2.price[0]}<span class="period">{props.cardData2.price[1]}</span></h6>
      <hr/>
      <ul class="fa-ul">
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData2.user}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData2.storage}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData2.projectType}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData2.access}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData2.projectLimite}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData2.support}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-check"></i></span>{props.cardData2.Domain}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.cardData2.status}</li>
      </ul>
      <div class="d-grid">
        <a href="#" class="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Plus
