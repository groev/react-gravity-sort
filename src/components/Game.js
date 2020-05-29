import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { data, config } from "../util";
import { Item } from "../components";

export default function Game() {
  const history = useHistory();
  const { buckets, items } = data;
  const [liveItems, setLiveItems] = useState([]);
  const [points, setPoints] = useState(0);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState(0);
  const [fallingTime, setFallingTime] = useState(config.fallingTime);

  useEffect(() => {
    addRandomItem();
    setInterval(function() {
      addRandomItem();
    }, config.interval * 1000);
  }, []);

  function addRandomItem() {
    const len = items.length;
    const randomNumber = Math.floor(Math.random() * Math.floor(len));
    const randomItem = items[randomNumber];
    setLiveItems(prevItems => [...prevItems, randomItem]);
  }

  function checkAndUpdatePoints(x, bucket) {
    const bucketIndex = buckets.findIndex(b => b.slug === bucket);
    const bucketSize = window.innerWidth / buckets.length;
    const maxX = (bucketIndex + 1) * bucketSize;
    const minX = bucketIndex * bucketSize;

    setFallingTime(prevTime => prevTime * 0.95);
    if (x <= maxX && x >= minX) {
      setPoints(points + 1);
    } else {
      const newErrorCount = errors + 1;
      if (newErrorCount > config.maxErrors) {
        history.push("/lost");
      }
      setErrors(newErrorCount);
      showError();
    }
  }

  function showError() {
    setError(true);
    setTimeout(function() {
      setError(false);
    }, 500);
  }

  return (
    <div id="Game">
      {error && <div className="error"></div>}
      <div className="counter">{points}</div>
      <div className="items">
        {liveItems &&
          liveItems.map((item, idx) => {
            return (
              <Item
                fallingTime={fallingTime}
                checkAndUpdatePoints={checkAndUpdatePoints}
                item={item}
                key={idx}
              />
            );
          })}
      </div>
      <div className="buckets">
        {buckets &&
          buckets.map((bucket, idx) => (
            <div key={bucket.slug} className={"bucket " + bucket.slug}>
              {bucket.name}
            </div>
          ))}
      </div>
    </div>
  );
}
