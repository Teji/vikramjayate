import { useEffect, useState } from "react";
import RecommendationsSection from "./RecommendationsSection";
import { getRecommendations } from "../../services/recommendations";
export default function RecommendationsFeed() {
 const [items,setItems] = useState([]);
 useEffect(() => { let alive=true; getRecommendations().then(data=>{if(alive)setItems(data)}).catch(console.error);return ()=>{alive=false}; },[]);
 return <RecommendationsSection recommendations={items} />;
}
