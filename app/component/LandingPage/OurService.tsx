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
      <div className="grid grid-cols-2 p-10">
        <div className="m-10">
          <Paragraph>
            <span className="font bold">Sell spices:</span> This is the core,
            but focus on quality, origin (local, organic?), and variety (whole,
            ground, blends),
          </Paragraph>
          <Paragraph>
            <span className="font bold">Offer additional services:</span> This
            is the core, but focus on quality, origin (local, organic?), and
            variety (whole, ground, blends),
          </Paragraph>
          <Paragraph>
            <span className="font bold">Stand out:</span> This is the core, but
            focus on quality, origin (local, organic?), and variety (whole,
            ground, blends),
          </Paragraph>
          <Paragraph>
            <span className="font bold">Build a community:</span> This is the
            core, but focus on quality, origin (local, organic?), and variety
            (whole, ground, blends),
          </Paragraph>
        </div>
        <div>
          <div>
            <h2>Available Services</h2>
            <div className="md:grid grid-cols-1 md:grid-cols-2">
              {/* card  */}
              {availableServices.map((service) => (
                <ServiceCard key={service.id} className="w-3/4">
                  <ServiceContent
                    iconImage={service.image}
                    description={service.description}
                  />
                  <Paragraph>{service.content}</Paragraph>
                </ServiceCard>
              ))}
            </div>
          </div>
          <div className="">
            <h2>Available Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3">
              {futureServices.map((service) => (
                <ServiceCard key={service.id}>
                  <FutureService className="w-40"
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
