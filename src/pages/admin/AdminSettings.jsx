import { useEffect, useState } from "react";
import AdminNav from "../../components/admin/AdminNav";
import { DEFAULT_SETTINGS, getSiteSettings, saveSiteSettings, uploadSiteImage } from "../../services/siteSettings";
export default function AdminSettings() {
 const [form,setForm]=useState(DEFAULT_SETTINGS);
 const [files,setFiles]=useState({});
 const [busy,setBusy]=useState(false);
 const [message,setMessage]=useState("");
 useEffect(()=>{getSiteSettings().then(setForm)},[]);
 const change=(key,value)=>setForm(old=>({...old,[key]:value}));
 async function save(e){e.preventDefault();setBusy(true);setMessage("");try{
  const data={...form,monthly_price:Number(form.monthly_price),yearly_price:Number(form.yearly_price)};
  if(!Number.isInteger(data.monthly_price)||data.monthly_price<0||!Number.isInteger(data.yearly_price)||data.yearly_price<0)throw new Error("Enter valid nonnegative rupee amounts.");
  if(data.whatsapp_number && !/^\d{10,15}$/.test(data.whatsapp_number))throw new Error("WhatsApp number must be 10–15 digits with country code, no +.");
  for(const [slot,key] of [["hero","hero_image_url"],["about","about_image_url"]]){if(files[slot])data[key]=await uploadSiteImage(slot,files[slot]);}
  await saveSiteSettings(data);setForm(data);setFiles({});setMessage("Settings saved successfully. Refresh homepage to see images.");
 }catch(err){setMessage(err.message)}finally{setBusy(false)}}
 return <main className="min-h-screen bg-[#07090c] px-5 py-24 text-white"><div className="mx-auto max-w-5xl"><AdminNav/><h1 className="text-3xl font-bold">Website Settings</h1><p className="mt-2 text-gray-400">Edit subscription prices, contact number and homepage images.</p><form onSubmit={save} className="mt-8 space-y-7 rounded-3xl border border-white/10 bg-[#0d1217] p-6">
 <div className="grid gap-5 md:grid-cols-2">{[["monthly_price","Monthly subscription (₹)"],["yearly_price","Yearly subscription (₹)"]].map(([key,label])=><label key={key} className="block text-sm">{label}<input type="number" min="0" step="1" required value={form[key]} onChange={e=>change(key,e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-3"/></label>)}</div>
 <label className="block text-sm">WhatsApp number (country code + number, digits only; e.g. 919876543210)<input value={form.whatsapp_number} onChange={e=>change("whatsapp_number",e.target.value)} placeholder="Add client's WhatsApp number" className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-3"/></label>
 <div className="grid gap-6 md:grid-cols-2">{[["hero","Hero homepage photo","hero_image_url"],["about","About homepage photo","about_image_url"]].map(([slot,label,key])=><label key={slot} className="block text-sm">{label}{form[key]&&<img src={form[key]} alt={label} className="mt-3 h-48 w-full rounded-xl object-contain"/>}<input type="file" accept="image/png,image/jpeg,image/webp" onChange={e=>setFiles(old=>({...old,[slot]:e.target.files?.[0]}))} className="mt-3 block w-full text-sm"/><span className="mt-2 block text-xs text-gray-400">PNG, JPG or WebP, max 5 MB</span></label>)}</div>
 {message&&<p role="status" className="text-sm text-emerald-300">{message}</p>}<button disabled={busy} className="rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-black disabled:opacity-50">{busy?"Saving...":"Save settings"}</button>
 </form></div></main>;
}
