import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { METALS } from "../utils/constants";

export const PriceAPIContext = React.createContext();

const useSocketConnection = (channel, onDataReceived) => {

  useEffect(() => {
    const socket = io("https://goldwise-api-dev.miyumi.ai")

    socket.on('connect', () => {
      socket.emit('join_channel', { channel })
    });

    socket.on('error', (err) => {
      console.log({ connected: socket.connected, err });
    });

    socket.on('elo', onDataReceived);

    socket.on("disconnect", () => {
      console.log("Disconnected from socket");
    });

    return () => {
      socket.disconnect()
    }
  }, [channel])
}

export const PriceAPIContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("GBP");
  const [priceObject, setPriceObject] = useState();
  const [pricesObject, setPricesObject] = useState();
  const route = useRouter();
  const [metal, setMetal] = useState(route?.query?.id);
  const [productsPrices, setProductsPrices] = useState({})

  useSocketConnection(`metal_prices_${currency}`, (data) => {
    if (data?.mSC === METALS[metal]) {
      setPriceObject(data);
    }
    setPricesObject((obj) => ({ ...obj, [data?.mSC]: data }));
  });

  useSocketConnection(`product_prices_${currency}`, (data) => {
    setProductsPrices((old) => ({ ... old, [data?.mSC]: data }))
  });

  return (
    <PriceAPIContext.Provider value={{ setCurrency, currency, priceObject, productsPrices, setMetal, pricesObject }}>
      {children}
    </PriceAPIContext.Provider>
  )
};

export const usePriceApiContext = () => React.useContext(PriceAPIContext);