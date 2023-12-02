import Item from "./Item"

const List = ({ listData }) => {
    return <div className="list">
        {
            listData.map(item => {
                // 將值解構
                const { note, date, time } = item
                // 將解構的值傳給 item
                return <Item note={note} date={date} time={time} />
            })
        }
    </div>
}

export default List