interface IProps {
  inProduction: boolean
  video?: string
  title: string
  text?: string
}

export const ProjectCard: React.FC<IProps> = ({
  video,
  title,
  text,
  inProduction
}) => {
  return (
    <div className="flex flex-col p-10 h-[650px] max-h-[650px] w-[450px] rounded-3xl border-4 bg-card border-card-border shadow-card max-sm:py-8 max-sm:px-6">
      <div className="flex justify-center items-center w-full min-h-[300px] rounded-xl border-4 border-card-border max-sm:min-h-[250px]">
        {inProduction ? (
          <div className="flex justify-center items-center w-full h-full rounded-xl bg-[#1a1a1a]">
            <h3 className="text-4xl font-rajdhani font-bold -rotate-12 text-white">
              Em Produção
            </h3>
          </div>
        ) : (
          <div>
            <img src={video} alt={title} />
          </div>
        )}
      </div>
      <h3 className="my-5 text-4xl font-bold text-white">{title}</h3>
      <p className="font-lato overflow-auto text-white-85">{text}</p>
    </div>
  )
}
