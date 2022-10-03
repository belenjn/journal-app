import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from "cloudinary";
import { firebaseEnv } from "../../src/env";

cloudinary.config({
  cloud_name: firebaseEnv.cloudName,
  api_key: firebaseEnv.apiKeyCloudinary,
  api_secret: firebaseEnv.apiSecretCloudinary,
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a Cloudinary", async () => {
    const imageURL =
      "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

    const resp = await fetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");

    await cloudinary.api.delete_resources(["journal/" + imageId], {
      resource_type: "image",
    });
  });

  test("debe de retornar null", async () => {
    const file = new File([], "foto.jpg");

    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
