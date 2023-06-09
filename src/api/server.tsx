import { uploadFile } from '@uploadcare/upload-client'

// fileData must be `Blob`, `File`, `Buffer`, UUID, CDN URL or Remote URL
const result = await uploadFile(fileData, {
  publicKey: 'YOUR_PUBLIC_KEY',
  store: 'auto',
  metadata: {
    subsystem: 'uploader',
    pet: 'cat'
  }
})
console.log(`URL: ${file.cdnUrl}`)