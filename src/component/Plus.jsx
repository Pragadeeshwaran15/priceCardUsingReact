import React from 'react'

function Plus(props) {
  return <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.cardData2.title}</h5>
      <h6 className="card-price text-center">{props.cardData2.price[0]}<span className="period">{props.cardData2.price[1]}</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData2.user}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData2.storage}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData2.projectType}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData2.access}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData2.projectLimite}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData2.support}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData2.Domain}</li>
        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData2.status}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Plus
