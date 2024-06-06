import Logout from "./Logout";

export const dynamic = 'force-dynamic';

const getUsers = async () => {
    const res = await fetch(`http://localhost:3000/api/users`);
    if(!res.ok){
        throw new Error("Error getting users api data")
      }
      return res.json();
} 

export default async function Page() {

    const users = await getUsers();

    return (
      <div>

        <h1 className="text-4xl">Dashboard</h1>
        <div>
            <h2>Existing Users</h2>
            { users.map((user: any) => (
                <div key={user._id}>
                    <p>{user.username}</p>{" - "}
                    <p>{user._id}</p>
                </div>
            ))}
        </div>
<Logout />
        
      </div>
    )
  }