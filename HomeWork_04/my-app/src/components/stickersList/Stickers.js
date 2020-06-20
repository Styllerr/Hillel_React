import React, { useState, useEffect } from 'react'
import StickersItem from '../stickersItem/StickersItem'
import './Stickers.css'
import api from '../../api'


function Stickers() {
    const [stickers, setStickers] = useState([]);
    const [mouseX, setMouseX] = useState(10);
    const [mouseY, setMouseY] = useState(10);

    const mouse = {
        x: mouseX,
        y: mouseY,
        isDown: false
    }

    useEffect(() => {
        api.get().then(({ data }) => setStickers(data));
        console.log(mouse);
    }, []);

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
    function onMouseDown(e) {
        mouse.isDown = true;
        console.log(mouse);
    }
    function onMouseUp() {
        mouse.isDown = false;
        console.log(mouse);
    }
    function chengeMousePositon(e) {
        console.log(mouse);
        if (mouse.isDown) {
            setMouseX(e.clientX-22);
            setMouseY(e.clientY-57);
        }
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
                        isMousePosition={mouse}
                    />
                })}
            </main>
        </div>
    )
}

export default Stickers
