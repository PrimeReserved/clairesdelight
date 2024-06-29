import BodyWrapper from "../layout/BodyWrapper";
import Paragraph from "../typography/Paragraph";
import Title from "../typography/Title";
import FutureService from "./our-service/FutureServices";
import ServiceCard from "./our-service/ServiceCard";
import ServiceContent from "./our-service/ServiceContent";
import { availableServices, futureServices } from "./our-service/data";

export default function Ourservice() {
  return (
    <BodyWrapper>
      <Title>{"Our Service"}</Title>
      <Paragraph>
        {
          "A spice business can offer a variety of services beyond just selling spices. Here's the gist."
        }
      </Paragraph>
      <div className="mt-5 flex items-center justify-center">
        <div className="m-10">
          <p className="p-3">
            <span className="font-bold">Sell spices:</span> This is the core,
            but focus on quality, origin (local, <br /> organic?), and variety (whole,
            ground, blends),
          </p>
          <p className="p-3">
            <span className="font-bold">Offer additional services:</span> Grinding, custom blends,<br />
            subscriptions, educational content (recipes, workshops), gift<br />
            baskets, wholesale options, or consulting.
          </p>
          <p className="p-3">
            <span className="font-bold">Stand out:</span> Consider a niche focus (regional cusine, unique<br />
            blends) or sustainability practices.
          </p>
          <p className="p-3">
            <span className="font-bold">Build a community:</span> Engage customers through online presence,<br />
            events, and forums.
          </p>
        </div>
        <div>
          <div>
            <h2 className="py-5 font-bold">Available Services</h2>
            <div className="flex gap-5">
              {/* card  */}
              {availableServices.map((service) => (
                <ServiceCard key={service.id} className="w-[18rem] h-[12rem]">
                  <ServiceContent
                    iconImage={service.image}
                    description={service.description}
                  />
                  <p className="text-center py-1">{service.content}</p>
                </ServiceCard>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="py-5 font-bold">Future Services</h2>
            <div className="flex gap-5 items-center">
              {futureServices.map((service) => (
                <ServiceCard className="md:w-[10rem] md:h-[8rem] xl:w-[11.5rem] xl:h-[10rem]" key={service.id}>
                  <FutureService className="flex flex-col items-center justify-center px-5 pt-5"
                    imageIcon={service.image}
                    text={service.text}
                  />
                </ServiceCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}
