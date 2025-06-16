import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div className="container">
      <Hero/>
      <div className="border-top">
      <LeftSection
        imageURL="media/Images/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        AppStore=""
      />
     <RightSection
        imageURL="media/Images/varsity.png"
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/Images/coin.png"
        productName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        GooglePlay=""
        AppStore=""
      />
      <RightSection
        imageURL="media/Images/kiteconnect.png"
        productName="Kite Connect API"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/Images/varsity.png"
        productName="Varsity mobile"
        productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        AppStore=""
      />
      </div>
      <Universe />
    </div>
  );
}

export default ProductPage;
