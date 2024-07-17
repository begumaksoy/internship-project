"use server";
import { v4 as uuidv4 } from 'uuid';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';


interface User{
    id: string;
    email: string;
    fullname: string;
    username: string;
    password: string;
}

export async function saveUser(data: FormData) {
    let user = {email : data.get("email"), fullname: data.get("fullname"), username: data.get("username"), password: data.get("password")} as User;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    let status = sql`
      INSERT INTO users (fullname,username ,email, password)
      VALUES (${user.fullname},${user.username}, ${user.email}, ${hashedPassword})
      ON CONFLICT  (id) DO NOTHING;
    `;
    console.log(status);
    
}