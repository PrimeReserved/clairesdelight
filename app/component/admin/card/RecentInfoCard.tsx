import { Card } from "@tremor/react";
import Image from "next/image";

export default function RecentInfoCard() {
  return (
    <Card
    className=""
      decoration="top"
      decorationColor="indigo">
      <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image
         src={`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"`}
         alt={`Movie`}
         height={50}
         width={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div> */}
      </div>
    </div>
    </Card>
  );
}
