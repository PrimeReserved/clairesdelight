"use client";

import Banner from "@/app/component/banner/Banner";
import Button from "@/app/component/button/Button";
import ContactCard from "@/app/component/contact/ContactCard";
import { contactInfo } from "@/app/component/contact/contactInfo";
import { contactBanner } from "@/public/image/cdn/cdn";
import Navbar from "@/app/component/header/navbar/Navbar";
import Footer from "@/app/component/footer/Footer";
import FooterMobile from "@/app/component/footer/FooterMobile";
import FooterTab from "@/app/component/footer/FooterTab";
import { addContact } from "@/lib/action";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <Banner
          image={contactBanner}
          title={`Contact Us`}
          subtitle={`Have a question or feedback? 
            Reach out to us! We're here to help,
            and eager to hear from you. Please fill the form below.`
          }
        />
        <div className="card shadow-2xl w-[60rem] h-[40rem] rounded-xl mx-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-20 bg-white z-10">
          <div className="p-20">
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 pb-10">
              {contactInfo.map((contact) => (
                <ContactCard key={contact.id} icon={contact.icon}>
                  {contact.info}
                </ContactCard>
              ))}
            </div>
            <form className="form-control" action={addContact}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3 w-full">
                <input
                  className="border-teritaryGrey focus:border-teritaryGrey rounded-md py-3"
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="border-teritaryGrey focus:border-teritaryGrey rounded-md py-3"
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3 w-full">
                <input
                  className="border-teritaryGrey focus:border-teritaryGrey rounded-md py-3"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="border-teritaryGrey focus:border-teritaryGrey rounded-md py-3"
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <textarea
                className="textarea border-teritaryGrey focus:border-teritaryGrey w-full h-40"
                placeholder="Message"
              ></textarea>
              <div className="flex justify-center items-center py-10">
                <Button
                  type={`submit`}
                  className="btn w-[150px] h-[50px] bg-orange hover:bg-green text-white"
                  text="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative top-[40rem]">
      <Footer />
      <FooterMobile />
      <FooterTab />
      </div>
    </div>
  );
}
