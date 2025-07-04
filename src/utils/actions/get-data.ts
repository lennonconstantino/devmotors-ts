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