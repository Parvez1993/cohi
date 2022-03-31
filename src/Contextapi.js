import React, { useContext, useEffect, useState } from "react";
//step 1
import { db, auth } from "./utility/firebase";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const getLocalStorage = () => {
    let results = localStorage.getItem("results");
    if (results) {
      return JSON.parse(localStorage.getItem("results"));
    } else {
      return "";
    }
  };

  const [user, setUser] = useState("");
  const [personality, setPersonality] = useState("Introvert");
  const [type, setType] = useState("Indoor");
  const [category, setCategory] = useState("Dining");
  const [location, setLocation] = useState("Austin");
  const [alert, setAlert] = useState(false);
  const [results, setResults] = useState(getLocalStorage());
  const [msg, setMsg] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      if (result) {
        db.collection("User")
          .doc(result.uid)
          .get()
          .then((querySnapshot) => {
            setUser(querySnapshot.data());
          });
      }
    });
  }, [setUser]);
  useEffect(() => {
    // storing input name
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  //hide messages //////////////////////////////////////

  //hide messages
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setMsg("");
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, [msg]);

  const handleMatch = () => {
    if ((!type, !personality, !category, !location)) {
      setMsg("Please select the options to proceed");
    }
    if (type === "Indoor" && category === "Dining" && location === "Austin") {
      setResults([
        {
          img: "https://live.staticflickr.com/65535/50193706516_0ec276b869_b.jpg",
          name: "Terrys black BBQ",
        },
        {
          img: "https://www.juliesnoodle.com/img/gallery/9.jpg",
          name: "Julie's Noodles",
        },
      ]);
    } else if (
      type === "Outdoors" &&
      category === "Fitness" &&
      location === "Austin"
    ) {
      setResults([
        {
          img: "https://cdn.pixabay.com/photo/2018/06/11/16/14/austin-3468775_960_720.jpg",
          name: "Lady Bird Lake Hike-and-Bike Trail",
        },
      ]);
    } else if (
      type === "Outdoors" &&
      category === "Sports" &&
      location === "Austin"
    ) {
      setResults([
        {
          img: "https://imageio.forbes.com/specials-images/imageserve/60d3768a70e201d28867c3d3/0x0.jpg?format=jpg&width=1200&fit=bounds",
          name: "Austin FC",
        },
      ]);
    } else if (
      type === "Indoor" &&
      category === "Grocery Shopping" &&
      location === "Austin"
    ) {
      setResults([
        {
          img: "https://live.staticflickr.com/8045/8088561213_e030542600_h.jpg",
          name: "Whole Foods ",
        },
      ]);
    }

    //san fransico
    else if (
      type === "Indoor" &&
      category === "Dining" &&
      location === "San Francisco"
    ) {
      setResults([
        {
          img: "https://media-cdn.tripadvisor.com/media/photo-s/14/f3/f7/cb/la-taqueria.jpg",
          name: "La Taqueria",
        },
      ]);
    } else if (
      type === "Outdoors" &&
      category === "Fitness" &&
      location === "San Francisco"
    ) {
      setResults([
        {
          img: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Walk Goldern Gate Park",
        },
      ]);
    } else if (
      type === "Outdoors" &&
      category === "Sports" &&
      location === "San Francisco"
    ) {
      setResults([
        {
          img: "https://cdn.pixabay.com/photo/2016/12/05/00/28/san-francisco-1882882_960_720.jpg",
          name: "Giants Game",
        },
      ]);
    } else if (
      type === "Indoor" &&
      category === "Grocery Shopping" &&
      location === "San Francisco"
    ) {
      setResults([
        {
          img: "https://zerowastetraveldiary.com/images/resources/rainbow/IMG_7704.jpeg",
          name: "Rainbow Grocery",
        },
      ]);
    }

    //Chicago
    else if (
      type === "Indoor" &&
      category === "Dining" &&
      location === "Chicago"
    ) {
      setResults([
        {
          img: "https://www.gannett-cdn.com/-mm-/82b6b1150bd689a0afad36594bff70d1bc302b30/c=0-425-4616-3033/local/-/media/2016/10/26/Phoenix/Phoenix/636130828004947333-Lou-Malnati-s.jpg",
          name: "Lou Malnati",
        },
      ]);
    } else if (
      type === "Outdoors" &&
      category === "Fitness" &&
      location === "Chicago"
    ) {
      setResults([
        {
          img: "https://cdn.choosechicago.com/uploads/2019/06/AA_BeachFullerton_02-900x600.jpg",
          name: "Walk along the lake",
        },
      ]);
    } else if (
      type === "Outdoors" &&
      category === "Sports" &&
      location === "Chicago"
    ) {
      setResults([
        {
          img: "https://www.enjoyillinois.com/assets/Tourism-Operators/images/ChicagoCubs-RobertCampion.jpg",
          name: "Cubs Game at Wrigley Field",
        },
      ]);
    } else if (
      type === "Indoor" &&
      category === "Grocery Shopping" &&
      location === "Chicago"
    ) {
      setResults([
        {
          img: "https://en.wikipedia.org/wiki/Trader_Joe%27s#/media/File:Trader_Joes_in_Amherst,_NY_-_2018.jpg",
          name: "Trader Joes",
        },
      ]);
    }
    //Toronto
    else if (
      type === "Indoor" &&
      category === "Dining" &&
      location === "Toronto"
    ) {
      setResults([
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/St_Lawerence_South_Market_Exterior_202112.jpg/1280px-St_Lawerence_South_Market_Exterior_202112.jpg",
          name: "St. Lawrence Market",
        },
      ]);
    } else if (
      type === "Outdoors" &&
      category === "Fitness" &&
      location === "Toronto"
    ) {
      setResults([
        {
          img: "http://spinlister-blog.s3.amazonaws.com/2016/06/Randalls-Island-Park-8.jpg",
          name: "Bike Ward's Island",
        },
      ]);
    } else if (
      type === "Outdoors" &&
      category === "Sports" &&
      location === "Toronto"
    ) {
      setResults([
        {
          img: "https://cms.nhl.bamgrid.com/images/photos/325037104/1024x576/cut.jpg",
          name: "Maple Leaves Game",
        },
      ]);
    } else if (
      type === "Indoor" &&
      category === "Grocery Shopping" &&
      location === "Toronto"
    ) {
      setResults([
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Loblaws_in_Heartland_Town_Centre_interior_2021.jpg/1280px-Loblaws_in_Heartland_Town_Centre_interior_2021.jpg",
          name: "Loblaws",
        },
      ]);
    } else {
      setResults([
        {
          img: "https://cdn.pixabay.com/photo/2020/04/22/18/22/excuse-me-5079442_960_720.jpg",
          name: "Sorry! No Matches Found. Try Again",
        },
      ]);
    }
  };

  let value = {
    setPersonality,
    setType,
    setCategory,
    setLocation,
    handleMatch,
    results,
    setResults,
    user,
    setUser,
    alert,
    setAlert,
    msg,
    setMsg,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export function useStore() {
  return useContext(StoreContext);
}
