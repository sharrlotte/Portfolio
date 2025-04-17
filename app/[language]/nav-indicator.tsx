'use client'

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function NavIndicator({ regex }: { regex: RegExp }) {
    const path = usePathname()

    if (regex.test(path) === false) return null;

    return <motion.div className="border-b absolute w-full border-white" layoutId="indicator" > </motion.div>
}
