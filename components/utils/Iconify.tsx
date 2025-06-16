import React from 'react'
import { Icon } from "@iconify/react";

const Iconify = ({ classNames, icon, onClick }: { classNames?: string, icon: string, onClick?: () => void }) => {
    return (
        <Icon icon={icon} className={classNames} onClick={onClick} />
    )
}

export default Iconify