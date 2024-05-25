import { logout } from "@/lib/data";

export default function Logout() {

    return (
         <button onClick={logout} className="btn btn-outline-primary">logout</button>
    );
}