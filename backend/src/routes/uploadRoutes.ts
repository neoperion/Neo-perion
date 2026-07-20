import { Router } from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Determine resource type based on mimetype
    let resourceType: 'image' | 'video' | 'raw' | 'auto' = 'auto';
    if (req.file.mimetype === 'application/pdf') {
      resourceType = 'raw';
    } else if (req.file.mimetype.startsWith('video')) {
      resourceType = 'video';
    } else if (req.file.mimetype.startsWith('image')) {
      resourceType = 'image';
    }

    const result = await new Promise((resolve, reject) => {
      const uploadOptions: any = {
        resource_type: resourceType,
        folder: 'neo-perion-uploads' // Organize uploads in a folder
      };

      if (resourceType === 'raw' && req.file?.originalname) {
        // For raw files (like PDFs), Cloudinary drops the extension unless explicitly provided
        // We append a timestamp to ensure the file name is unique
        const originalNameParts = req.file.originalname.split('.');
        const extension = originalNameParts.length > 1 ? originalNameParts.pop() : 'pdf';
        const baseName = originalNameParts.join('.').replace(/[^a-zA-Z0-9-]/g, '_');
        uploadOptions.public_id = `${baseName}_${Date.now()}.${extension}`;
      }

      const uploadStream = cloudinary.uploader.upload_stream(
        uploadOptions,
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      
      // End the stream with the buffer
      uploadStream.end(req.file!.buffer);
    });

    res.status(200).json({
      success: true,
      url: (result as any).secure_url,
      public_id: (result as any).public_id,
      format: (result as any).format,
      width: (result as any).width,
      height: (result as any).height,
      resource_type: (result as any).resource_type
    });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ error: 'Failed to upload file to Cloudinary' });
  }
});

export default router;
