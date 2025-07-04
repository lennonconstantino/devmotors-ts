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
    // https://api.cosmicjs.com/v3/buckets/devmotors-production-18f216d0-58e1-11f0-95bf-35fa56e89665/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=rJNsGI5rE03zjr9d0CpBTdJfYUWVikLh5XwGOu5GE3ZOvFlNEE&depth=1&props=slug,title,
    //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title`, { next: { revalidate: 120 } })
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title`, { next: { revalidate: 120 } })

    if(!res.ok){
      throw new Error("Failed to fetch menu data")
    }

    return res.json();

  }catch(err){
    throw new Error("Failed to fetch menu data")
  }
}