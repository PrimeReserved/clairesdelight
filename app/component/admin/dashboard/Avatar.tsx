import Image from "next/image";

export default function Avatar(){

    return (
        <div className="avatar">
            <div className="">
              <p>Admin</p>
              <p>Samuel</p>
            </div>
            <div className="w-12 rounded-full ring ring-orange ring-offset-base-100 ring-offset-2">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width={30}
                height={30}
                alt="user"
              />
            </div>
          </div>
    );
}