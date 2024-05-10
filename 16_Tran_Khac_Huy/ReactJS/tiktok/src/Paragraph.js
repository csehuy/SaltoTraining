import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph() {

    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Nay F8 tạo nhóm "ReactJS Việt Nam" mới, với mong muốn mang lại môi trường tốt hơn cho việc chia sẻ, học tập kiến thức liên quan tới ReactJS tại Việt Nam
        </p>
    )
}

export default Paragraph