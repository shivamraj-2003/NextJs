export function fetchUserData(userId: string) {
  const res=fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return res.then((response) => response.json());
}



export default async function UserPage({params,}: {params: Promise<{userId: string}>;
}) {
  const {userId} = await params;
  const userData = await fetchUserData(userId);

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {userId}</p>
      <p>User Name: {userData.name}</p>
      <p>User Email: {userData.email}
      </p>

    </div>
  );
}
