import { useState, useEffect } from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function SpaceWeek() {
  const [darkMode, setDarkMode] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date("2025-10-04T10:00:00").getTime(); // Space Week is usually in early October
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Space Week Pakistan 2025</title>
        <meta name="description" content="Celebrate Space Week! Join us for astronomy talks, rocket workshops, and stargazing sessions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={darkMode ? "bg-[#0A0A23] text-white" : "bg-white text-black"}>
      {/* Fixed Navbar with smooth scroll links */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg flex justify-between items-center p-4 md:p-6 max-w-6xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold">Space Week Pakistan</h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#hero" className="hover:text-[#FFD700] transition-colors">Home</a>
          <a href="#speakers" className="hover:text-[#FFD700] transition-colors">Speakers</a>
          <a href="#schedule" className="hover:text-[#FFD700] transition-colors">Schedule</a>
          <a href="#guidelines" className="hover:text-[#FFD700] transition-colors">Guidelines</a>
          <a href="#register" className="hover:text-[#FFD700] transition-colors">Register</a>
        </nav>
        <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </header>

      {/* Hero Section */}
      <section id="hero" className="text-center py-24 px-4 mt-20">
        <motion.img
          src="/spaceweek_logo.png" // <-- Replace with your Space Week logo file
          alt="Space Week Logo"
          className="mx-auto w-48 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        />
        <h2 className="text-4xl font-bold mb-4">Explore the Universe with Us</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Celebrate Space Week with inspiring talks, hands-on workshops, and stargazing sessions. Discover the wonders of the cosmos!
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {[['Days', timeLeft.days], ['Hours', timeLeft.hours], ['Minutes', timeLeft.minutes], ['Seconds', timeLeft.seconds]].map(([label, value], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="text-center bg-[#FFD700] text-black px-4 md:px-6 py-3 rounded-2xl shadow-lg min-w-[80px]"
            >
              <p className="text-2xl font-bold">{String(value).padStart(2, '0')}</p>
              <p className="text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
        <a href="#register">
          <Button className="bg-[#1E90FF] hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg">
            Register Now
          </Button>
        </a>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Speakers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Dr. Ayesha Khan", affiliation: "Pakistan Space & Upper Atmosphere Research Commission (SUPARCO)" },
            { name: "Prof. Imran Siddiqui", affiliation: "Astrophysics Department, Quaid-i-Azam University" },
            { name: "Dr. Sana Malik", affiliation: "International Astronomical Union" }
          ].map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="bg-[#1B1B2F] rounded-2xl shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#1E90FF] to-[#FFD700] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{speaker.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{speaker.name}</h4>
                  <p className="text-sm opacity-80">{speaker.affiliation}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Schedule</h3>
        <div className="grid gap-4">
          {[
            { time: "9:00 AM", event: "Welcome & Registration", type: "Welcome" },
            { time: "9:30 AM", event: "The Wonders of the Universe", type: "Keynote" },
            { time: "10:30 AM", event: "Astronomy Workshop", type: "Workshop" },
            { time: "11:30 AM", event: "Coffee Break", type: "Break" },
            { time: "12:00 PM", event: "Rocket Building Activity", type: "Hands-on" },
            { time: "1:00 PM", event: "Lunch Break", type: "Break" },
            { time: "2:00 PM", event: "Space Science Panel", type: "Panel Discussion" },
            { time: "3:00 PM", event: "Stargazing Preparation", type: "Workshop" },
            { time: "7:00 PM", event: "Stargazing Night", type: "Outdoor" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1B1B2F] p-6 rounded-2xl shadow-md flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                <div>
                  <h4 className="text-lg font-semibold">{item.event}</h4>
                  <p className="text-sm opacity-70">{item.type}</p>
                </div>
              </div>
              <span className="text-[#FFD700] font-bold">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Guidelines</h3>
        <p className="opacity-80">Event guidelines, safety instructions, and stargazing tips will be uploaded here closer to the date.</p>
      </section>

      {/* Registration Section */}
      <section id="register" className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Register</h3>
        <iframe
          src="https://docs.google.com/forms/d/e/PLACEHOLDER/viewform?embedded=true"
          width="100%"
          height="600"
          className="rounded-2xl border-2 border-gray-500"
        >
          Loading…
        </iframe>
      </section>

      <footer className="text-center py-6 opacity-70 text-sm">
        © 2025 Space Week Pakistan. Powered by the National Planetarium Association.
      </footer>
      </div>
    </>
  );
}