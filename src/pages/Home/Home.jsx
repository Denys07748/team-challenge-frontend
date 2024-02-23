import MainSection from "./MainSection/MainSection";
import WhyHomewell from "./WhyHomewell/WhyHomewell";
import ShopBy from "./ShopBy/ShopBy"
import NewArrivals from "./NewArrivals/NewArrivals";
import ShopNow from "./ShopNow/ShopNow";
import CustomerRevies from "./CustomerRevies/CustomerRevies";

const Home = () => {
    return <>
        <MainSection />
        <WhyHomewell />
        <ShopBy />
        <NewArrivals/>
        <CustomerRevies/>
        <ShopNow />
    </>;
};

export default Home;
