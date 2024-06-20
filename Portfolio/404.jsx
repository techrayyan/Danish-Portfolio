 
  
  /**
  * v0 by Vercel.
  * @see https://v0.dev/t/KUAK1inLWyN
  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
  */
 export default function Component() {
   return (
     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
       <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
         <div className="flex flex-col items-center">
           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-gray-100 mb-4">
             <div className="flex items-center justify-center h-full text-4xl font-bold text-gray-900 dark:text-gray-100">
               404
             </div>
           </div>
           <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Network Error</h1>
           <p className="text-gray-600 dark:text-gray-400 mb-6">
             Oops, it looks like there's a problem with your network connection. We're working on it, please try again in
             a moment.
           </p>
         </div>
       </div>
     </div>
   )
 }
 