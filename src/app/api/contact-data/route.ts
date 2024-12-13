import { NextRequest, NextResponse } from 'next/server';
import mysqlConfiguration from '../../../../lib/mysql-configuration';


export async function POST(req: NextRequest) {
  const { first_name, last_name, email, contact_number, message } = await req.json();

  try {
    const query = `
      INSERT INTO contact (first_name, last_name, email, contact_number, message) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [first_name, last_name, email, contact_number, message];

    await mysqlConfiguration.execute(query, values);

    return NextResponse.json({ message: 'Contact sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error in contact sending' }, { status: 500 });
  }
}
