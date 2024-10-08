import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
   
  const body = await request.json();

  const email = body.email;

  const now = new Date();

  if (!email) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  try {

    const db = getFirestore(app);
    const newsletter = db.collection("newsletter");

    await newsletter.add({
      email: email,
      createdAt : now.toLocaleDateString("fr"),

    });

  } catch (error) {
      console.log(error)
      return new Response("Something went wrong", {
        status: 500,
      });
  }

  return new Response(JSON.stringify({ message: "Merci ! Votre inscription a bien été confirmée ⚡" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });

};