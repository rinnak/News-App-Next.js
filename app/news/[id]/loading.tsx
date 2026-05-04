import Style from "./loading.module.css"

export default function Loading(){
    return (
        <div className={Style.Container}>
            <h1 className={Style.Text}>Идет загрузка новости, пожалуйста, будьте терпеливы.</h1>
        </div>
    )
}