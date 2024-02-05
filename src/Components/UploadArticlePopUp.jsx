// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import { routers } from "../endpoints";
// import {useNavigate} from 'react-router-dom';
// import {WaitingPopup} from './WaitingPopup';


// function UploadArticlePopUp(props) {
//     const [url, setUrl] = useState(""); // State to hold the URL input value
//     const navigate =useNavigate();

//     const [waitPopup, setwaitPopup] = useState(false);
   
//     const handleClientLoad = () => {
//         const uploadUrl = "http://127.0.0.1:8000/api/upload/";

//         fetch(uploadUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
            
//             body: JSON.stringify({ folder_link: url }), // Send the URL in the request body
//         })
//         setwaitPopup(true)
    
//         .then(response => {
//             setwaitPopup(false)


//             if ( response.status === 400) {
//                 navigate ('/UploadFailPopUp')
//                 // throw new Error('Something went wrong');
              
//             }
//             else
//             { navigate ('/UploadSuccesPopUp')}
           
           
//         })
//         // .catch(error => {
//         //     console.error('Error:', error);
//         // });
//     };

//     return (props.trigger) ? (
//         <div className="flex items-center justify-center h-screen absolute w-full">
//             <div className='leading-[3.5em] font-["Inter"] text-[#1E1E1E] bg-[#FEFEFE] w-1/3 drop-shadow-md p-6'>
//                 <p className="font-semibold text-[1.2em]">
//                     Entrer le URL des articles
//                 </p>
//                 <input
//                     type="text"
//                     placeholder="Saisir votre URL..."
//                     className="w-full border-2 border-green rounded-[0.5em] my-4 px-4 w-full text-green bg-dark-blue"
//                     required
//                     value={url} // Bind input value to state
//                     onChange={(e) => setUrl(e.target.value)} // Update state on input change
//                 />
//                 <div className="flex items-center justify-center space-x-4 text-[#FEFEFE] font-regular w-full my-4">
//                     <button onClick={() => props.setTrigger(false)} className="flex items-center justify-center bg-[#6C757D] rounded-[0.15em] px-4 w-auto">
//                         Annuler
//                     </button>
//                     <button  
//                         onClick={() => handleClientLoad()}
//                         className="flex items-center justify-center bg-[#50B3C5] rounded-[0.15em] px-4 w-auto">
//                         Lancer Upload
//                     </button>
//                 </div>
//             </div>
//             {props.children}
//         </div>
//     ) : "";
// }

// export default UploadArticlePopUp;



import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { routers } from "../endpoints";
import { useNavigate } from 'react-router-dom';
import WaitingPopup from './WaitingPopup'; // Import WaitingPopup component

function UploadArticlePopUp(props) {
    const [url, setUrl] = useState(""); // State to hold the URL input value
    const navigate = useNavigate();

    const [waitPopup, setWaitPopup] = useState(false);

    const handleClientLoad = () => {
        const uploadUrl = "http://127.0.0.1:8000/api/upload/";

        // Show waiting popup
        setWaitPopup(true);

        fetch(uploadUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
            body: JSON.stringify({ folder_link: url }), // Send the URL in the request body
        })
        .then(response => {
            // Hide waiting popup
            setWaitPopup(false);
            if (response.status === 400 || response.status === 405 || response.status === 500) {
                navigate('/UploadFailPopUp');
            } else {
                navigate('/UploadSuccesPopUp');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Hide waiting popup here in case of an error
            setWaitPopup(false);
        });
    };

    return (props.trigger) ? (
        <div className="flex items-center justify-center h-screen absolute w-full">
            <div className='leading-[3.5em] font-["Inter"] text-[#1E1E1E] bg-[#FEFEFE] w-1/3 drop-shadow-md p-6'>
                <p className="font-semibold text-[1.2em]">
                    Entrer le URL des articles
                </p>
                <input
                    type="text"
                    placeholder="Saisir votre URL..."
                    className="w-full border-2 border-green rounded-[0.5em] my-4 px-4 w-full text-green bg-dark-blue"
                    required
                    value={url} // Bind input value to state
                    onChange={(e) => setUrl(e.target.value)} // Update state on input change
                />
                <div className="flex items-center justify-center space-x-4 text-[#FEFEFE] font-regular w-full my-4">
                    <button onClick={() => props.setTrigger(false)} className="flex items-center justify-center bg-[#6C757D] rounded-[0.15em] px-4 w-auto">
                        Annuler
                    </button>
                    <button  
                        onClick={() => handleClientLoad()}
                        className="flex items-center justify-center bg-[#50B3C5] rounded-[0.15em] px-4 w-auto">
                        Lancer Upload
                    </button>
                </div>
            </div>
            {props.children}
            <WaitingPopup trigger={waitPopup} /> {/* Render WaitingPopup based on the trigger */}
        </div>
    ) : "";
}

export default UploadArticlePopUp;
