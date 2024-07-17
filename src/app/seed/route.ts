import { db } from '@vercel/postgres';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      fullname VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  
}

async function seedInvoices() {
  await client.sql`
    DROP TABLE invoices;
  `;

}

async function seedCustomers() {
  await client.sql`
    DROP TABLE customers;
  `;
}

async function seedRevenue() {
  await client.sql`
    DROP TABLE revenue;
  `;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
