import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const lastName = formData.get("lastname")?.toString();
    const firstName = formData.get("firstname")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const postCode = formData.get("postCode")?.toString();
    const birthDay = formData.get("birthDay")?.toString();
    const isOptin = formData.get("isOptin");

    const now = new Date();
    
    if (!firstName || !lastName || !email || !phone || !postCode || !birthDay) {
      return new Response("Missing required fields", {
        status: 400,
      });
    }
    try {
      const db = getFirestore(app);
      const talentRef = db.collection("talentRegister");
      await talentRef.add({
        email,
        firstname: firstName,
        lastname: lastName,
        phone: phone,
        postCode: postCode,
          birthDay : birthDay,
          createdAt: now,
        isOptin: isOptin,
      });
    } catch (error) {
        console.log(error)
      return new Response("Something went wrong", {
        status: 500,
      });
    }
    return redirect("/thank-you");
  };