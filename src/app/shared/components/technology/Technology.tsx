interface IProps {
  src: string
  label: string
}

export const Technology: React.FC<IProps> = ({ src, label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <img src={src} alt={label} className="max-h-20" />
      <h4 className="text-center font-lato max-w-[95px] text-white">{label}</h4>
    </div>
  )
}
