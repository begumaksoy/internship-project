import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { User } from "../../actions/user";
let pattern =
  /^([a-z]|[0-9]|(-|_)([a-z]|[0-9])+)+([a-z]|[0-9]|(-|_|.)([a-z]|[0-9])+)*(-|_)?@([a-z]|[0-9])+(.([a-z]|[0-9])+)*.[a-z]{2,}$/i;
export async function GET() {
  return Response.json({ message: "hellp" });
}

export async function POST(request: NextRequest) {
  const user = (await request.json()) as User;
  let errors = [];
  if (user.password.length < 8) {
    errors.push("Password cannot be shorter than 8 characters");
  }
  if (!pattern.test(user.email)) {
    errors.push("Email is not valid");
  }
  if (user.username.length < 3 || user.username.length > 15) {
    errors.push("Username must be between 3 to 15 characters");
  }
  if (/\d/.test(user.fullname)) {
    errors.push("Fullname cannot contain digits");
  }
  if (user.fullname.length < 3) {
    errors.push("Fullname cannot be shorter than 3 characters");
  }
  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(user.password, 10);
  let status = sql`
      INSERT INTO users (fullname,username ,email, password)
      VALUES (${user.fullname},${user.username}, ${user.email}, ${hashedPassword})
      ON CONFLICT  (id) DO NOTHING;
    `;

  console.log(status);

  return Response.json({ message: status });
}
