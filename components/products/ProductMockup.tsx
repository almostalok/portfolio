"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, User, CheckCircle2, Award, Clock } from "lucide-react";

export function HospateMockup() {
  return (
    <div className="w-full bg-[#FAFAF8] rounded-xl border border-[#E8E8E2] p-3 text-[11px] font-sans select-none">
      {/* Mini App Header */}
      <div className="flex items-center justify-between border-b border-[#EFEFEA] pb-2 mb-3">
        <div className="flex items-center gap-1.5 font-bold font-mono text-[10px] text-[#111318]">
          <span className="w-2 h-2 rounded-full bg-[#111318]" />
          <span>Dashboard</span>
          <span className="text-[#8E929E] font-normal">/ Clinic Analytics</span>
        </div>
        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#EFEFEA] text-[#111318]">
          LIVE
        </span>
      </div>

      {/* Mini Stat Cards */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white p-2 rounded-lg border border-[#E8E8E2]">
          <span className="text-[9px] text-[#686868] uppercase font-mono">Total Patients</span>
          <div className="text-base font-bold font-display text-[#111318]">12,540</div>
          <span className="text-[8px] text-[#27C93F] font-mono">+14% this month</span>
        </div>
        <div className="bg-white p-2 rounded-lg border border-[#E8E8E2]">
          <span className="text-[9px] text-[#686868] uppercase font-mono">Appointments</span>
          <div className="text-base font-bold font-display text-[#111318]">1,320</div>
          <span className="text-[8px] text-[#F4C400] font-mono font-bold">98% completed</span>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-lg border border-[#E8E8E2] overflow-hidden">
        <div className="px-2.5 py-1.5 bg-[#F6F6F2] border-b border-[#E8E8E2] text-[9px] font-mono text-[#686868] flex justify-between">
          <span>Patient &amp; Diagnosis</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-[#F6F6F2]">
          {[
            { name: "Aarav Sharma", id: "#EHR-902", status: "Admitted", doc: "Dr. Roy" },
            { name: "Priya Nair", id: "#EHR-903", status: "Discharged", doc: "Dr. Sen" },
            { name: "Rahul Verma", id: "#EHR-904", status: "Lab Ready", doc: "Dr. Roy" },
          ].map((item) => (
            <div key={item.id} className="px-2.5 py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#F6F6F2] border border-[#D9D9D4] flex items-center justify-center text-[9px] font-bold text-[#111318]">
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-[10px] text-[#111318]">{item.name}</div>
                  <div className="text-[8px] text-[#686868] font-mono">{item.id} · {item.doc}</div>
                </div>
              </div>
              <span className="px-1.5 py-0.5 rounded-full text-[8px] font-mono bg-[#FFF7D1] text-[#111318] border border-[#F4C400]/40 font-medium">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UnHackMockup() {
  return (
    <div className="w-full bg-[#111318] text-white rounded-xl border border-[#282A30] p-3 text-[11px] font-sans select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#282A30] pb-2 mb-2.5">
        <span className="font-mono text-[10px] font-bold tracking-wider text-[#F4C400]">
          LEADERBOARD
        </span>
        <span className="text-[9px] font-mono text-[#8E929E]">48 Submissions</span>
      </div>

      {/* Leaderboard Ranks */}
      <div className="space-y-1 mb-3">
        {[
          { rank: 1, team: "Team Zero", score: "98.4", active: true },
          { rank: 2, team: "Bytecoder", score: "96.2", active: false },
          { rank: 3, team: "CodeStorm", score: "95.1", active: false },
          { rank: 4, team: "BitHoppers", score: "91.8", active: false },
        ].map((t) => (
          <div
            key={t.team}
            className={`flex items-center justify-between px-2.5 py-1 rounded-md text-[10px] ${
              t.active
                ? "bg-[#1F222B] border border-[#F4C400]/40 text-white font-semibold"
                : "text-[#A0A4B0] hover:bg-[#171920]"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`w-4 text-center font-mono ${t.rank === 1 ? "text-[#F4C400]" : "text-[#686868]"}`}>
                {t.rank}
              </span>
              <span>{t.team}</span>
            </div>
            <span className={`font-mono ${t.active ? "text-[#F4C400]" : "text-white"}`}>
              {t.score}
            </span>
          </div>
        ))}
      </div>

      {/* Judging Breakdown Box */}
      <div className="bg-[#171920] rounded-lg p-2 border border-[#282A30] text-[9px] font-mono">
        <div className="text-[#8E929E] uppercase mb-1.5 pb-1 border-b border-[#282A30] flex justify-between">
          <span>Judging Rubric</span>
          <span className="text-[#F4C400]">Weight: 100%</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[#D0D4E0]">
            <span>Problem Solving</span>
            <span>38/40</span>
          </div>
          <div className="flex justify-between text-[#D0D4E0]">
            <span>Innovation</span>
            <span className="text-[#F4C400]">21/20</span>
          </div>
          <div className="flex justify-between text-[#D0D4E0]">
            <span>Impact</span>
            <span>20/20</span>
          </div>
          <div className="flex justify-between text-[#D0D4E0]">
            <span>Presentation</span>
            <span>15/20</span>
          </div>
          <div className="flex justify-between font-bold text-white pt-1 border-t border-[#282A30]">
            <span className="text-[#F4C400]">Total Normalized</span>
            <span className="text-[#F4C400]">94/100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrupmateMockup() {
  const [seconds, setSeconds] = useState(1500); // 25:00
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((sec) => sec - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainderSecs.toString().padStart(2, "0")}`;
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(1500);
  };

  return (
    <div className="w-full bg-[#FFFFFF] rounded-xl border border-[#E8E8E2] p-3 text-[11px] font-sans select-none shadow-sm">
      {/* Top Study Room Header */}
      <div className="flex items-center justify-between border-b border-[#EFEFEA] pb-2 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
          <span className="font-bold text-[10px] text-[#111318]">Deep Work Room 03</span>
        </div>
        <span className="text-[9px] font-mono text-[#686868]">4 studying</span>
      </div>

      <div className="grid grid-cols-12 gap-3 items-center">
        {/* Left: Study Room Active Members */}
        <div className="col-span-5 border-r border-[#EFEFEA] pr-2 space-y-1.5">
          <span className="text-[8px] font-mono uppercase text-[#686868] tracking-wide block mb-1">
            Peers
          </span>
          {[
            { name: "Aman", status: "Coding", color: "#F4C400" },
            { name: "Riya", status: "Reading", color: "#27C93F" },
            { name: "Sakshi", status: "Design", color: "#3178C6" },
            { name: "You", status: "Focus", color: "#111318" },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-1.5">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                style={{ backgroundColor: m.color }}
              >
                {m.name[0]}
              </div>
              <div className="truncate">
                <div className="font-medium text-[9px] text-[#111318] truncate leading-tight">
                  {m.name}
                </div>
                <div className="text-[7px] text-[#686868] font-mono">{m.status}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Working Pomodoro Timer */}
        <div className="col-span-7 flex flex-col items-center justify-center text-center pl-1">
          <span className="text-[8px] font-mono uppercase text-[#686868] tracking-widest mb-1">
            Pomodoro Focus
          </span>
          <div className="font-display font-black text-2xl text-[#111318] tracking-tight mb-2">
            {formatTime(seconds)}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsActive(!isActive)}
              className="px-3 py-1 rounded bg-[#111318] text-white text-[9px] font-mono font-semibold flex items-center gap-1 hover:bg-[#F4C400] hover:text-[#111318] transition-colors"
            >
              {isActive ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
              <span>{isActive ? "Pause" : "Start"}</span>
            </button>
            <button
              onClick={resetTimer}
              className="p-1 rounded border border-[#D9D9D4] text-[#686868] hover:text-[#111318] hover:border-[#111318] transition-colors"
              aria-label="Reset Timer"
            >
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
