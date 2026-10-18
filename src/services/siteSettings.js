import { supabase } from "../lib/supabase";
export const DEFAULT_SETTINGS = {monthly_price:499, yearly_price:4999, whatsapp_number:"", hero_image_url:"", about_image_url:""};
export async function getSiteSettings() {
 const {data,error}=await supabase.from("site_settings").select("monthly_price,yearly_price,whatsapp_number,hero_image_url,about_image_url").eq("id",1).maybeSingle();
 if(error) { console.error("Site settings unavailable",error); return DEFAULT_SETTINGS; }
 return {...DEFAULT_SETTINGS,...data};
}
export async function saveSiteSettings(values) {
 const {error}=await supabase.from("site_settings").update(values).eq("id",1);
 if(error) throw error;
}
export async function uploadSiteImage(slot,file) {
 if(!file.type.startsWith("image/") || !["image/jpeg","image/png","image/webp"].includes(file.type)) throw new Error("Use PNG, JPEG or WebP image.");
 if(file.size>5*1024*1024) throw new Error("Maximum image size is 5 MB.");
 const extension=file.type==="image/png"?"png":file.type==="image/webp"?"webp":"jpg";
 const path=`${slot}/${crypto.randomUUID()}.${extension}`;
 const {error}=await supabase.storage.from("site-images").upload(path,file,{contentType:file.type,upsert:false});
 if(error) throw error;
 const {data}=supabase.storage.from("site-images").getPublicUrl(path);
 return data.publicUrl;
}
