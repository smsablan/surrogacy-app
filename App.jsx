import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CalendarDays, NotebookText, Sparkles } from "lucide-react";

const weekData = [
  {
    week: 1,
    size: "Poppy Seed",
    emoji: "🌱",
    baby: "Fertilization may be near! Your baby is still a few cells, but the journey is starting.",
    carrier: "Your gestational carrier’s body is preparing for implantation. Hormone levels are adjusting.",
    prompt: "What emotions come up as this journey begins?"
  },
  {
    week: 2,
    size: "Sesame Seed",
    emoji: "🌾",
    baby: "Ovulation and fertilization typically occur this week. The embryo is forming.",
    carrier: "Your carrier’s body continues preparing with rising hormone levels.",
    prompt: "What are your hopes for the weeks ahead?"
  },
  {
    week: 3,
    size: "Rice Grain",
    emoji: "🍚",
    baby: "The embryo begins implanting into the uterine lining.",
    carrier: "She may not feel symptoms yet, but amazing changes are happening.",
    prompt: "What makes you feel most connected to this process?"
  },
  {
    week: 4,
    size: "Poppy Seed",
    emoji: "🌺",
    baby: "Implantation is complete and hCG levels are rising. A pregnancy test will show a positive soon!",
    carrier: "She might begin to feel light fatigue or mild cramping.",
    prompt: "How did you feel when you first got the positive news?"
  },
  {
    week: 5,
    size: "Apple Seed",
    emoji: "🍎",
    baby: "Your baby is the size of an apple seed! Major organs are starting to form, including the heart, brain, and spinal cord.",
    carrier: "She may start feeling early symptoms like fatigue or nausea. Offer support and stay connected emotionally.",
    prompt: "What do I hope my child will feel about their birth story when they’re older?"
  }
];

for (let i = 6; i <= 40; i++) {
  weekData.push({
    week: i,
    size: `Week ${i} Fruit`,
    emoji: "🍉",
    baby: `Week ${i} baby development details go here...`,
    carrier: `Week ${i} gestational carrier updates go here...`,
    prompt: `Week ${i} journal prompt...`
  });
}

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState(5);
  const current = weekData.find(w => w.week === selectedWeek);

  return (
    <main className="min-h-screen bg-gradient-to-b from-mint-100 to-white p-4 font-sans text-gray-800">
      <div className="max-w-md mx-auto">
        <header className="flex flex-col items-center text-center mb-6">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/24/20/50/family-6572359_960_720.png"
            alt="Diverse Family"
            className="w-32 h-32 mb-4 rounded-full shadow-md object-cover"
          />
          <h1 className="text-2xl font-bold">Week {current.week}: Baby is the Size of a {current.size} {current.emoji}</h1>
          <p className="text-sm text-gray-600 mt-2">Welcome to your surrogacy journey.</p>

          <div className="mt-4">
            <label className="text-sm font-medium">Select Week:</label>
            <select
              className="block w-full mt-1 rounded-xl border-gray-300 shadow-sm"
              value={selectedWeek}
              onChange={e => setSelectedWeek(Number(e.target.value))}
            >
              {weekData.map(w => (
                <option key={w.week} value={w.week}>Week {w.week}</option>
              ))}
            </select>
          </div>
        </header>

        <Tabs defaultValue="updates" className="w-full">
          <TabsList className="flex justify-around bg-white rounded-xl shadow-md">
            <TabsTrigger value="updates" className="flex items-center gap-1">
              <Sparkles className="w-4 h-4" /> Updates
            </TabsTrigger>
            <TabsTrigger value="journal" className="flex items-center gap-1">
              <NotebookText className="w-4 h-4" /> Journal
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" /> Calendar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="updates">
            <Card className="mt-4 bg-white rounded-2xl shadow p-4">
              <CardContent>
                <h2 className="text-lg font-semibold mb-2">Baby Development</h2>
                <p>{current.baby}</p>
                <h2 className="text-lg font-semibold mt-4 mb-2">Carrier’s Body</h2>
                <p>{current.carrier}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="journal">
            <Card className="mt-4 bg-white rounded-2xl shadow p-4">
              <CardContent>
                <h2 className="text-lg font-semibold mb-2">Journal Prompt</h2>
                <p>"{current.prompt}"</p>
                <Button className="mt-4">Write Entry</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card className="mt-4 bg-white rounded-2xl shadow p-4">
              <CardContent>
                <h2 className="text-lg font-semibold mb-2">Upcoming Appointments</h2>
                <ul className="list-disc list-inside">
                  <li>Check on growth milestones</li>
                  <li>Communicate with gestational carrier</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}