map();

filter();

reduce();

find();

includes();


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
        'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
})
.then(response => response.json())
.then(posts => console.log(posts));
.catch(error => console.log(error)); 

const myAsyncFunction = async () => {
  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await usersResponse.json();
  const SecondUser = users[1];
  console.log(SecondUser);
  const postsResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users' + SecondUser.id)
  const posts = await postsResponse.json();
  console.log(posts);
}


const myAsyncFunction = async () => {
    try{
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();
        const thirdUser = users[2];
        console.log(thirdUser);
        const postsResponse = await fetch(
            'https://jsonplaceholder.typicode.com/users' + thirdUser.id)
        const posts = await postsResponse.json();
        console.log(posts);
    } catch (err) {
        console.log('There was an error');
    }
    
  }

const myArray = [1,2,3,4,5,6]
myArray.find(el => el === 5)

const array = [1,2,3,4,5,6]
array.reduce((accumulator, currentElement) => accumulator + currentElement, 0)

