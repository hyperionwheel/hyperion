export type TimelineDotVariant = 'completed' | 'active' | 'inactive'

export const TimelineDotIcon = ({ size, variant }: { size?: number; variant: TimelineDotVariant }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 58 58" fill="none">
      <rect x="58" y="58" width={size} height={size} rx="29" transform="rotate(-180 58 58)" fill="#FAFAFA" />
      <path
        d="M-1.27944e-06 29C1.20749e-07 12.9837 12.9837 -7.75014e-06 29 -6.34996e-06C45.0163 -4.94977e-06 58 12.9837 58 29C58 45.0163 45.0163 58 29 58C12.9837 58 -2.67962e-06 45.0163 -1.27944e-06 29ZM52.2 29C52.2 16.187 41.813 5.79999 29 5.79999C16.187 5.79999 5.8 16.187 5.8 29C5.8 41.813 16.187 52.2 29 52.2C41.813 52.2 52.2 41.813 52.2 29Z"
        fill={variant === 'inactive' ? '#C2C2C2' : '#2BAECE'}
      />
      <circle
        cx="28.9998"
        cy="29"
        r="16.9167"
        transform="rotate(-180 28.9998 29)"
        fill={variant === 'inactive' ? '#C2C2C2' : '#FF7BAC'}
      />
      {variant === 'completed' && <path d="M21 27.24L27.7598 34L38.7598 23" stroke="#FAFAFA" strokeWidth="3" />}
    </svg>
  )
}
