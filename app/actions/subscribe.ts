"use server"

export async function subscribeToSystemeIo(formData: FormData) {
  const firstName = formData.get("first_name") as string
  const lastName = formData.get("last_name") as string
  const email = formData.get("email") as string

  try {
    // Soumission au formulaire Systeme.io avec les noms de champs corrects
    const response = await fetch("https://systeme.io/embedded/36802753/subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        first_name: firstName,
        surname: lastName,
        email: email,
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
