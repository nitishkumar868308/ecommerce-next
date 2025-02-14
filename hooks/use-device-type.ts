import { useEffect, useState } from "react";

function useDeviceType() {
    const [deviceTYpe, setDeviceType] = useState('unkown')

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(window.innerWidth <= 768 ? 'mobile' : 'desktop')
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('event', handleResize)
    }, [])

    return deviceTYpe
}

export default useDeviceType