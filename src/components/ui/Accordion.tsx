/* eslint-disable */
import { useRef, useState } from 'react';

interface props {
  title: string | number;
  body: string | number | JSX.Element;
}

function Accordion({ title, body }: props) {
  const ref = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setSelected((v) => !v)}
      className={`border-b cursor-pointer border-white/50 ${selected && 'pb-4'}`}
    >
      <div className="flex items-center justify-between py-5">
        <p className="">{title}</p>
        <span className="font-bold transition duration-500 ease-out transform">
          {selected ? '+' : '-'}
        </span>
      </div>
      <div
        ref={ref}
        className="relative overflow-hidden transition-all duration-500 not-prose"
        style={{ maxHeight: selected && ref.current ? ref.current.scrollHeight : 0 }}
      >
        <p className="text-sm text-left">{body}</p>
      </div>
    </button>
  )
}

export default Accordion
