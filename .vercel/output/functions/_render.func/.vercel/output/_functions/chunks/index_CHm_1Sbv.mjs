import { a as app } from './server_aVg9vIiD.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import 'firebase/database';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  console.log(formData);
  const companyName = formData.get("companyName")?.toString();
  const firstName = formData.get("firstnameCompany")?.toString();
  const email = formData.get("emailCompany")?.toString();
  const phone = formData.get("phoneCompany")?.toString();
  const zipCode = formData.get("zipCode")?.toString();
  const getBackInTouch = formData.get("getBackInTouch")?.toString();
  const lastname = formData.get("lastnameCompany")?.toString();
  const offers = formData.get("offers");
  console.log(firstName, lastname);
  if (!firstName || !lastname || !companyName || !email || !phone || !zipCode) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  try {
    const db = getFirestore(app);
    const companyRegister = db.collection("companyRegister");
    await companyRegister.add({
      companyName,
      email,
      firstname: firstName,
      getBackInTouch,
      lastname,
      offers,
      phone,
      zipCode
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
