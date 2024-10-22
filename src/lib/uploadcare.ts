export const getUploadCareUrl = ({ src, format = 'webp' }: { src: string; format?: 'webp' }) => {
  return src + [`-/format/${format}/`].join('')
}
