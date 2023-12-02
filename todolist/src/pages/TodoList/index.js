import { useState } from "react"

import Edit from "./components/Edit"
import List from "./components/List"
import './index.css'


const TodoList = () => {

    // 透過 useState 給予初始值和一 setter
    const [data, setData] = useState([])

    return <div className="app">
        <Edit add={setData} />
        <List listData={data} />
    </div>
}

export default TodoList