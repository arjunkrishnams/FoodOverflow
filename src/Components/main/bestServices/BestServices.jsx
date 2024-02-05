import './Styles.css'
import './ResponsiveService.css'
// import ServPic from '../../../assets/bloco_services.svg'
import ServPic from '../../assets/bloco_services.svg'

export const BestServices = () => {
    return (
        <section className="services"  id="about">
            <div className="servicesWrapper">
                <div className="leftServices">
                    <img src={ServPic} alt='txt' />

                </div>

                <div className="rigthServices">
                <h2>Effective Food Waste Management Solutions</h2>
                <p>Welcome to our dedicated services for efficient food waste management. Our mission is to address the pressing issue of food waste and contribute to a sustainable future.</p>
                <p>Imagine a world where food waste is minimized and resources are utilized wisely. Our commitment takes you far beyond the mountains, reaching Vakalia and Consanantia, where we strive to eliminate the bind of wasteful practices.</p>
                <p>At the heart of our efforts lies Bookmarksgrove, right on the coast of Semantics, resembling a vast language ocean. Here, we work towards the responsible disposal and reduction of food waste, creating a positive impact on both the environment and community.</p>
                <p>Just like the small river named Duden that flows by our place, supplying the necessary regelialia, we aim to be the lifeline in managing food waste. Join us in our journey towards a cleaner, greener world.</p>
                </div>
            </div>
        </section>
    )
}