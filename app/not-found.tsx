import Style from "./notfound.module.css"

export default function NotFound(){

    return(
        <div className={Style.Container}>
            <div className={Style.Content}>
                <h1 className={Style.ErrorCode}>404</h1>
                <p className={Style.Description}>Похоже, эта новость еще не написана</p>
            </div>
        </div>
    )

}
