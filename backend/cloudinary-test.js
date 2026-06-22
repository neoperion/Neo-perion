const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with the credentials provided
cloudinary.config({
  cloud_name: 'dkkdmpulb',
  api_key: '544467437257274',
  api_secret: 'kvrMxRuo4gLdNqzPJq-H3xuRPhU'
});

async function run() {
  try {
    console.log("Uploading image...");
    // 2. Upload an image from demo domain
    const uploadResult = await cloudinary.uploader.upload(
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      { public_id: 'cloudinary_test_sample' }
    );
    console.log("Secure URL:", uploadResult.secure_url);
    console.log("Public ID:", uploadResult.public_id);

    // 3. Get image details
    console.log("\nImage Details:");
    console.log(`Width: ${uploadResult.width}px`);
    console.log(`Height: ${uploadResult.height}px`);
    console.log(`Format: ${uploadResult.format}`);
    console.log(`File size: ${uploadResult.bytes} bytes`);

    // 4. Transform the image
    // fetch_format: 'auto' (f_auto) Automatically selects the most efficient image format (like WebP or AVIF) supported by the browser.
    // quality: 'auto' (q_auto) Automatically optimizes the image quality to balance file size and visual quality.
    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto'
    });

    console.log("\nDone! Click link below to see optimized version of the image. Check the size and the format.");
    console.log(transformedUrl);

  } catch (error) {
    console.error("Error during Cloudinary operations:", error);
  }
}

run();
