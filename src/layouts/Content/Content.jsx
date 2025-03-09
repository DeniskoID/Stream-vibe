import classNames from "classnames"
import "./Content.scss"

const Content = (props) => {
  const { children, isResetPaddingTop = false, overflowXClip = false } = props
  return (
    <main
      className={classNames("content", {
        "overflow-x-clip": overflowXClip,
        "content--reset-padding-top": isResetPaddingTop,
      })}
    >
      {children}
    </main>
  )
}

export default Content
