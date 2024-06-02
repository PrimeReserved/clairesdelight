import Banner from "@/app/component/banner/Banner";
import Button from "@/app/component/button/Button";
import ContactCard from "@/app/component/contact/ContactCard";
import { contactInfo } from "@/app/component/contact/contactInfo";
import { contactBanner } from "@/public/image/cdn/cdn";



export default function Page() {

  return (
    <div>
      <Banner 
         image={contactBanner}
         title={`Contact Us`}
         subtitle={`Have a question or feeback? 
         Reach out to us! We're here to help,
         and eager to hear from you. Please fill the form below.`}
       />
      <div className="card shadow-lg w-96 h-96 rounded-xl mx-auto">
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {
              contactInfo.map((contact) => (
                <ContactCard key={contact.id} icon={contact.icon}>
                  {contact.info}
                </ContactCard>
              ))
            }
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <input className="input input-bordered max-w-xs" id="lastname" name="firstname" type="text" placeholder="First Name"/>
              <input className="input input-bordered max-w-xs" id="lastname" name="lastname" type="text" placeholder="Last Name"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <input className="input input-bordered max-w-xs" id="email" name="email" type="email" placeholder="Email Address"/>
              <input className="input input-bordered max-w-xs" id="contact" name="contact" type="text" placeholder="Phone Number"/>
            </div>
            <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
            <div className="flex justify-center items-center">
              <Button onSubmit={() => alert(`Form submitted`)} className="py-5" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}