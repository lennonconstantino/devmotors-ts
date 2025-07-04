import { redirect } from "next/navigation";

export async function getDataHome(){
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects/6867e45ee2edd1616a319047?read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`)

    if(!res.ok){
      throw new Error("Failed to fetch data")
    }

    return res.json();

  }catch(err){
    throw new Error("Failed to fetch data")
  }
}

export async function getSubMenu(){
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title`, { next: { revalidate: 120 } })

    if(!res.ok){
      throw new Error("Failed to fetch menu data")
    }

    return res.json();

  }catch(err){
    throw new Error("Failed to fetch menu data")
  }
}

export async function getItemBySlug(itemSlug: string){
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects`

  // Definindo o objeto de consulta pelo slug
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug
    }),
    props: 'slug,title,content,metadata',
    read_key: process.env.COSMIC_READ_KEY as string
  })

  const url = `${baseUrl}?${queryParams.toString()}`;

  try{

    const res = await fetch(url, { next: { revalidate: 120 } })

    if(!res.ok){
      throw new Error("Failed get item by slug")
    }

    return res.json();

  }catch(err){
    //console.log(err);
    redirect("/")
  }

}
