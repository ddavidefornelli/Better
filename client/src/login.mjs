export default async function registerUser(nomeUtente, password, email) {
  try {
    const response = await fetch("http:localhost:5173/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeUtente,
        email,
        password
      })
    })
    if(!response.ok) {
      throw new Error("affamocc il server non funziona")
    }
    const data = await response.json()
  } catch (err) { 
    console.log(err.message)
  }
}
