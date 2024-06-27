import { FaFileDownload } from 'react-icons/fa'
interface Props {
  children?: React.ReactNode
  isOpenModal: boolean
  showHeader?: boolean
  modalPosition?: string
  padding?: string
  url?: string
  closeModal: () => void
}
const ModalLayout: React.FC<Props> = ({
  children,
  isOpenModal,
  closeModal,
  url,
  showHeader = false,
  modalPosition = 'items-center',
  padding = ''
}) => {
  return (
    <>
      {isOpenModal &&
        (<div className={`w-screen h-screen fixed lg:py-20 flex-col inset-0 flex ${modalPosition} z-[100] bg-slate-900/20 backdrop-blur overflow-y-auto`}
          onClick={closeModal}
        >
          <div className={`w-full max-w-4xl xl:max-w-5xl xxl:max-w-7xl shadow-xl p-6 cursor-default bg-primary lg:rounded-2xl h-full lg:h-[calc(100vh_-_160px)] overflow-y-scroll ${padding}`} onClick={(e) => {
            e.stopPropagation()
          }}
            onScroll={(e) => {
              e.stopPropagation()
            }}>
            {showHeader &&
              (<div className="flex items-center bg-primary justify-between py-5 md:pb-4 sm:pt-4 px-5">
                {/* <h3 className="font-semibold text-2xl sm:text-3xl-c tracking-[.03em] text-white px-8">{title}</h3> */}
                <a className="flex gap-1 text-[20px] text-white items-center hover:text-secondary" href={url} download>
                  <span className="hover:underline font-medium">Descargar</span>
                  <FaFileDownload className=""/>
                </a>
              </div>)
            }
            <button
              className="absolute font-medium top-4 xxl:top-6 z-[1] right-5 w-8 h-8 md:w-10  xl:w-12 xxl:w-14 xxl:h-14 md:h-10 xl:h-12 border-[1px] border-primary-200 bg-none hover:text-primary-300 hover:border-primary-300 hover:scale-105 cursor-pointer rounded-full text-primary-200 transition-all duration-300 ease"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            {children}
          </div>
        </div>)
      }
    </>
  )
}

export default ModalLayout
