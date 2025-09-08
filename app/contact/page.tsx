import HeaderSection from "@/components/header-section";
import { Metadata } from "next";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact - Hunian",
};

const ContactPage = () => {
  return (
    <div>
      <HeaderSection
        title="Contact Us"
        subTitle="Hubungi kami untuk dapatkan info menarik dan terbaru"
      />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Get In Touch Today
            </h1>
            <p className="text-gray-700 py-5">
              ayo terhubung bersama kami di hunian, 
              kami akan memberikan
              pelayanan terbaik hebat dan masuk kesana dan kemarin dan jawa dan bekasi dan besok {" "}
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-200 p-3 shadow-sm rounded-md">
                  <IoMailOutline className="size-7 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Email :
                  </h4>
                  <p className="text-gray-700">email-us@example.com</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-200 p-3 shadow-sm rounded-md">
                  <IoCallOutline className="size-7 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Phone Number :
                  </h4>
                  <p className="text-gray-700">
                    +0812 2222 9999, +0828 9999 2222
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-200 p-3 shadow-sm rounded-md">
                  <IoLocationOutline className="size-7 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Address :
                  </h4>
                  <p className="text-gray-700">
                    gunung kidul jalan semaggi selatan sebelah bakso king
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/*Contact Form*/}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
