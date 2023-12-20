import React from 'react'

function Pro(props) {
  return <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.cardData3.title}</h5>
      <h6 className="card-price text-center">{props.cardData3.price[0]}<span className="period">{props.cardData3.price[1]}</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData3.user}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData3.storage}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData3.projectType}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData3.access}</li>
        <li ><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData3.projectLimite}</li>
        <li ><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData3.support}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData3.Domain}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData3.status}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Pro
