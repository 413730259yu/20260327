/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const SkillCircle = ({ name, percent }: { name: string; percent: number }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-start p-1 text-center h-full">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-slate-700"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-orange-500"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">
          {percent}%
        </div>
      </div>
      <span className="mt-2 text-[9px] sm:text-[10px] leading-tight font-medium text-slate-300 max-w-[70px]">{name}</span>
    </div>
  );
};

const SkillBar = ({ name, score }: { name: string; score: number }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-slate-200">{name}</span>
      <span className="text-xs text-slate-400">{score}%</span>
    </div>
    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
      <motion.div
        className="bg-orange-500 h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${score}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default function App() {
  const proSkills = [
    { name: "前端網頁開發", percent: 95 },
    { name: "後端網頁", percent: 80 },
    { name: "平面設計", percent: 85 },
    { name: "插畫", percent: 70 },
    { name: "品牌視覺規劃", percent: 75 },
    { name: "介面/網頁設計", percent: 90 },
    { name: "AutoCAD製圖", percent: 85 },
    { name: "3D建模彩現", percent: 65 },
    { name: "設計企劃/專案管理", percent: 80 },
  ];

  const progSkills = [
    { name: "C++", score: 70 },
    { name: "VB.net", score: 60 },
    { name: "AutoLisp", score: 85 },
    { name: "Verilog", score: 50 },
    { name: "Python", score: 75 },
    { name: "Html/Css/Js", score: 95 },
    { name: "Pug/Sass", score: 90 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-12 flex justify-center items-start font-sans">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
        
        {/* Left Column (left) */}
        <div className="left w-full md:w-[40%] bg-slate-900 text-white p-8 sm:p-10 flex flex-col">
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-black mb-3 tracking-tight">吳哲宇</h1>
            <h4 className="text-orange-500 font-bold text-lg mb-6 tracking-wide">動畫互動網頁特效入門 | 墨雨設計</h4>
            <hr className="border-slate-800 mb-6" />
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              動畫互動網頁程式入門講師、墨雨設計 Monoame Design 負責人、設計與網頁全端雙棲的工程師，為了有趣的想法赴湯蹈火。
            </p>
          </header>

          <div className="flex gap-4 mb-12">
            <a href="#" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl text-center text-sm font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
              <ExternalLink size={18} /> 作品集
            </a>
            <a href="#" className="flex-1 border border-slate-700 hover:bg-slate-800 text-white py-3 px-4 rounded-xl text-center text-sm font-bold transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Github size={18} /> Github
            </a>
          </div>

          <section className="mb-12">
            <div className="mb-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-1">Skills</h4>
              <h2 className="text-2xl font-black text-white">專業技能</h2>
            </div>
            <div className="grid grid-cols-4 gap-y-6 gap-x-2">
              {proSkills.map((skill, i) => (
                <div key={i}>
                  <SkillCircle name={skill.name} percent={skill.percent} />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-auto">
            <div className="mb-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-1">Programming Skill</h4>
              <h2 className="text-2xl font-black text-white">程式技能</h2>
            </div>
            <div className="space-y-2">
              {progSkills.map((skill, i) => (
                <div key={i}>
                  <SkillBar name={skill.name} score={skill.score} />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (right) */}
        <div className="right w-full md:w-[60%] p-8 sm:p-12 bg-white text-slate-800">
          <section className="mb-16">
            <div className="mb-10">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-1">Experience / Works</h4>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 relative inline-block">
                經歷與作品
                <span className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-orange-500 rounded-full"></span>
              </h2>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-[23px] before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-100">
              {[
                {
                  year: "2014",
                  items: [
                    "康師傅 活動用體感切醬料包遊戲 程式開發",
                    "交大電機 高中生專區 網頁設計 / 開發",
                    "長庚醫院 聲熱石墨希 腦瘤治療新契機3D 動畫"
                  ]
                },
                {
                  year: "2015",
                  items: [
                    "RemyMartin & Selinko 智慧酒瓶認證 UI/UX",
                    "Dyverse Studio 歧響音樂 互動官網 設計 / 開發"
                  ]
                },
                {
                  year: "2016",
                  items: [
                    "Complex Festival 複雜生活節互動官網 設計 / 開發",
                    "花旗聯合勸募官網 設計 / 開發",
                    "世界健康大會官網 設計 / 開發",
                    "雜學校展覽 網頁開發",
                    "開設動畫互動網頁程式入門線上課程"
                  ]
                },
                {
                  year: "2017",
                  items: [
                    "台北聲音地景計畫官網 設計 / 開發",
                    "工研院綠能所 節電官網 設計/開發",
                    "睿軒 / 睿田生技公司官網開發",
                    "D-school 台大創新設計學院網站 設計 / 開發",
                    "開設動畫互動網頁特效入門線上課程"
                  ]
                }
              ].reverse().map((exp, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center font-black text-slate-400 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300 shadow-sm">
                      {exp.year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-black text-slate-800 mb-4">{exp.year} 年度紀事</h3>
                    <ul className="space-y-4">
                      {exp.items.map((item, j) => (
                        <li key={j} className="text-slate-600 flex items-start gap-3 group/item">
                          <span className="w-2 h-2 rounded-full bg-slate-200 mt-2.5 shrink-0 group-hover/item:bg-orange-400 transition-colors"></span>
                          <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-10">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-1">Contests</h4>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 relative inline-block">
                比賽經歷
                <span className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-orange-500 rounded-full"></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "宏碁數位創作獎第五屆首獎",
                "宏碁數位創作獎第六屆首獎",
                "宏碁數位創作獎第七屆首獎暨評審團大獎",
                "宏碁數位創作獎第八屆優勝",
                "宏碁數位創作獎第九屆首獎暨評審團大獎",
                "智慧鐵人競賽高職組首獎",
                "梅竹黑客松 微軟組首獎",
                "經濟部智慧城市黒客松 實踐組首獎"
              ].map((contest, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <p className="text-sm font-bold text-slate-700">{contest}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
