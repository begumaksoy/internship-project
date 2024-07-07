
interface User{
    email: string;
    fullname: string;
    username: string;
    password: string;
}

let userArray: User[] = [];

export async function saveUser(data: FormData) {
    "use server";
    let user = {email : data.get("email"), fullname: data.get("fullname"), username: data.get("username"), password: data.get("password")} as User;
    userArray.push(user);
    console.log(userArray);
}