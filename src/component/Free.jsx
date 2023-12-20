import React from 'react'

function Free(props) {
    console.log(props.cardData);
  return <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.title}</h5>
      <h6 className="card-price text-center">{props.cardData.price[0]}<span className="period">{props.cardData.price[1]}</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.user}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.storage}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.projectType}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.access}</li>
        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.projectLimite}</li>
        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.support}</li>
        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.Domain}</li>
        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.status}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Free
