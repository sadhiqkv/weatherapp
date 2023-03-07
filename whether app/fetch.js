async function getdata(){
    const api="https://jsonplaceholder.typicode.com/posts"
    const response=await fetch(api);
    const data=await response.json();
    console.log(data)
}
getdata();