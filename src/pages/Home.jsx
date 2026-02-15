import supabase from "../config/supabaseClient.js";
import { useEffect, useState } from "react";

// components
import SmoothieCard from "../components/SmoothieCard.jsx";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("Smoothies").select("*");

      // console.log("DATA:", data);
      // console.log("ERROR:", error);

      if (error) {
        console.log(error);
      } else {
        setSmoothies(data);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}

      {smoothies && (
        <div className="smoothies">
          {smoothies.map((smoothie) => (
            <SmoothieCard key={smoothie.id} smoothie={smoothie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
