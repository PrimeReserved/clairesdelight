import Loading from "@/app/loading";
import { Fragment, Suspense } from "react";
import Image from "next/image";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Link from "next/link";
import Title from "@/app/component/typography/Title";
import Paragraph from "@/app/component/typography/Paragraph";
import Button from "@/app/component/button/Button";
import { getSpice } from "@/lib/data";
import SpiceDetailCard from "@/app/component/Spice/SpiceDetailCard";



export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const spice = await getSpice(slug);

  if (!spice) {
    return {
      name: "Spice Not Found",
      description: "The spice you are looking for does not exist.",
    };
  }
  return {
    name: spice.name,
    description: spice.description,
  };
};

export default async function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const { slug } = params;

  let spice;
  try {
    spice = await getSpice(slug);
  } catch (error) {
    console.error(error);
    return (
      <Fragment>
        <h1>Error Loading Spice</h1>
        <p>
          There was an error loading the spice data. Please try again later.
        </p>
      </Fragment>
    );
  }

  if (!spice) {
    return (
      <Fragment>
        <h1>Spice Not Found</h1>
        <p>The spice you are looking for does not exist.</p>
      </Fragment>
    );
  }

  return (
    <BodyWrapper>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/shop-spices">Shop Spices</Link>
          </li>
          <li>All Spices</li>
          <li>{spice.name}</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <SpiceDetailCard item={spice} />
      </div>
    </BodyWrapper>
  );
}
