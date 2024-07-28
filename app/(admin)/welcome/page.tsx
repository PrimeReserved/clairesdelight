import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="mx-auto flex justify-center items-end">
      <Card>
        <CardHeader>
          <CardTitle>Hooray!! Now Let&lsquo;`s get to business</CardTitle>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, nam,
          earum magnam placeat iste voluptates minus tenetur ea eligendi
          ratione, nobis officiis laboriosam pariatur? Molestias quam numquam
          autem deserunt libero.
        </CardContent>
        <CardDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          illum? Porro dignissimos praesentium iure atque aperiam, dolorum
          ratione aliquam, dolorem veritatis sed commodi. Voluptatibus dolores
          laborum numquam eveniet! Illo, reiciendis!
        </CardDescription>
        <CardFooter>PrimeReserved</CardFooter>
      </Card>
    </div>
  );
}
