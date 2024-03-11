const element = (
  <div className='bg-container'>
    <h1>Congratulations</h1>
    <div className='card-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='img-logo'
      />
      <h1 className='heading'>Lokesh BN</h1>
      <p className='paragraph'>
        Dhanekula Institute of Engineering and Technology
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='img-logo'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
