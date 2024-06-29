"use client"


import Banner from "@/app/component/banner/Banner";
import Button from "@/app/component/button/Button";
import ContactCard from "@/app/component/contact/ContactCard";
import { contactInfo } from "@/app/component/contact/contactInfo";
import { contactBanner } from "@/public/image/cdn/cdn";
import Navbar from "@/app/component/header/navbar/Navbar";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";


export default function Page() {

  return (
    <div>
      <Navbar />
      <Banner 
         image={contactBanner}
         title={`Contact Us`}
         subtitle={`Have a question or feeback? 
         Reach out to us! We're here to help,
         and eager to hear from you. Please fill the form below.`}
       />
      <div className="card shadow-2xl w-[60rem] h-[40rem] rounded-xl mx-auto">
        <div className="p-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 pb-10">
            {
              contactInfo.map((contact) => (
                <ContactCard key={contact.id} icon={contact.icon}>
                  {contact.info}
                </ContactCard>
              ))
            }
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3 w-full">
              <input className="input input-bordered input-primaryGrey" id="lastname" name="firstname" type="text" placeholder="First Name"/>
              <input className="input input-bordered input-primaryGrey" id="lastname" name="lastname" type="text" placeholder="Last Name"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3 w-full">
              <input className="input input-bordered input-primaryGrey" id="email" name="email" type="email" placeholder="Email Address"/>
              <input className="input input-bordered input-primaryGrey" id="contact" name="contact" type="text" placeholder="Phone Number"/>
            </div>
            <textarea className="textarea textarea-bordered textarea-primaryGrey w-full h-40" placeholder="Message"></textarea>
            <div className="flex justify-center items-center py-10">
              <Button onClick={() => alert(`Form submitted`)} className="btn w-[150px] h-[50px] bg-orange hover:bg-green text-white" text="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <FooterMobile />
      <FooterTab />
    </div>
  );
}