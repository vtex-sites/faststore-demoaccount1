import React, { useEffect, useRef, useState } from 'react'
import { Icon, Button } from '@faststore/ui'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import Image from 'next/image'

import { Table, TableHead, TableRow, TableCell, TableBody, Price } from '@faststore/ui'

import styles from './RelatedSkus.module.scss'

import { usePDP }  from "@faststore/core"

const RelatedSkus = () => {
    const here = usePDP()
    console.log('context:', here)

    const popUpRef = useRef<HTMLDivElement | null>(null)
    const [showPopUp, setShowPopUp] = useState<boolean>(false)
  
    useEffect(() => {
      const handleOnDismiss = (event: MouseEvent) => {
        if (!popUpRef?.current?.contains(event.target as Node)) {
          setShowPopUp(false)
        }
      }
  
      document.addEventListener('mousedown', handleOnDismiss)
  
      return () => {
        document.removeEventListener('mousedown', handleOnDismiss)
      }
    }, [])

    const columns = ["Part", "Style #", "Quantity", "Unit Price"]

    const relatedSkus = [
        {
            sku: {
              name: "60W Equivalent Torpedo 5.5W LED Dimmable Filament Candelabra by Tesler",
              image: {
                src: 'part',
                alt: "image",
              },
              style: "35x94",
              quantity: "4",
              unitPrice: 4,
            }
        }
    ]


    // const [data, setData] = useState();
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState();
  
    // useEffect(() => {
    //   // Define la URL a la que quieres hacer la solicitud
    //   const url = 'https://demoaccount4.myvtex.com/_v/related-parts/1979';
  
    //   // Función para hacer la solicitud fetch
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch(url);
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const result = await response.json();
    //       setData(result);
    //     } catch (error) {
    //       setError(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchData();
    // }, []); // El array vacío asegura que esto se ejecute solo una vez cuando el componente se monte
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div className={styles.RelatedSkus}>
        <Button variant="primary" onClick={() => setShowPopUp(!showPopUp)}>
            Bulbs and Replacement Parts for Style #1G894
        </Button>
        <div data-fs-related-products-wrapper>
        {showPopUp && (
            <div data-fs-modal-wrapper ref={popUpRef}>
                <div data-fs-modal-container>
                    <button
                        aria-label="Close"
                        onClick={() => {
                            setShowPopUp(!showPopUp)
                        }}
                    >
                        <span>CLOSE</span>
                        <Icon name="X" weight="bold" width={18} height={18} />
                    </button>
                    <div data-fs-modal-header>
                        <p data-fs-header-title>
                            Parts & Accessories
                        </p>
                        <p data-fs-header-description>
                            Need Help? Call 800-782-1967
                        </p>
                    </div>
                    <div data-fs-modal-description>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell key={index} scope="col" variant="header">
                                    {column}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {relatedSkus.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                <Image 
                                    src={item.sku.image.src}
                                    alt={item.sku.image.alt}
                                    width={70}
                                    height={70}
                                />
                                <span>
                                    {item.sku.name}
                                </span>
                                </TableCell>
                                <TableCell>{item.sku.style}</TableCell>
                                <TableCell>{item.sku.quantity}</TableCell>
                                <TableCell>
                                <Price formatter={useFormattedPrice} value={item.sku.unitPrice} />
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Button variant="primary" onClick={() => setShowPopUp(!showPopUp)}>
                        ADD TO CART
                    </Button>
                    </div>
                </div>
            </div>
        )}
        </div>
      </div>
    )
    
    // return (
    //     <div>
    //         <Button variant="primary" onClick={() => openModal()}>
    //             Bulbs and Replacement Parts for Style #
    //         </Button>
    //         {modal && (
    //             <div> 
    //                 <div> 
                    
    //                 </div>
    //                 <div> 
                    
    //                 </div>
    //                 <BuyButton
    //                     variant="primary"
    //                     {...buyProps}
    //                 >
    //                     {'ADD TO CART'}
    //                 </BuyButton>
    //             </div>
    //         )}
    //     </div>
    // )
}

export default RelatedSkus