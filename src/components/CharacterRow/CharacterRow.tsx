import React from 'react';
import style from './CharacterRow.module.css';

type PropType = {
    title: string | undefined,
    value: string,
}

const CharacterRow: React.FC<PropType> = ({ title, value }) => {

    return (
        <div className={style.row}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.value}>
                {value}
            </div>
        </div>
    )
}

export default CharacterRow;