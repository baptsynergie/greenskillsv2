import { a as app } from './server_aVg9vIiD.mjs';
import { getFirestore } from 'firebase-admin/firestore';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const lastName = formData.get("lastname")?.toString();
  const firstName = formData.get("firstname")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const city = formData.get("city")?.toString();
  const position = formData.get("position")?.toString();
  const study = formData.get("study")?.toString();
  const howHearAboutUs = formData.get("howHearAboutUs")?.toString();
  const isOptin = formData.get("isOptin");
  if (!firstName || !lastName || !email || !phone || !city) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  try {
    const db = getFirestore(app);
    const talentRef = db.collection("talentRegister");
    await talentRef.add({
      email,
      firstname: firstName,
      lastname: lastName,
      phone,
      city,
      position,
      study,
      howHearAboutUs,
      isOptin
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/thank-you");
};

export { POST };
