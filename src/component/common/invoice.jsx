import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import  jsPDF  from 'jspdf';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Invoice = () => {

    const params = useParams();
    const printRef = React.useRef(null);
    const [userData, setUserData] = useState(null);

    const hanleDownloadPdf = async () => {
        const element = printRef.current;

        if (!element) {
            return;
        }

        const canvas = await html2canvas(element, {
            scale: 2
        });
        const data = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: "a4"
        });

        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();

        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        console.log(imgProperties);

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('examplepdf.pdf');
    }

    useEffect(() => {
        const { id } = params;
        
        async function fetchData() {
            
            const {data} = await axios.get(`http://localhost:3009/orders/using_payment/${id}/`);

            setUserData(data);
            console.log(data, "UserData");
        }

        fetchData();
    }, [])
     
    const subTotal = () => {
        let total = 0;

        userData["products"].map(product => {
            total = product.quantity * product.price;
        })
        return total;
    }

    return ( 
        (userData && (<div className="p-2">
            <Link to="/" className="bg-green-600 text-white px-3 py-1">Return to Home</Link>
            <div ref={printRef} className="w-full flex items-center justify-center">
        <div className="w-full px-20 py-8 max-w-5xl">
        <div className="bg-blue-400 w-full h-8"></div>
        <div >
            <div className="py-10">
                <h2 className="text-base font-bold mb-3">{userData.first_name+ " " +userData.last_name}</h2>
                <p className="text-sm font-normal">{userData.town_city+","+userData.street_address}</p>
            </div>

            <ul className="flex justify-between mb-10">
                <li>
                    <h2 className="font-bold">BILL TO</h2>
                    <p>Exclusive</p>
                    <p>Online shoping platform</p>
                </li>
                <li>
                    <h2 className="font-bold">SHIP TO</h2>
                    <p>Ezedin Gashaw</p>
                    <p>Ethiopia, Dessei</p>
                </li>
            </ul>

            <div className="border-y-2 border-black flex justify-between py-5">
                <h1 className="text-2xl font-bold">Invoice Total</h1>
                <h1 className="text-2xl font-bold">${subTotal()}</h1>
            </div>

             <table className="w-full overflow-x-scroll text-start">
                            <tr className="grid max-sm:grid-cols-3 grid-cols-4 justify-around items-center mb-3 ms:gap-x-10">
                                <p className="ml-3 text-base font-bold text-black p-2 max-sm:hidden flex-grow">QTY</p>
                                <p className="ml-3 text-base font-bold text-black p-2 inline-block flex-grow">Description</p>
                                <p className="ml-3 text-base font-bold text-black p-2 inline-block flex-grow">Unit Price</p>
                                <p className="ml-3 text-base font-bold text-black p-2 inline-block flex-grow">Amount</p>
                            </tr>
                           
                        {
                            userData["products"].map(product => {
                                return (
                                    <tr className="grid max-sm:grid-cols-3 grid-cols-4 justify-around mb-3 gap-x-10 items-center">
                                    <p className="flex-grow text-sm text-black  font-normal p-2 inline-block relative  max-sm:hidden">{ product.quantity}</p>
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block">{product.name}</p>
                                        <p className="flex-grow text-sm text-black  font-normal p-2 inline-block">{product.price}</p>
                                        <p className="flex-grow text-sm text-black  font-normal p-2 inline-block">{ product.price * product.quantity }</p>
                </tr>      
                                )
                                
                            })
                                   }
                

                <tr className="grid max-sm:grid-cols-3 grid-cols-4 justify-around mb-1 gap-x-10 items-center">
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block relative  max-sm:hidden"></p>
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block"></p>
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block">Subtotal</p>
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block">{subTotal()}</p>
                </tr>
                <tr className="grid max-sm:grid-cols-3 grid-cols-4 justify-around mb-1 gap-x-10 items-center">
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block relative  max-sm:hidden"></p>
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block"></p>
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block">Sales Tax 5.0%</p>
                                <p className="flex-grow text-sm text-black  font-normal p-2 inline-block">0</p>
                </tr>
                
                        </table>
        </div>
        <div className="w-full flex justify-end">
        <button onClick={hanleDownloadPdf} className="bg-blue-600 shadow-lg text-white py-1 px-2 my-5 rounded">Download PDF</button>
        </div>
        <div className="bg-blue-400 w-full h-8"></div>
            </div>
            </div>
        </div>
        ))
     );
}
 
export default Invoice;