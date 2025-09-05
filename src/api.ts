export interface Comment {
postId: number;
id: number;
name: string;
email: string;
body: string;
}


export interface User {
id: number;
name: string;
email: string;
phone: string;
}


export async function fetchComments(): Promise<Comment[]> {
const res = await fetch('https://jsonplaceholder.typicode.com/comments');
return res.json();
}


export async function fetchUsers(): Promise<User[]> {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
return res.json();
}