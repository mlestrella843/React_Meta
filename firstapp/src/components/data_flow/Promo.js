import Footer from "./Footer";
import PromoHeading from "./PromoHeading";
import Sidebar from "./Sidebar";

const data = {
    heading: "55% off all items",
    callToAction: "everything must go!"
}
function Promo(){
    return(
        <div>
            <PromoHeading 
            heading={data.heading}
            callToAction={data.callToAction}
            />
            <Sidebar
            heading={data.heading}
            callToAction={data.callToAction}
            />
            <Footer
            heading={data.heading}
            callToAction={data.callToAction}
            />
        </div>
    )
}
export default Promo;