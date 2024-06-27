interface ButtonType {
  title: string
  link: string | null
  icon: JSX.Element
}

export default function Button({title, link, icon}: ButtonType) {
  return (
    <a 
      className="inline-flex rounded-xl gap-2 py-2 px-3 justify-center items-center bg-gray-800 text-white border-x border-gray-600 focus:outline-none hover:border-gray-800"
      href={link?? ''}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {icon}
      {title}
    </a>
  )
}
