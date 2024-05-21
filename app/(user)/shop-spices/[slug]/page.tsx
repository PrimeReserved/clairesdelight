import Loading from '@/app/loading';
import { Fragment, Suspense } from 'react';
import Image from "next/image";

const getSpice = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_ROUTE}/${id}`);
    if (!res.ok) {
      throw new Error(`Error getting single spice API data: ${res.status} ${res.statusText}`);
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

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug: id } = params;
  console.log(`Fetching spice with ID: ${id}`);
  const spice = await getSpice(id);

  if (!spice) {
    return {
      name: "Spice Not Found",
      description: "The spice you are looking for does not exist."
    };
  }
  return {
    name: spice.name,
    description: spice.description
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug: id } = params;
  console.log(`Fetching spice with ID: ${id}`);

  let spice;
  try {
    spice = await getSpice(id);
  } catch (error) {
    console.error(error);
    return (
      <Fragment>
        <h1>Error Loading Spice</h1>
        <p>There was an error loading the spice data. Please try again later.</p>
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
    <Fragment>
      <h1>Single Shop Spice</h1>
      <h2>{spice.name}</h2>
      <div className="spice-images">
        {spice.images.map((image: string, index: number) => (
          <Suspense key={index} fallback={<Loading />}>
            <Image
              src={image}
              alt={`${spice.name} image ${index + 1}`}
              width={100}
              height={100}
              loading="lazy"
            />
          </Suspense>
        ))}
      </div>
      <p>{spice.description}</p>
      <p>Category: {spice.category}</p>
      <p>Origin: {spice.origin}</p>
      <p>Price: ${spice.price}</p>
      <p>Stock: {spice.stock}</p>
      <p>Medicinal Properties: {spice.medicinalProperties.join(', ')}</p>
      <p>Culinary Uses: {spice.culinaryUses.join(', ')}</p>
    </Fragment>
  );
}
