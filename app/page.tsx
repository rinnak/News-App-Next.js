import Image from "next/image";
import {getSortedNews} from "@/data/news";
import Style from "./layout.module.css"
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {

    const news = await getSortedNews();
  return (
    <div className={Style.Grid}>
        {news.map((item) => (
            <Link
                key={item.id}
                href={`/news/${item.id}`}
                className={Style.CardLink}
            >
                <div  className={Style.Card}>
                    {item.attachments?.[0]?.image?.src && (
                        <div className={Style.ImageWrapper}>
                            <Image
                                src={item.attachments[0].image.src}
                                alt = "Избражение новости"
                                width = {400}
                                height = {225}
                                className={Style.Image}
                            />
                        </div>
                    )}
                    <div className={Style.Content}>
                        <span className={Style.Type}>{item.type}</span>
                        <p className = {Style.Text}>{item.text.substring(0, 150)}...</p>
                        <p className={Style.Date}>
                            {new Date(item.date * 1000).toLocaleDateString("ru-RU")}
                        </p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
  );
}
