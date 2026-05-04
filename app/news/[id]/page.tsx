import {getNewsById, getSortedNews} from "@/data/news";
import Style from "../../layout.module.css";
import Image from "next/image";
import {notFound} from "next/navigation";


export async function generateStaticParams(){
    const news = await getSortedNews();
    console.log("generateStaticParams:", news.length);
    return news.map((item) => ({
        id: item.id.toString(),
    }));
}

interface NewsPageProps {
    params: Promise<{ id: string }>
}

export default async function NewsPage({params}: NewsPageProps){
    const { id } = await params;
    console.log("Ищем новость с ID:", id);

    const item = await getNewsById(id);
    console.log("Результат поиска:", item ? "Найдено" : "НЕ НАЙДЕНО");

    if (!item) notFound();

    return(
        <div className={Style.Container}>
            <h1 className={Style.NewTitle}>Новость {id}</h1>
            {item.attachments?.[0]?.image?.src && (
                <div className={Style.ImageWrapper}>
                    <Image
                        src={item.attachments[0].image.src}
                        alt="Фото новости"
                        fill
                        priority
                        className={Style.Image}
                    />
                </div>
            )}

            <div className={Style.Content}>
                <p className={Style.Text}>{item.text}</p>
            </div>
        </div>
    )
}