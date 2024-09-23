import { IoBriefcase } from "react-icons/io5"

export const ResumeButtons = () => {
  return (
    <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2'>
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
