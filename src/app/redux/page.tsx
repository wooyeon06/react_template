"use client"

import { useEffect } from "react";
import { Loading, useLoading } from "./loding";


export default function Page() {

    const loading = useLoading();

    useEffect(() => {
        loading.showLoading();
    }, []);

    return (
        <>
            <div>
                <Loading></Loading>
                redux
            </div>
        </>
    );
}

