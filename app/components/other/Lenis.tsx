"use client";
import React, { PropsWithChildren } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function Lenis({ children }: PropsWithChildren<{}>) {
    // const lenis = useLenis(({ scroll }) => {
    //   // called every scroll
    // });

    return <ReactLenis root>{children}</ReactLenis>;
}

export default Lenis;
