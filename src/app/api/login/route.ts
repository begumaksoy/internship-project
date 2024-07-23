import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { User } from "../../actions/user";
let pattern =
  /^([a-z]|[0-9]|(-|_)([a-z]|[0-9])+)+([a-z]|[0-9]|(-|_|.)([a-z]|[0-9])+)*(-|_)?@([a-z]|[0-9])+(.([a-z]|[0-9])+)*.[a-z]{2,}$/i;

export async function POST(request: NextRequest) {
  const user = (await request.json()) as Omit<
    User,
    "fullname" | "username" | "id"
  >;

  const { rows, fields } = await sql`
      SELECT email, password FROM users
      WHERE email= ${user.email};
    `;
  if (rows.length > 0) {
    console.log(rows[0]["password"]);
    const dbPassword = rows[0]["password"];
    const hashedPassword = await bcrypt.compare(user.password, dbPassword);
    console.log(hashedPassword);
    return Response.json({ message: "success" });
  }
  return Response.json({ message: "infos are not valid" }, { status: 400 });
}
