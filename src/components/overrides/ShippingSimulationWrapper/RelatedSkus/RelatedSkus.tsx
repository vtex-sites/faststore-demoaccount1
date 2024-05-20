import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Icon,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Price,
  Input,
} from "@faststore/ui";
import { useFormattedPrice } from "src/sdk/product/useFormattedPrice";
import { usePDP } from "@faststore/core";

import styles from "./RelatedSkus.module.scss";

const RelatedSkus = () => {
  const columns = ["Part", "Style #", "Quantity", "Unit Price"];

  const {
    data: {
      product: { relatedSkus, id },
    },
  } = usePDP();

  const popUpRef = useRef<HTMLDivElement | null>(null);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState(
    Array(relatedSkus.items[0].relatedSkus.length).fill("")
  );

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleAddToCart = () => {
    const baseUrl = 'https://demoaccount1.myvtex.com/checkout/cart/add/'
  
    const params = relatedSkus.items[0].relatedSkus.map((sku: any, index: number) => {
      const quantity = inputValues[index];
      return `sku=${sku.relatedSkuId}&qty=${quantity}&seller=1&sc=1&sku=${id}&qty=1&seller=1&sc=1`;
    }).join('&');

    const url = `${baseUrl}?${params}`;
    window.location.href = url; // Redirect the user to the generated URL
  };

  useEffect(() => {
    const handleOnDismiss = (event: MouseEvent) => {
      if (!popUpRef?.current?.contains(event.target as Node)) {
        setShowPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleOnDismiss);

    return () => {
      document.removeEventListener("mousedown", handleOnDismiss);
    };
  }, []);

  useEffect(() => {
    setInputValues(
      relatedSkus.items[0].relatedSkus.map((sku: { quantity: number }) =>
        sku.quantity.toString()
      )
    );
  }, [relatedSkus]);

  return (
    <>
      {relatedSkus.skuId !== '' && <div className={styles.RelatedSkus}>
        <Button variant="primary" onClick={() => setShowPopUp(!showPopUp)}>
          Bulbs and Replacement Parts for Style #{relatedSkus.skuRefId.toUpperCase()}
        </Button>
        <div data-fs-related-products-wrapper>
          {showPopUp && (
            <div>
              <div data-fs-modal-wrapper ref={popUpRef}>
                <div data-fs-modal-container>
                  <button
                    aria-label="Close"
                    onClick={() => {
                      setShowPopUp(!showPopUp);
                    }}
                  >
                    <span>CLOSE</span>
                    <Icon name="X" weight="bold" width={18} height={18} />
                  </button>
                  <div data-fs-modal-header>
                    <p data-fs-header-title>Parts & Accessories</p>
                    <p data-fs-header-description>Need Help? Call 800-782-1967</p>
                  </div>
                  <div data-fs-modal-description>
                    <Table>
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell key={column} scope="col" variant="header">
                              {column}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {relatedSkus.items[0].relatedSkus.map(
                          (sku: any, i: number) => (
                            <TableRow key={sku.relatedSkuRefId}>
                              <TableCell>
                                <img
                                  src={sku.imageUrl}
                                  alt={sku.name}
                                  width={70}
                                  height={70}
                                />
                                <span>{sku.name}</span>
                              </TableCell>
                              <TableCell>{sku.relatedSkuRefId}</TableCell>
                              <TableCell>
                                <Input
                                  type="text"
                                  value={inputValues[i]}
                                  onChange={(event) =>
                                    handleInputChange(i, event)
                                  }
                                />
                              </TableCell>
                              <TableCell>
                                <Price
                                  formatter={useFormattedPrice}
                                  value={6.99}
                                />
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                    <Button
                      variant="primary"
                      onClick={() => handleAddToCart()}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
              <div
                data-fs-modal-overlay
                data-fs-modal-open={!!showPopUp}
              ></div>
            </div>
          )}
        </div>
      </div>}
    </>
  );
};

export default RelatedSkus;
