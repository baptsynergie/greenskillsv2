import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";
import type { APIRoute } from "astro";
import * as XLSX from "xlsx";

export const GET: APIRoute = async ({ request }) => {
    const db = getFirestore(app);
    const newsletterRef = db.collection("newsletter");
    const newsletterSnapshot = await newsletterRef.get();

    const talents = newsletterSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    // Création d'un nouveau workbook et d'une feuille de calcul
    const worksheet = XLSX.utils.json_to_sheet(talents); // Conversion des données JSON en une feuille de calcul
    const workbook = XLSX.utils.book_new(); // Création d'un nouveau classeur
    XLSX.utils.book_append_sheet(workbook, worksheet, "Newsletter"); // Ajout de la feuille au classeur

    // Conversion du workbook en un buffer pour l'export
    const excelBuffer = XLSX.write(workbook, { type: "buffer", bookType: "xls" });

    // Réponse avec le fichier Excel
    return new Response(excelBuffer, {
        status: 200,
        headers: {
            "Content-Type": "application/vnd.ms-excel",
            "Content-Disposition": "attachment; filename=export-greenskills-newsletter.xls",
        },
    });
};

