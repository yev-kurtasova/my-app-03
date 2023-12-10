function Topics({ data }) {

    return (
        <div className="SideBar">
            <nav>
                {data.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.href}>{item.title}</a>
                    </li>
                )
            })}
            </nav>
            
        </div>
    )
}

export default Topics;