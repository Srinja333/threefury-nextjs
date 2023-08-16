export default function cloudinaryLoader({ src, width, quality }){
    return `https://res.cloudinary.com/dh6pohbrn/image/upload/v1692116130/${src}?w=${width}&q=${quality || 75}`
  }
  