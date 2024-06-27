
interface ChipType {
  styles: string
  icon: JSX.Element
  label: string
} 

export default function Chip({
  styles,
  icon,
  label
}: ChipType) {
  return (
    <div className={`${styles} flex gap-2 px-2 py-1 rounded-full text-white`}>
      {icon}
      <span className='text-xs'>{label}</span>
    </div>
  )
}
