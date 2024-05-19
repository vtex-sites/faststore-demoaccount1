import React, { useEffect, useRef, useState } from 'react'
import { Icon, Link, Button } from '@faststore/ui'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
// import { Modal, ModalHeader, ModalBody, Button, useUI } from '@faststore/ui'

// import { BuyButton, Icon, QuantitySelector } from '@faststore/ui'
// import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import Image from 'next/image'

import { Table, TableHead, TableRow, TableCell, TableBody, Price } from '@faststore/ui'

import styles from './RelatedSkus.module.scss'

import { usePDP }  from "@faststore/core"

import image from '../../../assets/images/pdp-related-skus/part.jpg'

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

    const relatedSkus = [{
        item: {
            name: "Part",
            image: {
                src: image,
                alt: "image",
            },
            style: "35x94",
            quantity: "4",
            unitPrice: 4
        }
    }]
  
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
                            {relatedSkus.map((sku: any, i: number) => (
                            <TableRow key={sku.i}>
                                <TableCell>
                                    <Image 
                                        src={sku.src}
                                        alt={sku.alt}
                                        width={30}
                                        height={50}
                                    >
                                    </Image>
                                    {sku.name}
                                </TableCell>
                                <TableCell>
                                    {sku.style}
                                </TableCell>
                                <TableCell>
                                    {sku.quantity}
                                </TableCell>
                                <TableCell>
                                    <Price formatter={useFormattedPrice} value={sku.unitPrice} />
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        <Button variant="primary" onClick={() => setShowPopUp(!showPopUp)}>
                            ADD TO CART
                        </Button>
                    </Table>
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