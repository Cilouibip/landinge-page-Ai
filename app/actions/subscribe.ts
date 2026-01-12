"use server"

export async function subscribeToSystemeIo(formData: FormData) {
  const firstName = formData.get("first_name") as string
  const lastName = formData.get("last_name") as string
  const email = formData.get("email") as string

  try {
    // Systeme.io utilise généralement une soumission de formulaire classique
    // On va simuler la soumission avec les bons attributs name
    const response = await fetch("https://www.mytribu.co/public/remote/page/36802753a0d81da794e0a728ce6c9becb6e7b31e.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "form-input-fb648da8": lastName,
        "field-4d9327a8": firstName,
        "field-527f192d": email,
      }),
    })

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }

    return { success: true }
  } catch (error) {
    console.error("Erreur lors de l'inscription à Systeme.io:", error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Erreur inconnue" 
    }
  }
}
