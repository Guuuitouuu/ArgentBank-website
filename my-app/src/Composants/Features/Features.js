import React from "react"
import "./Features.css"
import iconsecurity from "../../assets/img/icon-security.webp"
import iconmoney from "../../assets/img/icon-money.webp"
import iconchat from "../../assets/img/icon-chat.webp"
import FeaturesComp from "../FeaturesComp/FeaturesComp"

function Features() {
    return(
        <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeaturesComp title="You are our #1 priority" paragraph="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes." imgsrc={iconchat}/>
        <FeaturesComp title="More savings means higher rates" imgsrc={iconmoney} paragraph="The more you save with us, the higher your interest rate will be!"/>
        <FeaturesComp title="Security you can trust" imgsrc={iconsecurity} paragraph="We use top of the line encryption to make sure your data and money
            is always safe."/>
      </section>
    )
}

export default Features