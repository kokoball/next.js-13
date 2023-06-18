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
                        <span onClick={() => {
                            fetch('/api/post/delete', { method: 'POST', body: props.result[i]._id })
                        }}>삭제</span>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}