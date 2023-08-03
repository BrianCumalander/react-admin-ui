import "./menu.scss"
import { Link } from "react-router-dom"
import { menu } from "../../data"

// left menu column data comes from the data.ts JSON formatted file (import menu from ....noted above).
 const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        {item.listItems.map((listItem) => (
          <Link to="/" className="listItem" key={listItem.id}>
          <img src={listItem.icon} alt="" />
          <span className="ListItemTitle">{listItem.title}</span>
        </Link>
        ))}
      </div>
      ))}
    </div>
  )
}

export default Menu;
