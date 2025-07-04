export async function getDataHome(){
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects/6867e45ee2edd1616a319047?read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`)
    //const res = await fetch(`https://api.cosmicjs.com/v3/buckets/devmotors-production-18f216d0-58e1-11f0-95bf-35fa56e89665/objects/6867e45ee2edd1616a319047?pretty=true&read_key=rJNsGI5rE03zjr9d0CpBTdJfYUWVikLh5XwGOu5GE3ZOvFlNEE&depth=1&props=slug,title,metadata,type`)
    //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects/6867e45ee2edd1616a319047?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)
    //NEXT_PUBLIC_API_URL=https://api.cosmicjs.com/v3/buckets
    //COSMIC_BUCKET_SLUG=devmotors-production-18f216d0-58e1-11f0-95bf-35fa56e89665
    if(!res.ok){
      throw new Error("Failed to fetch data")
    }

    return res.json();

  }catch(err){
    throw new Error("Failed to fetch data")
  }
}