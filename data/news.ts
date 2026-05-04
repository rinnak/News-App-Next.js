import data from "./data.json";


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getSortedNews(){
    const sorted = [...data].sort((a, b) => b.date - a.date);
    return sorted;
}

export async function getNewsById(id: string | number){
    await delay(1000);
    const found = data.find((item) => String(item.id) === String(id));
    return found;
}