import React from "react";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import SpiceCard from "../Spice/SpiceCard";

function Spice() {
  return (
    <div className="mt-16">
      <Title>{"Our Spice Collection"} </Title>
      <Paragraph>
        {
          "Explore our diverse spice collection sourced from around the globe, each ingredient carefully chosen for its exceptional quality and distinctive taste"
        }
      </Paragraph>
      <SpiceCard />
    </div>
  );
}

export default Spice;
