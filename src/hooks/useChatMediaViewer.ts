import { useState } from 'react';
import { Imedia } from '../types';

export const useChatMediaViewer = () => {
    const [isToggle, setIsToggle] = useState(false);
    const [media, setMedia] = useState<Imedia>({ type: null, data: null });

    const showBox = () => {
        setIsToggle(true);
    };

    const hideBox = () => {
        setIsToggle(false);
        setMedia({
            type: null, data: null
        })
        return null
    };

    const openMediaViewer = (mediaData: any) => {
        setMedia(mediaData)
        showBox()
    };

    return {
        isToggle,
        showBox,
        hideBox,
        openMediaViewer,
        media
    }
}

