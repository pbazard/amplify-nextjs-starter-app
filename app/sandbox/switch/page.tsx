"use client"

import React from 'react';
import { Switch } from "@/app/components/ui/Switch";

export default function Page() {
    const [checked, setChecked] = React.useState(false);
    return (
        <>
        <div className="flex gap-4 mb-36 justify-center w-full text-lg items-center relative">
            <span>Pay Monthly</span>
            <Switch id="airplane-mode" className="bg-grey-border" 
                onCheckedChange={() => setChecked(!checked)}  />
            <span>Pay Yearly</span>
            <div className="absolute -bottom-24 transform translate-x-36 max-md:translate-x-28 max-sm:translate-x-10">
            </div>
        </div>
        <div>Airplane mode is {checked ? 'on' : 'off'}</div>
        </>
    )
}