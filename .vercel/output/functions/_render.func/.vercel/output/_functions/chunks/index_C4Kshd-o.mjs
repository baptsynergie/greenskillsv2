import { a as app } from './server_aVg9vIiD.mjs';
import { getFirestore } from 'firebase-admin/firestore';

const POST = async ({ request, redirect }) => {
  const body = await request.json();
  const email = body.email;
  if (!email) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  try {
    const db = getFirestore(app);
    const contactRef = db.collection("contact");
    await contactRef.add({
      email
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return new Response(JSON.stringify({ message: "Merci ! La plaquette est disponible dans un nouvel onglet ⚡" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { POST };
