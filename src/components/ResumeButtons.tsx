import { IoBriefcase } from "react-icons/io5"

interface ResumeButtonsProps {
  downloadUrl: string;
}

export const ResumeButtons = ({ downloadUrl: url }: ResumeButtonsProps) => {
  return (
    <button className=' menu-item border-2 border-white hover:bg-indigo-800 
    hover:border-indigo-800 dark:hover:bg-indigo-500 dark:hover:border-indigo-500
    md:text-xl lg:text-xl font-sans
     text-white py-2 px-4 rounded-full flex items-center space-x-2'
     onClick={() => window.open(url)}>
          <IoBriefcase/>
          <span>Download my CV</span>
        </button>
  )
}

// import { IoBriefcase } from "react-icons/io5"

// export const ResumeButtons = () => {
//   return (
//     <div className='flex flex-row space-x-4 text-center '>
//         <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2'>
//           <IoBriefcase/>
//           <span>Download CV</span>
//         </button>
//         <button className='border-2 border-indigo-500 bg-transparent hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded'>
//           Check CV
//         </button>
        
//     </div>
//   )
// }
