import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-pink-100 text-pink-900 font-sans overflow-hidden">
      {/* Confetti Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-current rounded-full animate-fall"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Birthday Message */}
      <h1 className="text-5xl font-bold mb-4 z-10">🎉 Happy Birthday Rahul! 🎂</h1>
      <p className="text-xl mb-8 z-10">
        Wishing you a day filled with love, laughter, and all your favorite things! 🎁✨
      </p>

      {/* Cake and Balloons */}
      <div className="flex flex-col items-center text-4xl z-10">
        <span className="mb-4">🎂</span>
        <span className="animate-float">🎈🎈🎈</span>
      </div>
    </div>
  );
};

export default Home;