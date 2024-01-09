import React from 'react'

function All({cards}) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {cards.map((ele,i)=>(
  <div className="col" key={i}>
    <div className="card" id="Card">
      <img src={ele.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{ele.title}</h5>
        <p className="card-text">{ele.content}</p>
      </div>
    </div>
  </div>
    ))}
</div>


  
  )
}

export default All