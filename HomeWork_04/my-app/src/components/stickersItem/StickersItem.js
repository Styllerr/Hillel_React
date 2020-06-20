import React, { useState, useEffect } from 'react'
import './StickersItem.css'

function StickersItem({ sticker, noteText, onDelete, onChange, onMouseDown, onMouseUp, isMousePosition }) {

    const [text, setText] = useState('');
    const [positionX, setPositionX] = useState(10);
    const [positionY, setPositionY] = useState(10);
    const position = {
        'top': positionY,
        'left': positionX,
    }

    useEffect(() => {
        setText(sticker.noteText)
    }, [sticker]);

    useEffect(() => {
        setPositionX(isMousePosition.x);
        setPositionY(isMousePosition.y)
    }, [isMousePosition]);

    function onChangeText(e) {
        setText(e.target.value)
    };

    function onSaveChange() {
        sticker.noteText = text;
        onChange(sticker);
    };

    return (
        <div className='sticker_container' style={position}>
            <div className='conteiner_header'
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            >
                <div
                    className='move'
                />
                <div
                    className='close'
                    onClick={onDelete.bind(null, sticker)}
                >X
                </div>
            </div>
            <textarea
                cols='23'
                rows='9'
                value={text}
                onChange={onChangeText}
                onBlur={onSaveChange}

            />
        </div>
    )
}

export default StickersItem
