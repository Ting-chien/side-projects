import { useState } from "react"

const Edit = ({ add }) => {

    // 把 input element 綁定到 useState hook 上
    const [note, setNote] = useState("")
    // 再建立一 function 把輸入的直給寫入
    function changeNote(e) {
        setNote(e.target.value)
    }

    // 把 input element 綁定到 useState hook 上
    const [date, setDate] = useState("")
    // 再建立一 function 把輸入的直給寫入
    function changeDate(e) {
        setDate(e.target.value)
    }

    // 把 input element 綁定到 useState hook 上
    const [time, setTime] = useState("")
    // 再建立一 function 把輸入的直給寫入
    function changeTime(e) {
        setTime(e.target.value)
    }

    // 新增 item
    function addItem() {
        // 透過一個 function 將原始值 (prev) 解構並回傳
        add(function(prev) {
            return [...prev, {
                note,
                date,
                time
            }]
        })
    }

    return <div>
        {/* <h1>備忘錄</h1> */}
        <p>記事：</p>
        <input type="text" value={note} onChange={changeNote}/>
        <p>日期：</p>
        <input type="date" value={date} onChange={changeDate}/>
        <p>時間：</p>
        <input type="time" value={time} onChange={changeTime}/>
        <button onClick={addItem} className="add">新增</button>
    </div>
}

export default Edit