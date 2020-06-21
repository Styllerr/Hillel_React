import React, { useState, useEffect } from 'react'
import './StickersItem.css'

function StickersItem({ sticker, onDelete, onChange, onMouseDown, onMouseUp }) {

    const [text, setText] = useState('');

    const position = {
        'top': sticker.positionY,
        'left': sticker.positionX,
    }

    useEffect(() => {
        setText(sticker.noteText)
    }, [sticker]);

    function onChangeText(e) {
        setText(e.target.value)
    };

    function onSaveChange() {
        sticker.noteText = text;
        onChange(sticker);
    };

    return (
        <div
            className='sticker_container'
            style={position}
        >
            <div className='conteiner_header'
            >
                <div
                    className='move'
                    onMouseDown={onMouseDown.bind(null, sticker)}
                    onMouseUp={onMouseUp.bind(null, sticker)}
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
