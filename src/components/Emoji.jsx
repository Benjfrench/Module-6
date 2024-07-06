import React, { useState } from 'react';

const Emoji = () => {
  const [emoji, setEmoji] = useState('😊');

  const changeMood = () => {
    const emojis = ['😊', '😂', '😢', '😡', '😜', '😎'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
  };

  return (
    <div>
      <div>
        {emoji}
      </div>
      <div>
        <button onClick={changeMood}>
          change mood
        </button>
      </div>
    </div>
  );
};

export default Emoji;