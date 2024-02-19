function FeaturesComp({title, paragraph, imgsrc}) {

    return (
        <div className="feature-item">
          <img src={imgsrc} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{paragraph}</p>
        </div>
    )
}

export default FeaturesComp