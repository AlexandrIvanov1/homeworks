import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'Books', priority: 'low'},
    {id: 3, name: 'JS', priority: 'low'},
    {id: 4, name: 'Work', priority: 'high'},
    {id: 5, name: 'Sport', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => {
    if (filter === 'all') return affairs
    if (filter === 'low') return affairs.filter(a => a.priority === 'low')
    if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    if (filter === 'high') return affairs.filter(a => a.priority === 'high')
}
export const deleteAffair = (affairs: Array<AffairType>, id: number): Array<AffairType> => {
     return affairs.filter(a => a.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => {
        setAffairs(deleteAffair(affairs, id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
