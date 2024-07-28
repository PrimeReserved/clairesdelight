import CartView from "@/app/component/cart/CartView";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";
import Navbar from "@/app/component/header/navbar/Navbar";


function page() {
  return (
    <div className="px-0">
      <Navbar />
      <CartView />
      <Footer />
      <FooterMobile />
      <FooterTab />
    </div>
  );
}

export default page;
