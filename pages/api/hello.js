// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function recupCitation(req, res) {
  const url = "https://kaamelott.chaudie.re/api/random";
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    res.status(200).json(data);
  } catch (erreur) {
    console.error("Erreur lors de la requête : ", erreur);
    res.status(500).json({ message: erreur });
  }
}
