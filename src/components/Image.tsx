interface ImageProps {
  src: string
  width: number
  height: number
  alt: string
}

const Image = ({ src, width, height, alt }: ImageProps) => {
  return <img src={src} width={width} height={height} alt={alt} />
}

export default Image
