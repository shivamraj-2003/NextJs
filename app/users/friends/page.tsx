async function makepostRequest() {
    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name: 'Alice', age: 30 })
    });
    const data = await res.json();
    console.log(data);
    return { data }; 
}     

export default async function FriendsPage() {
    const { data } = await makepostRequest();
    return (
        <div>
            <h1>Friends Page</h1>
            <h1>Hey friends,{data.greeting}</h1>
        </div>
    );
}   