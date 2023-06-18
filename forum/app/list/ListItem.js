'use client'

import Link from "next/link";

export default function ListItem(props) {
    return (
        <div className="list-bg">
            {
                props.result.map((a, i) => 
                    <div className="list-item" key={i}>
                        <Link prefetch={false} href={'/detail/' + props.result[i]._id}>
                            <h4>{a.title}</h4>
                        </Link>
                        <Link href={'/edit/' + props.result[i]._id}>수정</Link>
                        <span onClick={(e) => {
                            fetch('/api/post/delete', { method: 'POST', body: props.result[i]._id })
                                .then((r) => r.json())
                                .then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display = 'none';
                                    }, 1000)
                                })
                        }}>삭제</span>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}