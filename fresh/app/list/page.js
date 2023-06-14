'use client'

import { useState } from "react"

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량, 수량변경] = useState([0, 0, 0])
    
    return (
        <div>
            <h4 className='title'>상품목록</h4>
            <span></span>
            {
                상품.map((item, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" />
                            <h4>{item} $50</h4>
                            <span> {수량[i]} </span>
                            <button onClick={() => {
                                수량변경(prev => {
                                    let copy = [...prev];
                                    copy[i]++;
                                    return copy;
                                })
                            }}>+</button>
                            <button onClick={() => {
                                수량변경(prev => {
                                    let copy = [...prev];
                                    copy[i]--;
                                    return copy;
                                })
                            }}>-</button>

                        </div>
                    )
                })
            }
            
        </div>
    )
}
