export const fileUpload = async (file) => {
  const cloudURL = "https://api.cloudinary.com/v1_1/dxnccr9z3/upload";

  if (!file) return null;

  const formData = new FormData();

  formData.append("upload_preset", "journal-app");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudURL, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir imagen");

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    return null;
  }
};
