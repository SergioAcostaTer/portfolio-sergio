//MouseShadow.jsx

import { useEffect, useRef } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const size = 400

const MouseShadow = () => {
    const cont = useRef(null)
    const { width } = useWindowDimensions()

    useEffect(() => {

        if (width <= 768) return

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const handleMouseMove = (e) => {
        // cont.current.style.display = "block"
        const x = e.clientX
        const y = e.clientY
        cont.current.style.left = `${x - (size / 2)}px`
        cont.current.style.top = `${y - (size / 2)}px`
    }

    return (
        <>
            {
                width > 768 && (
                    <div ref={cont} className={`fixed top-0 left-0 z-[20] rounded-full z-[-10] backdrop-filter backdrop-blur-[10px]`}
                        style={{
                            background: "radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)",
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    >
                    </div>
                )
            }
        </>
    )
}

export default MouseShadow