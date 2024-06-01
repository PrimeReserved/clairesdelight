import Loading from "@/app/loading";
import { Fragment, Suspense } from "react";
import Image from "next/image";
import BodyWrapper from "@/app/component/layout/BodyWrapper";
import Link from "next/link";
import Title from "@/app/component/typography/Title";
import Paragraph from "@/app/component/typography/Paragraph";
import Button from "@/app/component/button/Button";

const getSpice = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PRODUCT_API_ROUTE}/${id}`
    );
    if (!res.ok) {
      throw new Error(
        `Error getting single spice API data: ${res.status} ${res.statusText}`
      );
    }
    console.log(`Get single spice api: ${res}`);
    const spice = await res.json();
    console.log(`Fetched spice: ${JSON.stringify(spice)}`);
    return spice;
  } catch (error) {
    console.error("Failed to fetch spice data:", error);
    return null;
  }
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug: id } = params;
  console.log(`Fetching spice with ID: ${id}`);
  const spice = await getSpice(id);

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
  const { slug: id } = params;

  let spice;
  try {
    spice = await getSpice(id);
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
        <Suspense fallback={<Loading />}>
          <Image
            src={spice.image}
            alt={spice.name}
            width={100}
            height={100}
            loading="lazy"
            />
        </Suspense>
      </div>
      <div>
        <Title>{spice.name}</Title>
        <h2>Rich Content:</h2>
        <Paragraph>{spice.description}</Paragraph>
        <div>
          <span>Price</span>
          <p>N{spice.price}</p>
        </div>
      </div>
      <span>Quality</span>
      <div className="flex justify-center">
        <div className="flex">
          <Button className="" text="-" />
            <div>{1}</div>
          <Button className="" text="+" />
        </div>
        <Button className="btn" text="Buy Now" />
        <Button className="btn" text="Add To Cart" />
      </div>
      <div className="flex">
        <div>
          <h3>Recipe Suggestion</h3>
          <p>{spice.origin}</p>
        </div>
        <div>
        <p>Medicinal Properties: {spice.medicinalProperties.join(", ")}</p>
        </div>
      </div>
      <p>Category: {spice.category}</p>
      <p>Origin: {spice.origin}</p>
      <p>Stock: {spice.stock}</p>
    </BodyWrapper>
  );
}
