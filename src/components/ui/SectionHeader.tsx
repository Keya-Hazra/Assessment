/* eslint-disable */
interface props{
  title:string;
  description:string
}

function SectionHeader({
  title,
  description,
}:props) {
  return (
    <div className="pb-4 space-y-4 text-center">
      <div className="flex flex-col items-center w-full">
        <h2 className="max-w-sm">{title}</h2>
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="max-w-md">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SectionHeader
