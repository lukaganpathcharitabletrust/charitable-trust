import React, { useState, useEffect } from 'react';

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: 30, label: 'Lives Impacted', suffix: '+' },
  { value: 1, label: 'Projects Completed' },
  { value: 1, label: 'Village Reached' },
  { value: 1, label: 'Year of Service' },
];

const ImpactStats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('impact-stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameRate = 30; // frames per second
    const totalFrames = duration / 1000 * frameRate;
    
    let frame = 0;
    const timerId = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      if (frame <= totalFrames) {
        setCounts(
          stats.map((stat) => Math.floor(stat.value * progress))
        );
      } else {
        setCounts(stats.map((stat) => stat.value));
        clearInterval(timerId);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timerId);
  }, [isVisible]);

  return (
    <section id="impact-stats" className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bold text-3xl md:text-4xl lg:text-5xl mb-2">
                {stat.prefix || ''}{counts[index].toLocaleString()}{stat.suffix || ''}
              </div>
              <p className="text-teal-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;