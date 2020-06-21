import React, { useState, useEffect } from 'react'
import './Stickers.css'
import StickersItem from '../stickersItem/StickersItem'
import api from '../../api'


function Stickers() {
    const [stickers, setStickers] = useState([]);
    const [mouseX, setMouseX] = useState(10);
    const [mouseY, setMouseY] = useState(10);    
    const [selectedSticker, setSelectedSticker] = useState({})
    
    const mouse = {
        x: mouseX,
        y: mouseY,
    }

    useEffect(() => {
        api.get().then(({ data }) => setStickers(data));
    }, []);

    useEffect(() => {
        if (selectedSticker.id) {
            let temp = selectedSticker;
            temp.positionX = mouseX;
            temp.positionY = mouseY;
            setSelectedSticker(temp);
        }
    }, [mouse])

    function createNew() {
        let blank = {
            positionX: 10,
            positionY: 10,
            noteText: ''
        }
        onSave(blank)
    }
    function onSave(item) {
        api.post('', item)
            .then(({ data }) => setStickers([...stickers, data]));
    }
    function onDelete({ id }) {
        api.delete(id)
            .then(() => {
                setStickers(
                    stickers.filter(item => item.id !== id)
                )
            });
    }
    function onChange(sticker) {
        api.put(sticker.id, sticker)
            .then(setStickers(stickers.map(item => item.id === sticker.id ? sticker : item)))
    }
    function onMouseDown(sticker) {
        setSelectedSticker(sticker)
    }
    function onMouseUp(sticker) {
        setSelectedSticker({});
        onChange(sticker);
    }
    function chengeMousePositon(e) {
        setMouseX(e.clientX - 22);
        setMouseY(e.clientY - 57);
    }
    return (
        <div className='wrapper'>
            <header className='header'>
                <h2 className='caption'>Stickers App</h2>
                <button
                    className='addButton'
                    onClick={createNew}
                >Add sticker
                </button>
            </header>
            <main
                className='stickersList'
                onMouseMove={chengeMousePositon}
            >
                {stickers.map(item => {
                    return <StickersItem
                        key={item.id}
                        sticker={item}
                        onChange={onChange}
                        onDelete={onDelete}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                    />
                })}
            </main>
        </div>
    )
}

export default Stickers
