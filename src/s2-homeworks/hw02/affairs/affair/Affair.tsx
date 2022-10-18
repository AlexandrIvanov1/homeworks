import React from 'react'
import {AffairType} from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair.id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair.id} className={nameClass}>
                {props.affair.name}
            </div>
            <div id={'hw2-priority-' + props.affair.id} hidden>
                {props.affair.priority}
            </div>

            <button
                id={'hw2-button-delete-' + props.affair.id}
                className={buttonClass}
                onClick={deleteCallback}
            >
                X
            </button>
        </div>
    )
}

export default Affair
